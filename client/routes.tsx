import * as React from 'react';
import { Provider } from 'react-redux';
import { Router, Route, Switch, Redirect } from 'react-router-dom';
import 'semantic-ui-css/semantic.min.css';
import { store } from './config/store';
import { history } from './config/history';

import Root from './views/root/RootContainer';
import Signup from './views/signup/SignupContainer';

export default () => (
  <Provider store={store}>
    <Router history={history}>
      <Switch>
        <Route path="/home" component={Root} />
        <Route path="/signup" component={Signup} />
        <Redirect to="/signup" />
      </Switch>
    </Router>
  </Provider>
);
