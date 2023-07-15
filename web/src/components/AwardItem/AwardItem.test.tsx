import { render } from '@redwoodjs/testing/web';

import AwardItem from './AwardItem';

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('AwardItem', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<AwardItem name="Test" year={2032} />);
    }).not.toThrow();
  });
});
