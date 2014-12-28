var React = require('react');
var Demos = require('./demos');

var Docs = React.createClass({
  render: function () {
    return (
      <div className='vertical grid-frame'>
          <div className='title-bar primary'>
              <span className='title'>React Foundation Apps</span>
          </div>
          <div className='grid-block'>
            <Demos />
          </div>
        </div>
    );
  }
});

module.exports = Docs;
