import { useTranslation } from 'react-i18next';

import Resume from 'src/components/Resume/Resume';

const ResumePage = () => {
  const { t } = useTranslation();

  const expert = t('expert');
  const intermediate = t('intermediate');
  const basic = t('basic');

  return (
    <>
      <div className="p-5">
        <Resume
          name="Matheus Costa"
          position={t('position')}
          description={t('description')}
          cellphone="+5521996954269"
          formattedCellphone="+55 (21) 99695-4269"
          email="matt@mkalo.dev"
          location="Niterói, RJ - Brazil"
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
          workHistory={[
            {
              company: 'Freelancer',
              position: 'C/C++ & Full-Stack Developer',
              startDate: new Date('2016-12-01'),
              endDate: new Date('2020-07-01'),
              projects: [
                {
                  name: 'The Forgotten Server',
                  url: 'https://github.com/otland/forgottenserver',
                  description: t('tfsDescription'),
                  tags: [
                    'C++',
                    'Lua',
                    'Network Protocols',
                    'DLL Injection',
                    'MySQL',
                    'PHP',
                    'HTML',
                    'CSS',
                    'Open Source',
                    'MongoDB',
                  ],
                },
              ],
            },
          ]}
        />
      </div>
    </>
  );
};

export default ResumePage;
