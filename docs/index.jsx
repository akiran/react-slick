'use strict';

var React = require('react');
var ReactDOM = require('react-dom');
var Docs = require('./docs');

React.initializeTouchEvents && React.initializeTouchEvents(true);
ReactDOM.render(<Docs />, document.getElementById('rapp'));

