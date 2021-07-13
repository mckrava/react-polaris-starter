import React from 'react';
import { Route } from 'react-router-dom';

import MainDashboard from './mainDashboardComponent';

const MainDashboardRoutes = ({ component: Component, ...rest }) => {
  return (
    <Route
      {...rest}
      render={props => (
        <MainDashboard>
          <Component {...props} />
        </MainDashboard>
      )}
    />
  );
};

export default MainDashboardRoutes;
