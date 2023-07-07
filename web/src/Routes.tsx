import { Router, Route, Set } from '@redwoodjs/router';

import PortfolioLayout from './layouts/PortfolioLayout/PortfolioLayout';

const Routes = () => {
  return (
    <Router>
      <Set wrap={PortfolioLayout}>
        <Route path="/" page={HomePage} name="home" />
      </Set>
      <Route notfound page={NotFoundPage} />
    </Router>
  );
};

export default Routes;
