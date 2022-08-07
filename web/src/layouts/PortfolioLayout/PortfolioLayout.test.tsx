import { render } from '@redwoodjs/testing/web';

import PortfolioLayout from './PortfolioLayout';

//   Improve this test with help from the Redwood Testing Doc:
//   https://redwoodjs.com/docs/testing#testing-pages-layouts

describe('PortfolioLayout', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<PortfolioLayout />);
    }).not.toThrow();
  });
});
