# react-slick

[![Join the chat at https://gitter.im/akiran/react-slick](https://badges.gitter.im/Join%20Chat.svg)](https://gitter.im/akiran/react-slick?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge&utm_content=badge)


Carousel component built with React. It is a react port of [slick carousel](http://kenwheeler.github.io/slick/)



### Installation

```bash
npm install react-slick
```

⚠️ Also install slick-carousel for css and font 

```bash
npm install slick-carousel
@import "~slick-carousel/slick/slick.css";
@import "~slick-carousel/slick/slick-theme.css";
```

or add cdn link in your html

```html
<link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css" />
<link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css" />
```

### [Demos](http://neostack.com/opensource/react-slick)

### [PlayGround](https://jsfiddle.net/kirana/20bumb4g/)
Use [jsfiddle template](https://jsfiddle.net/kirana/20bumb4g/) to try react-slick with different settings.

### Filing issues
Please replicate your issue with [jsfiddle template](https://jsfiddle.net/kirana/20bumb4g/) and post it along with issue to make it easy for me to debug.


### Starter Kit
Checkout [yeoman generator](https://github.com/akiran/generator-react-slick) to quickly
get started with react-slick.

### Example

```js
var React = require('react');
var Slider = require('react-slick');

class SimpleSlider extends React.Component {
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
}
```

|    Property    | Type |          Description          | Working |
| -------------  | ---- |          -----------          | ------- |
| accessibility  | bool | Enables tabbing and arrow key navigation | Yes |
| className      | String |Additional class name for the inner slider div | Yes |
| adaptiveHeight | bool | Adjust the slide's height automatically | Yes |
| arrows         | bool | Should we show Left and right nav arrows | Yes |
| nextArrow      | React Element | Use this element for the next arrow button [Example](https://github.com/akiran/react-slick/blob/master/examples/CustomArrows.js) | Yes |
| prevArrow      | React Element | Use this element for the prev arrow button [Example](https://github.com/akiran/react-slick/blob/master/examples/CustomArrows.js) | Yes |
| autoplay       | bool | Should the scroller auto scroll? | Yes |
| autoplaySpeed  |  int | delay between each auto scoll. in ms | Yes |
| centerMode     | bool | Should we centre to a single item? | Yes |
| centerPadding  | | | |
| cssEase        | | | |
| customPaging   | func | Custom paging templates. [Example](https://github.com/akiran/react-slick/blob/master/examples/CustomPaging.js)| Yes |
| dots           | bool | Should we show the dots at the bottom of the gallery | Yes |
| dotsClass      | string | Class applied to the dots if they are enabled | Yes |
| draggable      | bool | Is the gallery scrollable via dragging on desktop? | Yes |
| easing         | string | | |
| fade           | bool | Slides use fade for transition  | Yes |
| focusOnSelect  | bool | Go to slide on click | Yes |
| infinite       | bool | should the gallery wrap around its contents | Yes |
| initialSlide   | int | which item should be the first to be displayed | Yes |
| lazyLoad       | bool | Loads images or renders components on demands | Yes |
| pauseOnHover   | bool | prevents autoplay while hovering | Yes |
| responsive     | array | Array of objects in the form of `{ breakpoint: int, settings: { ... } }` The breakpoint _int_ is the `maxWidth` so the settings will be applied when resolution is below this value. Breakpoints in the array should be ordered from smallest to greatest. Use 'unslick' in place of the settings object to disable rendering the carousel at that breakpoint. Example: `[ { breakpoint: 768, settings: { slidesToShow: 3 } }, { breakpoint: 1024, settings: { slidesToShow: 5 } }, { breakpoint: 100000, settings: 'unslick' } ]`| Yes |
| rtl            | bool | Reverses the slide order | Yes |
| slide         | string |||
| slidesToShow | int | Number of slides to be visible at a time | Yes |
| slidesToScroll | int | Number of slides to scroll for each navigation item
| speed | int |||
| swipe | bool |||
| swipeToSlide | bool | Allow users to drag or swipe directly to a slide irrespective of slidesToScroll | Yes |
| touchMove | bool |||
| touchThreshold | int |||
| variableWidth | bool |||
| useCSS | bool | Enable/Disable CSS Transitions | Yes |
| vertical | bool | Vertical slide mode | Yes |
| afterChange | function | callback function called after the current index changes. The new index is accessible in the first parameter of the callback function. | Yes |
| beforeChange | function | callback function called before the current index changes. The old and the new indexes are accessible in the first and the second parameters of the callback function respectively. | Yes |
| slickGoTo | int | go to the specified slide number | |


### Methods
* `slickNext()`   - function called to change current slide on next slide ([Example](https://github.com/akiran/react-slick/blob/master/examples/PreviousNextMethods.js))
* `slickPrev()`   - function called to change current slide on previous slide ([Example](https://github.com/akiran/react-slick/blob/master/examples/PreviousNextMethods.js))
* `slickGoTo(slideNumber)` - function called to change current slide to given slide number ([Example](https://github.com/akiran/react-slick/blob/master/examples/SlickGoTo.js))

### Custom next/prev arrows

To customize the next/prev arrow elements, simply create new React components and set them
as the values of nextArrow and prevArrow.

```js
class LeftNavButton extends React.Component {
  render() {
    return <button {...this.props}>Next</button>
  }
}
```

Important: be sure that you pass your component's props to your clickable element
like the example above. If you don't, your custom component won't trigger the click handler.

You can also set `onClick={this.props.onClick}` if you only want to set the click handler.

### Flexbox support
If you have flex property on container div of slider, add below css
```css
* {
  min-height: 0;
  min-width: 0;
}
```

### Test Setup
If you try to run tests with jest in a project that uses react-slick, you may run into this error
```
matchMedia not present, legacy browsers require a polyfill
```

To fix this issue add below snippet in test-setup.js
```js
window.matchMedia = window.matchMedia || function() {
    return {
        matches : false,
        addListener : function() {},
        removeListener: function() {}
    };
};

```
and add below jest config in package.json
```json
"jest": {
    "setupFiles": ["test-setup.js"]
}
```


### Development
Want to run demos locally

```bash
git clone https://github.com/akiran/react-slick
npm install
npm start
open http://localhost:8080
```

### Polyfills for old IE support
`matchMedia` support from [media-match](https://github.com/weblinc/media-match)
