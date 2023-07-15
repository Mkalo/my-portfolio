import type { ComponentMeta, ComponentStory } from '@storybook/react';

import SideProjectItem from './SideProjectItem';

export const generated: ComponentStory<typeof SideProjectItem> = (args) => {
  return <SideProjectItem {...args} />;
};

export default {
  title: 'Components/SideProjectItem',
  component: SideProjectItem,
  args: {
    name: 'Side Project',
    url: 'https://mkalo.dev',
    description: 'This is a side project',
    tags: ['React', 'Typescript', 'Javascript', 'Node.js', 'HTML', 'CSS'],
  },
} as ComponentMeta<typeof SideProjectItem>;
