import type { APIGatewayEvent, Context } from 'aws-lambda';

const chromium = require('@sparticuz/chromium');
const puppeteer = require('puppeteer-core');

async function render(darkMode?: boolean) {
  const browser = await puppeteer.launch(
    process.env.AWS_LAMBDA_FUNCTION_VERSION
      ? {
          args: chromium.args,
          defaultViewport: chromium.defaultViewport,
          executablePath: await chromium.executablePath(),
          headless: chromium.headless,
        }
      : {
          headless: true,
        }
  );

  const page = await browser.newPage();

  await page.setViewport({
    width: 950,
    height: 950,
  });

  await page.goto('https://mkalo.dev/resume');

  const htmlElement = await page.$('html');

  if (!htmlElement) {
    throw new Error('No html element found');
  }

  const boundingBox = await htmlElement.boundingBox();

  if (!boundingBox) {
    throw new Error('No bounding box found');
  }

  if (darkMode) {
    await htmlElement.evaluate((el) => el.classList.add('dark'));
  }

  const buffer = await page.pdf({
    width: `${boundingBox.width}px`,
    height: `${boundingBox.height + 50}px`,
    printBackground: true,
  });

  await browser.close();

  return buffer;
}

export const handler = async (event: APIGatewayEvent, _context: Context) => {
  if (event.httpMethod !== 'GET') {
    return { statusCode: 405 };
  }

  const darkMode = event.queryStringParameters?.darkMode === 'true';

  let buffer;

  try {
    buffer = await render(darkMode);
  } catch (error) {
    console.error(error);
    return {
      statusCode: 500,
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        error,
      }),
    };
  }

  return {
    isBase64Encoded: true,
    statusCode: 200,
    headers: {
      'Content-Type': 'application/pdf',
      'Content-Disposition': 'attachment; filename=resume.pdf',
    },
    body: buffer.toString('base64'),
  };
};
