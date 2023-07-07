import { render } from '@redwoodjs/testing/web';

import Resume from './Resume';

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('Resume', () => {
  it('renders successfully', () => {
    expect(() => {
      render(
        <Resume
          name="Makino"
          position={'Some random position'}
          description="Test description"
          yearsOfExperience={1}
          technicalSkills={[{ name: 'Node.js', years: 3, level: 'Expert' }]}
          additionalSkills={['AWS', 'Git', 'Docker']}
        />
      );
    }).not.toThrow();
  });
});
