Sections removed from readme
============================

### Methods
Name              | Arguments       | Description
------------------|-----------------|-------------------------
`slickPrev`       | None            | go to previous slide
`slickNext`       | None            | go to next slide
`slickGoTo`       | index, dontAnimate| go to the given slide index
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
