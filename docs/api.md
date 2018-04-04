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

