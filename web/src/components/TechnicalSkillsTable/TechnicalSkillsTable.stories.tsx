import type { ComponentMeta, ComponentStory } from '@storybook/react';

import TechnicalSkillsTable from './TechnicalSkillsTable';

export const generated: ComponentStory<typeof TechnicalSkillsTable> = (
  args
) => {
  return <TechnicalSkillsTable {...args} />;
};

export default {
  title: 'Components/TechnicalSkillsTable',
  component: TechnicalSkillsTable,
  args: {
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
  },
} as ComponentMeta<typeof TechnicalSkillsTable>;
