import type { ComponentMeta, ComponentStory } from '@storybook/react';

import AwardItem from './AwardItem';

export const generated: ComponentStory<typeof AwardItem> = (args) => {
  return <AwardItem {...args} />;
};

export default {
  title: 'Components/AwardItem',
  component: AwardItem,
  args: {
    name: `1st Place in the Programming Marathon of the Federal Fluminense University's Computing Week`,
    year: 2017,
  },
} as ComponentMeta<typeof AwardItem>;
