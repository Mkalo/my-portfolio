import { render } from '@redwoodjs/testing/web';

import TechnicalSkillsTable from './TechnicalSkillsTable';

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('TechnicalSkillsTable', () => {
  it('renders successfully', () => {
    expect(() => {
      render(
        <TechnicalSkillsTable
          technicalSkills={[
            { name: 'Node.js', years: 7, level: 'Expert' },
            { name: 'Typescript', years: 5, level: 'Expert' },
            { name: 'Javascript', years: 5, level: 'Expert' },
          ]}
        />
      );
    }).not.toThrow();
  });
});
