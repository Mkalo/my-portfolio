import type { ComponentMeta, ComponentStory } from '@storybook/react';

import WorkHistoryItem from './WorkHistoryItem';

export const generated: ComponentStory<typeof WorkHistoryItem> = (args) => {
  return <WorkHistoryItem {...args} />;
};

export default {
  title: 'Components/WorkHistoryItem',
  component: WorkHistoryItem,
  args: {
    position: 'Test',
    company: 'Company',
    startDate: new Date(),
    projects: [
      {
        name: 'Test Project',
        description: 'Test Description',
        tags: ['Test Tag'],
      },
    ],
  },
} as ComponentMeta<typeof WorkHistoryItem>;
