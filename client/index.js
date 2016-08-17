import React from 'react';
import { render } from 'react-dom';
import {Router, Route, browserHistory} from 'react-router';

import App from './components/App';
import UserDetails from'./components/UserDetails';

render(
  <Router history={browserHistory}>
    <Route path="/" component={App} />
    <Route path="user-details" component={UserDetails} />
  </Router>,
   document.getElementById('app')
 );
