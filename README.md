### react-slick

[![Backers on Open Collective](https://opencollective.com/react-slick/backers/badge.svg)](#backers) [![Sponsors on Open Collective](https://opencollective.com/react-slick/sponsors/badge.svg)](#sponsors) [![Join the chat at https://gitter.im/akiran/react-slick](https://badges.gitter.im/Join%20Chat.svg)](https://gitter.im/akiran/react-slick?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge&utm_content=badge)

##### Carousel component built with React. It is a react port of [slick carousel](http://kenwheeler.github.io/slick/)

## [Documentation](http://react-slick.neostack.com)


### Installation

**npm**
```bash
npm install react-slick
```
**yarn**
```bash
yarn add react-slick
```

⚠️ Also install slick-carousel for css and font

```bash
npm install slick-carousel
@import "~slick-carousel/slick/slick.css";
@import "~slick-carousel/slick/slick-theme.css";
```

But be aware slick-carousel has a peer-dependancy on jQuery which you, or your colleagues may not like to see in your console output, so you can always grab the CSS from there and convert it into any CSS in JS solution that you might be using.

or add cdn link in your html

```html
<link rel="stylesheet" type="text/css" charset="UTF-8" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css" />
<link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css" />
```



### [PlayGround](https://codesandbox.io/s/zzloxr09mp)
Use [CodeSandbox template](https://codesandbox.io/s/zzloxr09mp) to try react-slick with different settings.

<a href="https://opencollective.com/react-slick/donate" target="_blank">
  <img align="right" src="https://opencollective.com/react-slick/donate/button@2x.png?color=blue" width=300 />
</a>


### Filing issues
Please replicate your issue with [CodeSandbox template](https://codesandbox.io/s/zzloxr09mp) and post it along with issue to make it easy for me to debug.


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

### Props

Props            | Type            | Default Value                   | Description                                                 | Working
---------------- | --------------- | ------------------------------- | -----------                                                 | -------
`accessibility`  | `bool`          | `true`                          | Enable tabbing and arrow key navigation                     | Yes
`asNavFor`       | `ref`           | `undefined`                     | provide ref to another slider and sync it with current slider| Yes
`className`      | `string`        | `''`                            | CSS class for inner slider div                              | Yes
`adaptiveHeight` | `bool`          | `false`                         | Adjust the slide's height automatically                     | Yes
`arrows`         | `bool`          | `true`                          |                                                             | Yes
`nextArrow`      | React Element   | `null`                          | React element for next arrow. [Example](examples/CustomArrows.js)       | Yes
`prevArrow`      | React Element   | `null`                          | React element for prev arrow. [Example](examples/CustomArrows.js)       | Yes
`autoplay`       | `bool`          | `false`                         |                                                             | Yes
`autoplaySpeed`  | `int`           | `3000`                          | Delay between each auto scroll (in milliseconds)            | Yes
`centerMode`     | `bool`          | `false`                         | Center current slide                                        | Yes
`centerPadding`  |                 | `'50px'`                        |                                                             | Yes
`cssEase`        |                 | `'ease'`                        |                                                             | Yes
`customPaging`   | `func`          | `i => <button>{i + 1}</button>` | Custom paging templates. [Example](examples/CustomPaging.js)| Yes
`dots`           | `bool`          | `Default`                       |                                                             | Yes
`dotsClass`      | `string`        | `'slick-dots'`                  | CSS class for dots                                          | Yes
`appendDots`     | `func`          | `dots => <ul>{dots}</ul>`       | Custom dots templates. Works same as customPaging           | Yes
`draggable`      | `bool`          | `true`                          | Enable scrollable via dragging on desktop                   | Yes
`easing`         | `string`        | `'linear'`                      |                                                             | Yes
`edgeEvent`      | `func`          | `null`                          | Edge dragged event in finite case, `direction => {...}`
`fade`           | `bool`          | `Default`                       |                                                             | Yes
`focusOnSelect`  | `bool`          | `false`                         | Go to slide on click                                        | Yes
`infinite`       | `bool`          | `true`                          | Infinitely wrap around contents                             | Yes
`initialSlide`   | `int`           | `0`                             | Index of first slide                                        | Yes
`lazyLoad`       | `bool`          | `false`                         | Load images or render components on demand                  | Yes
`onLazyLoad`     | `func`          | `null`                          | Callback after slides load lazily `slidesLoaded => {...}`   | Yes
`pauseOnHover`   | `bool`          | `true`                          | Prevents autoplay while hovering                            | Yes
`responsive`     | `array`         | `null`                          | Customize based on breakpoints (detailed explanation below) | Yes
`rtl`            | `bool`          | `false`                         | Reverses the slide order                                    | Yes
`slide`          | `string`        | `'div'`                         | Slide container type                                        | Yes
`slidesToShow`   | `int`           | `1`                             | How many slides to show in one frame                        | Yes
`slidesToScroll` | `int`           | `1`                             | How many slides to scroll at once                           | Yes
`speed`          | `int`           | `500`                           | Animation speed in milliseconds                             | Yes
`swipe`          | `bool`          | `true`                          | Enable/disable swiping to change slides                     | Yes
`onSwipe`        | `func`          | `null`                          | Callback after slide changes by swiping                     | Yes
`swipeToSlide`   | `bool`          | `false`                         | Enable drag/swipe irrespective of `slidesToScroll`          | Yes
`touchMove`      | `bool`          | `true`                          |                                                             | Yes
`touchThreshold` | `int`           | `5`                             |                                                             | Yes
`variableWidth`  | `bool`          | `false`                         |                                                             | Yes
`useCSS`         | `bool`          | `true`                          | Enable/Disable CSS Transitions                              | Yes
`vertical`       | `bool`          | `false`                         |                                                             | Yes
`init`           | `func`          | `null`                          | componentWillMount callback. `() => void`                   | Yes
`reInit`         | `func`          | `null`                          | componentDidUpdate callback. `() => void`                   | Yes
`afterChange`    | `func`          | `Default`                       | Index change callback. `index => ...`                       | Yes
`beforeChange`   | `func`          | `null`                          | Index change callback. `(oldIndex, newIndex) => ...`        | Yes
`slickGoTo`      | `int`           | `Default`                       | Go to the specified slide number                            | Yes


### Methods
Name              | Arguments       | Description
------------------|-----------------|-------------------------
`slickPrev`       | None            | go to previous slide
`slickNext`       | None            | go to next slide
`slickGoTo`       | index:number    | go to the given slide index
`slickPause`      | None            | pause the autoplay
`slickPlay`       | None            | start the autoplay


#### Followings are not going to be implemented
Name              |type             | Reason
------------------|-----------------|-------------------
`unslick`         | method          | same functionality can be achieved with `unslick` prop
`slickSetOption`  | method          | same functionality can be achieved via props and managing state for them in wrapper
`slickFilter`     | method          | same functionality can be achieved as with dynamic slides, look at dynamic slides [example](https://github.com/akiran/react-slick/blob/master/examples/DynamicSlides.js)
`slickUnfilter`   | method          | same functionality can be achieved as with dynamic slides, look at dynamic slides [example](https://github.com/akiran/react-slick/blob/master/examples/DynamicSlides.js)
`slickAdd`        | method          | same functionality can be achieved as with dynamic slides, look at dynamic slides [example](https://github.com/akiran/react-slick/blob/master/examples/DynamicSlides.js)
`slickRemove`     | method          | same functionality can be achieved as with dynamic slides, look at dynamic slides [example](https://github.com/akiran/react-slick/blob/master/examples/DynamicSlides.js)
`slickCurrentSlide`| method         | same functionality can be achieved with `beforeChange hook`
`slickGetOption`  | method          | manage wrapper state for desired options
`getSlick`        | method          | a simple ref will do

#### `responsive` property

Array of objects in the form of `{ breakpoint: int, settings: { ... } }` The breakpoint _int_ is the `maxWidth` so the settings will be applied when resolution is below this value. Breakpoints in the array should be ordered from smallest to greatest. Use 'unslick' in place of the settings object to disable rendering the carousel at that breakpoint. Example: `[ { breakpoint: 768, settings: { slidesToShow: 3 } }, { breakpoint: 1024, settings: { slidesToShow: 5 } }, { breakpoint: 100000, settings: 'unslick' } ]`

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
cd react-slick
npm install
npm start
open http://localhost:8080
```

### Polyfills for old IE support
`matchMedia` support from [media-match](https://github.com/weblinc/media-match)

## Contributors

This project exists thanks to all the people who contribute. [[Contribute](CONTRIBUTING.md)].
<a href="graphs/contributors"><img src="https://opencollective.com/react-slick/contributors.svg?width=890" /></a>


## Backers

Thank you to all our backers! 🙏 [[Become a backer](https://opencollective.com/react-slick#backer)]

<a href="https://opencollective.com/react-slick#backers" target="_blank"><img src="https://opencollective.com/react-slick/backers.svg?width=890"></a>


## Sponsors

Support this project by becoming a sponsor. Your logo will show up here with a link to your website. [[Become a sponsor](https://opencollective.com/react-slick#sponsor)]

<a href="https://opencollective.com/react-slick/sponsor/0/website" target="_blank"><img src="https://opencollective.com/react-slick/sponsor/0/avatar.svg"></a>
<a href="https://opencollective.com/react-slick/sponsor/1/website" target="_blank"><img src="https://opencollective.com/react-slick/sponsor/1/avatar.svg"></a>
<a href="https://opencollective.com/react-slick/sponsor/2/website" target="_blank"><img src="https://opencollective.com/react-slick/sponsor/2/avatar.svg"></a>
<a href="https://opencollective.com/react-slick/sponsor/3/website" target="_blank"><img src="https://opencollective.com/react-slick/sponsor/3/avatar.svg"></a>
<a href="https://opencollective.com/react-slick/sponsor/4/website" target="_blank"><img src="https://opencollective.com/react-slick/sponsor/4/avatar.svg"></a>
<a href="https://opencollective.com/react-slick/sponsor/5/website" target="_blank"><img src="https://opencollective.com/react-slick/sponsor/5/avatar.svg"></a>
<a href="https://opencollective.com/react-slick/sponsor/6/website" target="_blank"><img src="https://opencollective.com/react-slick/sponsor/6/avatar.svg"></a>
<a href="https://opencollective.com/react-slick/sponsor/7/website" target="_blank"><img src="https://opencollective.com/react-slick/sponsor/7/avatar.svg"></a>
<a href="https://opencollective.com/react-slick/sponsor/8/website" target="_blank"><img src="https://opencollective.com/react-slick/sponsor/8/avatar.svg"></a>
<a href="https://opencollective.com/react-slick/sponsor/9/website" target="_blank"><img src="https://opencollective.com/react-slick/sponsor/9/avatar.svg"></a>
