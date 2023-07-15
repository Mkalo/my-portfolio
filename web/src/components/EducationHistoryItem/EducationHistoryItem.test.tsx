import { render } from '@redwoodjs/testing/web';

import EducationHistoryItem from './EducationHistoryItem';

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('EducationHistoryItem', () => {
  it('renders successfully', () => {
    expect(() => {
      render(
        <EducationHistoryItem
          institution="Test Institution"
          degree="Test Degree"
          startDate={new Date('2013-03-01')}
        />
      );
    }).not.toThrow();
  });
});
