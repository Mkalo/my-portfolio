import HomePage from 'src/pages/HomePage/HomePage';

import PortfolioLayout from './PortfolioLayout';

export const generated = (args) => {
  return <PortfolioLayout {...args} />;
};

export default {
  title: 'Layouts/PortfolioLayout',
  args: {
    children: <HomePage />,
  },
};
