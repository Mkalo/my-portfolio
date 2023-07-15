import { render } from '@redwoodjs/testing/web';

import TechnicalSkillsTable from './TechnicalSkillsTable';

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('TechnicalSkillsTable', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<TechnicalSkillsTable />);
    }).not.toThrow();
  });
});
