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

import type { ComponentMeta } from '@storybook/react';

import Resume from './Resume';

export const generated = () => {
  return <Resume />;
};

export default {
  title: 'Components/Resume',
  component: Resume,
} as ComponentMeta<typeof Resume>;
