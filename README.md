# react-slick
Carousel component built with React. It is a react port of [slick carousel](http://kenwheeler.github.io/slick/)

### Installation
```bash
  npm install react-slick
```
Also install slick-carousel for css and font
```bash
  bower install slick-carousel
```
### [Demos](http://webrafter.com/opensource/react-slick)

### Starter Kit
Checkout [yeoman generator](https://github.com/akiran/generator-react-slick) to quickly 
get started with react-slick.

### Example
```js
var React = require('react');
var Slider = require('react-slick');

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
```
