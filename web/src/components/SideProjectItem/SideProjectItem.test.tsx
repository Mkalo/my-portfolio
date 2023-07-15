import { render } from '@redwoodjs/testing/web';

import SideProjectItem from './SideProjectItem';

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('SideProjectItem', () => {
  it('renders successfully', () => {
    expect(() => {
      render(
        <SideProjectItem
          name="Test Side Project"
          tags={['Test Tag']}
          description="Some Description"
        />
      );
    }).not.toThrow();
  });
});
