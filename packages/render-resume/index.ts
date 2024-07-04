import express, { Router, Request, Response } from 'express';
import puppeteer from 'puppeteer';

const RESUME_ENDPOINT = 'https://mkalo.dev/resume';

const port = process.env.PORT || 3000;
const app = express();
const route = Router();

const sleep = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

async function renderResume(language: string, darkMode?: boolean) {
  const browser = await puppeteer.launch({
    headless: true,
  });

  const page = await browser.newPage();

  await page.setViewport({
    width: 768,
    height: 800,
  });

  await page.goto(`${RESUME_ENDPOINT}?lng=${language}`);

  // Wait for layout to stabilize
  await sleep(3000);

  const htmlElement = await page.$('html');

  if (!htmlElement) {
    throw new Error('No html element found');
  }

  const boundingBox = await htmlElement.boundingBox();

  if (!boundingBox) {
    throw new Error('No bounding box found');
  }

  if (darkMode) await htmlElement.evaluate((el) => el.classList.add('dark'));

  const buffer = await page.pdf({
    // Who knows wtf is going on here please tell me, I'm just using magic numbers at this point
    // Need to change when contents of resume changes...
    width: `${boundingBox.width * 1.8}px`,
    height: `${boundingBox.height * 0.91}px`,
    printBackground: true,
  });

  await browser.close();

  return buffer;
}

interface RenderedCache {
  buffer: Buffer;
  time: number;
  type: 'dark' | 'light';
  language: string;
}

const cache: RenderedCache[] = [];

async function getRenderedResume(
  language: string,
  darkMode?: boolean,
  expire = 1000 * 60 * 60
) {
  const cachedIndex = cache.findIndex(
    (c) => c.type === (darkMode ? 'dark' : 'light') && c.language === language
  );

  if (cachedIndex !== -1) {
    const cached = cache[cachedIndex];

    if (Date.now() - cached.time < expire) {
      return cached.buffer;
    } else {
      cache.splice(cachedIndex, 1);
    }
  }

  const buffer = await renderResume(language, darkMode);

  cache.push({
    buffer,
    time: Date.now(),
    type: darkMode ? 'dark' : 'light',
    language,
  });

  return buffer;
}

route.get('/', async (req: Request, res: Response) => {
  const darkMode = req.query.darkMode === 'true';
  const language = req.query.lng ?? 'en';
  let buffer: Buffer;
  try {
    buffer = await getRenderedResume(language.toString(), darkMode);
  } catch (e) {
    console.error(e);
    return res.status(500).send(e.message);
  }

  res.setHeader('Content-Type', 'application/pdf');
  res.setHeader('Content-Disposition', 'inline; filename=resume.pdf');
  res.setHeader('Content-Length', buffer.length);
  res.send(buffer);
});

app.use(route);

app.listen(port, () => {
  console.log(`> Ready on http://localhost:${port}`);
});
