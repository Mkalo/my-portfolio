import type { ComponentMeta, ComponentStory } from '@storybook/react';

import ProfileImage from 'src/images/profile.png';

import ProfilePicture from './ProfilePicture';

export const generated: ComponentStory<typeof ProfilePicture> = (args) => {
  return <ProfilePicture {...args} />;
};

export default {
  title: 'Components/ProfilePicture',
  component: ProfilePicture,
  args: {
    src: ProfileImage,
  },
} as ComponentMeta<typeof ProfilePicture>;
