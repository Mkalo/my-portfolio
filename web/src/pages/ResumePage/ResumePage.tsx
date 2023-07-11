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
            'MUI',
            'Jest',
            'Cypress',
            'Puppeteer',
            'Linux',
            'Electron',
            'MVC',
            'REST',
            'Web Sockets',
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
              company: 'Blue Orange Digital',
              position: 'Senior Full Stack Engineer',
              startDate: new Date('2023-02-01'),
              projects: [
                {
                  name: 'Insight Partners - Portco Platform',
                  description: t('insightDescription'),
                  tags: [
                    'Next.js',
                    'Nest.js',
                    'Tailwind',
                    'Prisma',
                    'React Query',
                    'AWS',
                    'S3',
                    'CloudFront',
                    'SES',
                    'EKS',
                    'Docker',
                    'Kubernetes',
                    'Node.js',
                    'Axios',
                    'MUI',
                  ],
                },
              ],
            },
            {
              company: 'Rock',
              position: 'Front-end Engineer',
              startDate: new Date('2020-07-01'),
              endDate: new Date('2023-03-01'),
              projects: [
                {
                  name: 'Rock Front-end',
                  url: 'https://rock.so/',
                  description: t('rockDescription'),
                  tags: [
                    'Vue',
                    'Vuex',
                    'Typescript',
                    'Electron',
                    'Node.js',
                    'SCSS',
                    'Protobuf',
                    'Web Sockets',
                  ],
                },
              ],
            },
            {
              company: 'Universidade Federal Fluminense',
              position: t('covid19Researcher'),
              startDate: new Date('2020-05-01'),
              endDate: new Date('2020-07-01'),
              projects: [
                {
                  name: t('covid19ResearcherProjectName'),
                  url: 'https://covid19.getuff.com.br/',
                  description: t('covid19ResearcherDescription'),
                  tags: ['Python', 'R', 'Optimization', 'Data Analysis'],
                },
              ],
            },
            {
              company: 'Universidade Federal Fluminense',
              position: 'Teaching Assistant',
              startDate: new Date('2017-01-01'),
              endDate: new Date('2018-11-01'),
              projects: [
                {
                  name: 'Problem Solving Laboratory Teaching Assistant',
                  description: t('taDescription'),
                  tags: ['Problem Solving', 'Python'],
                },
              ],
            },
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
                    'Typescript',
                    'Node.js',
                    'React',
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
