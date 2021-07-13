import React from 'react';
import { Switch, Route, withRouter } from 'react-router-dom';

import MainDashboardRoutes from '../../layouts/mainDashboard/mainDashboardRoutes';
import ErrorPage from '../Error/ErrorPage';

const App = () => {
  return (
    <Switch>
      <MainDashboardRoutes exact path="/" component={ErrorPage} />
      <Route exact path="/error">
        <ErrorPage />
      </Route>
    </Switch>
  );
};

export default withRouter(App);
