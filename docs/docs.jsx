var React = require('react');
var Demos = require('./demos');

var Docs = React.createClass({
  render: function () {
    return (
      <div className='vertical grid-frame'>
          <div className='title-bar primary'>
              <span className='title'>React Slick</span>
          </div>
          <div className='grid-content'>
            <div className='grid-container'>
              <Demos />
            </div>
          </div>
        </div>
    );
  }
});

module.exports = Docs;
