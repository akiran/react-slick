'use strict';

var React = require('react');
var Router = require('react-router');
var routes = require('./routes');

React.initializeTouchEvents(true);
Router.run(routes, Router.HistoryLocation, function (Handler) {
  React.render(<Handler />, document.getElementById('rapp'));
});
