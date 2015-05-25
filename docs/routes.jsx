'use strict';

var React = require('react');
var Router = require('react-router');
var Route = Router.Route;
var Docs = require('./docs');

var path = (process.env.NODE_ENV === 'dev_docs') ? '/': '/opensource/react-slick';
var routes = (
  <Route name='app' path={path} handler={Docs}>
  </Route>
);

module.exports = routes;
