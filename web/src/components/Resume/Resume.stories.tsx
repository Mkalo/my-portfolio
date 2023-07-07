// When you've added props to your component,
// pass Storybook's `args` through this story to control it from the addons panel:
//
// ```tsx
// import type { ComponentStory } from '@storybook/react'
//
// export const generated: ComponentStory<typeof Resume> = (args) => {
//   return <Resume {...args} />
// }
// ```
//
// See https://storybook.js.org/docs/react/writing-stories/args.

import type { ComponentMeta, ComponentStory } from '@storybook/react';

import Resume from './Resume';

export const generated: ComponentStory<typeof Resume> = (args) => {
  return <Resume {...args} />;
};

export default {
  title: 'Components/Resume',
  component: Resume,
  args: {
    name: 'Matheus Costa',
    position: 'Senior Software Engineer',
    description: `Software Engineer with 7 years of experience, focused on web development. Skilled in Node.js, Typescript, React, Vue.js, Lua and C++. A self-driven and ambitious individual, seeking an opportunity to use creativity and problem-solving skills to design, develop and improve systems and software to bring about growth and sustainability.`,
    yearsOfExperience: 7,
    technicalSkills: [
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
    ],
    additionalSkills: [
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
    ],
  },
} as ComponentMeta<typeof Resume>;
