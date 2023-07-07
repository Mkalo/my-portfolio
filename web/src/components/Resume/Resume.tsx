import { IonIcon } from '@ionic/react';
import {
  briefcaseOutline,
  calendarOutline,
  libraryOutline,
} from 'ionicons/icons';

import ProfileImage from 'src/images/profile.png';

import ProfilePicture from '../ProfilePicture/ProfilePicture';

const TechnicalSkills = [
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
];

const AdditionalSkills = [
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
];

const Resume = () => {
  return (
    <main>
      <header className="flex flex-col gap-8 sm:flex-row sm:gap-16">
        <div className="flex justify-center">
          <ProfilePicture src={ProfileImage} />
        </div>
        <hgroup className="flex flex-col">
          <h1 className="text-2xl font-semibold">Matheus Costa</h1>
          <p className="mb-4 font-medium">Senior Software Engineer</p>
          <p>
            Software Engineer with 7 years of experience, focused on web
            development. Skilled in Node.js, Typescript, Lua, Vue.js, Vuex, C++,
            React, MySQL, Python. A self-driven and ambitious individual,
            seeking an opportunity to use creativity and problem-solving skills
            to design, develop and improve systems and software to bring about
            growth and sustainability.
          </p>
        </hgroup>
      </header>
      <hr className="my-4 sm:my-8" />
      <section className="flex flex-col gap-4 sm:flex-row sm:gap-8">
        <div className="flex items-center gap-3">
          <IonIcon
            icon={calendarOutline}
            className="text-2xl"
            aria-label="calendar"
          />
          <h2 className="text-base font-semibold">Years of Experience</h2>
        </div>
        <p>7 years of experience</p>
      </section>
      <hr className="my-4 sm:my-8" />
      <section className="flex flex-col gap-8">
        <div className="flex items-center gap-3">
          <IonIcon
            icon={libraryOutline}
            className="text-2xl"
            aria-label="library"
          />
          <h2 className="text-xl font-semibold">Technical Skills</h2>
        </div>
        <div className="flex flex-col gap-10 sm:flex-row">
          <table className="block max-w-fit flex-shrink-0 border-collapse overflow-x-auto whitespace-nowrap rounded-t-lg shadow-sm shadow-zinc-500 [&_td]:py-2 [&_td]:px-5 [&_th]:py-2 [&_th]:px-5">
            <thead>
              <tr className="bg-emerald-500 dark:text-zinc-800">
                <th className="text-left">Skill</th>
                <th className="text-left">Years</th>
                <th className="text-left">Level</th>
              </tr>
            </thead>
            <tbody className="[&_tr]:border-b [&_tr]:border-zinc-400 dark:[&_tr]:border-zinc-500 [&>*:last-child]:border-emerald-500 [&>*:nth-of-type(even)]:bg-zinc-200 dark:[&>*:nth-of-type(even)]:bg-zinc-900">
              {TechnicalSkills.map((skill) => (
                <tr key={skill.name}>
                  <td className="py-2 px-5">{skill.name}</td>
                  <td className="py-2 px-5">{skill.years}</td>
                  <td className="py-2 px-5">{skill.level}</td>
                </tr>
              ))}
            </tbody>
          </table>
          <div className="flex flex-col gap-3">
            <h3 className="font-semibold">Additional skills:</h3>
            <ul className="flex list-inside list-disc flex-wrap gap-x-4 gap-y-1">
              {AdditionalSkills.map((skill) => (
                <li key={skill}>{skill}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>
      <hr className="my-4 sm:my-8" />
      <section className="flex flex-col gap-4 sm:flex-row sm:gap-32">
        <div className="flex h-fit shrink-0 items-center gap-3">
          <IonIcon
            icon={briefcaseOutline}
            className="text-2xl"
            aria-label="briefcase"
          />
          <h2 className="text-xl font-semibold">Work History</h2>
        </div>
        <p>TODO</p>
      </section>
    </main>
  );
};

export default Resume;
