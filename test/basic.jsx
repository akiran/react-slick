/* eslint-env mocha */
var React = require('react/addons');
var {TestUtils} = React.addons;
var Slider = require('..');
var DemoApp = require('../docs/demos.jsx');

describe('Basic functionality', () => {
  it('Should render README example', () => {
    var SimpleSlider = React.createClass({
      render: function () {
        var settings = {
          dots: true,
          infinite: true,
          speed: 500,
          slidesToShow: 1,
          slidesToScroll: 1
        };
        return (
          <Slider {...settings}>
            <div><h3>1</h3></div>
            <div><h3>2</h3></div>
            <div><h3>3</h3></div>
            <div><h3>4</h3></div>
            <div><h3>5</h3></div>
            <div><h3>6</h3></div>
          </Slider>
        );
      }
    });
    var component = TestUtils.renderIntoDocument(
      <SimpleSlider />
    );
    React.unmountComponentAtNode(React.findDOMNode(component).parentNode);
  });

  it('Should render Demo App', () => {
    var component = TestUtils.renderIntoDocument(
      <DemoApp />
    );
    React.unmountComponentAtNode(React.findDOMNode(component).parentNode);
  });
});
