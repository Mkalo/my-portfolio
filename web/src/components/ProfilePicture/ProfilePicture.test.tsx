import { render } from '@redwoodjs/testing/web';

import ProfileImage from 'src/images/profile.webp';

import ProfilePicture from './ProfilePicture';

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('ProfilePicture', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<ProfilePicture src={ProfileImage} />);
    }).not.toThrow();
  });
});
