// When you've added props to your component,
// pass Storybook's `args` through this story to control it from the addons panel:
//
// ```tsx
// import type { ComponentStory } from '@storybook/react'
//
// export const generated: ComponentStory<typeof TagsContainer> = (args) => {
//   return <TagsContainer {...args} />
// }
// ```
//
// See https://storybook.js.org/docs/react/writing-stories/args.

import type { ComponentMeta } from '@storybook/react';

import TagsContainer from './TagsContainer';

export const generated = () => {
  return <TagsContainer />;
};

export default {
  title: 'Components/TagsContainer',
  component: TagsContainer,
} as ComponentMeta<typeof TagsContainer>;
