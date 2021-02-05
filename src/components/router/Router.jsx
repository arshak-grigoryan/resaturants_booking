import React from 'react';
import { BrowserRouter, Route, Redirect, Switch } from 'react-router-dom';

// import { REPO_NAME_URL } from '../../constants';

import NotFound from '../pages/notFound/NotFound';
import Home from '../pages/home/Home';
import Restaurant from '../pages/restaurant/Restaurant';

import SuspensedRoute from './SuspensedRoute';

const Router = () => (
  <BrowserRouter>
    <Switch>
      <SuspensedRoute exact path="/restaurants" component={Home} />
      <SuspensedRoute exact path="/restaurants/:id" component={Restaurant} />
      <Route exact path="/notfound" component={NotFound} />
      <Redirect from="/" to="/restaurants" />
      <Redirect to="/notfound" />
    </Switch>
  </BrowserRouter>
);

export default Router;
