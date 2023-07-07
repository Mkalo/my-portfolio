import { Router, Route, Set } from '@redwoodjs/router';

import PortfolioLayout from './layouts/PortfolioLayout/PortfolioLayout';

const Routes = () => {
  return (
    <Router>
      <Route path="/resume" page={ResumePage} name="resume" />
      <Set wrap={PortfolioLayout}>
        <Route path="/" page={HomePage} name="home" prerender />
      </Set>
      <Route notfound page={NotFoundPage} />
    </Router>
  );
};

export default Routes;
