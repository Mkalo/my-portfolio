import { useTranslation } from 'react-i18next';

import { MetaTags } from '@redwoodjs/web';

import Resume from 'src/components/Resume/Resume';

const HomePage = () => {
  const { t } = useTranslation();

  return (
    <>
      <MetaTags title="Home" description="Home page" />
      <div className="flex items-center">
        <div className="mx-auto max-w-[950px] p-5">
          <Resume
            name="Matheus Costa"
            position={t('position')}
            description="Software Engineer with 7 years of experience, focused on web
            development. Skilled in Node.js, Typescript, Lua, Vue.js, Vuex, C++,
            React, MySQL, Python. A self-driven and ambitious individual,
            seeking an opportunity to use creativity and problem-solving skills
            to design, develop and improve systems and software to bring about
            growth and sustainability."
            yearsOfExperience={7}
            technicalSkills={[
              { name: 'Node.js', years: 7, level: 'Expert' },
              { name: 'Typescript', years: 5, level: 'Expert' },
              { name: 'Javascript', years: 5, level: 'Expert' },
              { name: 'HTML', years: 5, level: 'Expert' },
              { name: 'CSS', years: 5, level: 'Expert' },
              { name: 'React', years: 3, level: 'Expert' },
              { name: 'C++', years: 3, level: 'Intermediate' },
              { name: 'Lua', years: 3, level: 'Intermediate' },
              { name: 'Vue.js', years: 2, level: 'Intermediate' },
              { name: 'Python', years: 1, level: 'Intermediate' },
              { name: 'PHP', years: 1, level: 'Beginner' },
              { name: 'Angular', years: 1, level: 'Beginner' },
            ]}
            additionalSkills={[
              'AWS',
              'Git',
              'Docker',
              'MySQL',
              'PostgreSQL',
              'MongoDB',
              'Prisma',
              'Jest',
              'Cypress',
              'Puppeteer',
              'Linux',
              'Electron',
              'MVC',
              'REST',
              'GraphQL',
              'Optimizations',
              'Scrum',
              'Kanban',
              'Agile',
              'TDD',
              'CI/CD',
              'Vuex',
              'Redux',
              'Nest.js',
              'Express.js',
              'Next.js',
              'Protobuf',
              'Sass',
            ]}
          />
        </div>
      </div>
    </>
  );
};

export default HomePage;
