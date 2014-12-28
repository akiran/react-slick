var React = require('react');
var Router = require('react-router');
var Route= Router.Route;
var Docs = require('./docs');

var routes = (
  <Route name='app' path='/' handler={Docs}>
  </Route> 
);

module.exports = routes;