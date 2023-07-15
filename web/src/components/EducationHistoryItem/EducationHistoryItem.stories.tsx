import type { ComponentMeta, ComponentStory } from '@storybook/react';

import EducationHistoryItem from './EducationHistoryItem';

export const generated: ComponentStory<typeof EducationHistoryItem> = (
  args
) => {
  return <EducationHistoryItem {...args} />;
};

export default {
  title: 'Components/EducationHistoryItem',
  component: EducationHistoryItem,
  args: {
    institution: 'Universidade Federal Fluminense',
    degree: 'Bachelor of Computer Science',
    startDate: new Date('2013-03-01'),
    endDate: new Date('2018-12-01'),
  },
} as ComponentMeta<typeof EducationHistoryItem>;
