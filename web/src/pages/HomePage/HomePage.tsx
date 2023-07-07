import { useTranslation } from 'react-i18next';

import { MetaTags } from '@redwoodjs/web';

import Resume from 'src/components/Resume/Resume';

const HomePage = () => {
  const { t } = useTranslation();

  const expert = t('expert');
  const intermediate = t('intermediate');
  const basic = t('basic');

  return (
    <>
      <MetaTags title="Home" description="Home page" />
      <div className="flex items-center">
        <div className="mx-auto max-w-[950px] p-5">
          <Resume
            name="Matheus Costa"
            position={t('position')}
            description={t('description')}
            yearsOfExperience={7}
            technicalSkills={[
              { name: 'Node.js', years: 7, level: expert },
              { name: 'Typescript', years: 5, level: expert },
              { name: 'Javascript', years: 5, level: expert },
              { name: 'HTML', years: 5, level: expert },
              { name: 'CSS', years: 5, level: expert },
              { name: 'React', years: 3, level: expert },
              { name: 'C++', years: 3, level: intermediate },
              { name: 'Lua', years: 3, level: intermediate },
              { name: 'Vue.js', years: 2, level: intermediate },
              { name: 'Python', years: 1, level: intermediate },
              { name: 'PHP', years: 1, level: basic },
              { name: 'Angular', years: 1, level: basic },
            ]}
            additionalSkills={[
              'AWS',
              'Git',
              'Docker',
              'MySQL',
              'PostgreSQL',
              'MongoDB',
              'Prisma',
              'Sass',
              'Tailwind',
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
            ]}
          />
        </div>
      </div>
    </>
  );
};

export default HomePage;
