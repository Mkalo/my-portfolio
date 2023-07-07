import type { ComponentMeta } from '@storybook/react';

import ResumePage from './ResumePage';

export const generated = () => {
  return <ResumePage />;
};

export default {
  title: 'Pages/ResumePage',
  component: ResumePage,
} as ComponentMeta<typeof ResumePage>;
