import { MetaTags } from '@redwoodjs/web';

import ResumePage from '../ResumePage/ResumePage';

const HomePage = () => {
  return (
    <>
      <MetaTags title="Home" description="Home page" />
      <div className="flex items-center">
        <div className="mx-auto max-w-[950px] rounded lg:shadow-[0_1px_9px_#e8e8e8] lg:dark:shadow-[0_1px_9px_#1a1a1a]">
          <ResumePage />
        </div>
      </div>
    </>
  );
};

export default HomePage;
