import type { ComponentMeta, ComponentStory } from '@storybook/react';

import TagsContainer from './TagsContainer';

export const generated: ComponentStory<typeof TagsContainer> = (args) => {
  return <TagsContainer {...args} />;
};

export default {
  title: 'Components/TagsContainer',
  component: TagsContainer,
  args: {
    tags: ['React', 'Typescript', 'Javascript', 'Node.js', 'HTML', 'CSS'],
  },
} as ComponentMeta<typeof TagsContainer>;
