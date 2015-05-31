'use strict';

var React = require('react');
var Demos = require('./demos');

var Docs = React.createClass({
  render: function () {
    return (
      <div className=''>
          <div className='title-bar primary'>
              <span className='title'>React Slick</span>
          </div>
          <div className=''>
            <div className=''>
              <Demos />
            </div>
          </div>
        </div>
    );
  }
});

module.exports = Docs;
