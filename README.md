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
|    Property    | Type |          Description          | Working |
| -------------  | ---- |          -----------          | ------- |
| className      | String |Additional class name for the inner slider div | Yes | 
| adaptiveHeight | | | | 
| arrows         | bool | Should we show Left and right nav arrows | Yes |
| autoplay       | bool | Should the scroller auto scroll? | Yes |
| autoplaySpeed  |  int | delay between each auto scoll. in ms | Yes |
| centerMode     | bool | Should we centre to a single item? | Yes |
| centerPadding  | | | |
| cssEase        | | | | 
| dots           |bool | Should we show the dots at the bottom of the gallery | Yes |
| dotsClass      | string | Class applied to the dots if they are enabled | Yes | 
| draggable      | bool | Is the gallery scrollable via dragging on desktop? | Yes |
| easing         | string | | |
| fade           | bool | | | 
| focusOnSelect  | bool | | | 
| infinite       | should the gallery wrap around it's contents | Yes |
| initialSlide   | int | which item should be the first to be displayed | Yes (since pull req #17) | 
| responsive     | | | |
| rtl            | bool | | |
| slide         | string |||
| slidesToShow | int | Number of slides to be visible at a time | Yes |
| slidesToScroll | int | Number of slides to scroll for each navigation item
| speed | int |||
| swipe | bool |||
| swipeToSlide | bool |||
| touchMove | bool |||
| touchThreshold | int |||
| variableWidth | bool |||
| vertical | bool |||
| afterChange | function | callback function called when the current index changes | Yes (since pull req #17) |
