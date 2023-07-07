import { MetaTags } from '@redwoodjs/web';

import Resume from 'src/components/Resume/Resume';

const HomePage = () => {
  return (
    <>
      <MetaTags title="Home" description="Home page" />
      <div className="flex items-center">
        <div className="mx-auto max-w-[950px] pt-4">
          <Resume />
        </div>
      </div>
    </>
  );
};

export default HomePage;
