var devServer = require('webpack/hot/only-dev-server');
var React = require('react');
require('./app.scss');
var JqueryDemos = require('./jquery-demos');

var App = React.createClass({
  render: function () {
    return (
      <div>
        worked
        <JqueryDemos />
      </div>
    );
  }
});

React.render(<App />, document.getElementById('rapp'));