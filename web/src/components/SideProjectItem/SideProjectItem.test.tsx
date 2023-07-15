import { render } from '@redwoodjs/testing/web';

import SideProjectItem from './SideProjectItem';

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('SideProjectItem', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<SideProjectItem />);
    }).not.toThrow();
  });
});
