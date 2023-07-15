import { render } from '@redwoodjs/testing/web';

import TagsContainer from './TagsContainer';

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('TagsContainer', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<TagsContainer />);
    }).not.toThrow();
  });
});
