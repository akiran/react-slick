'use strict';

import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route } from 'react-router';
var Docs = require('./docs');

// Touch events are initialized by default in React 0.14
if (parseFloat(React.version.substring(0, 4)) < 0.14) {
  React.initializeTouchEvents(true);
}

var path = (process.env.NODE_ENV === 'dev_docs') ? '/': '/opensource/react-slick';
var routes = (
  <Router>
    <Route name='app' path={path} component={Docs} />
  </Router>
);

ReactDOM.render(routes, document.getElementById('rapp'));
