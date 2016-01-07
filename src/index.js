import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, IndexRoute} from 'react-router';
import createHashHistory from 'history/lib/createHashHistory';
import Users from './containers/Users';
import User from './containers/User';

var history = createHashHistory({
  queryKey: false
});

ReactDOM.render(
  (<Router history={history}>
    <Route path="/">
      <IndexRoute component={Users} />
      <Route path=":id" component={User} />
    </Route>
  </Router>),
  document.getElementById('app')
);