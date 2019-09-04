import * as React from 'react';
import { Provider } from 'react-redux';
import { Router, Route, Switch, Redirect } from 'react-router-dom';
import 'semantic-ui-css/semantic.min.css';
import { store } from './config/store';
import { history } from './config/history';

import Container from './hoc/container/Container';

import Root from './views/root/RootContainer';
import Signup from './views/signup/SignupContainer';
import Project from './views/project/ProjectContainer';

export default () => (
  <Provider store={store}>
    <Container>
      <Router history={history}>
        <Switch>
          <Route path="/home" component={Root} />
          <Route path="/signup" component={Signup} />
          <Route path="/project/:projectId" component={Project} />
          <Redirect to="/home" />
        </Switch>
      </Router>
    </Container>
  </Provider>
);
