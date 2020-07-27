# Change Log

## [Unreleased](https://github.com/akiran/react-slick/tree/HEAD)

## 0.22.0

**Release Changes**

- Internal Changes
  - converted InnerSlider from createReactClass object to ES6 class
  - removed all the mixins, created classMethods and pure utility functions instead
  - changed autoplay from setTimeout to setInterval
  - added images onload handlers to update dynamically
  - added autoplaying state for the betterment of autoplay and pause
  - removed usage of assign or Object.assign, using object spreading instead
  - implemented effects of touchMove props
  - fixed transition in opposite direction in case of continuous scrolling
  - added separate onclick event listener for images
  - added missing classes `regular` and `slider`
  - renamed events
    - edgeEvent => onEdge
    - init => onInit
    - reInit => onReInit
  - implemented `pauseOnDotsHover` property
  - implemented Progressive LazyLoad property, lazyLoad is now ondemand/progressive
  - implemented lazyloadError event
  - implemented useTransform property
  - implemented pauseOnFocus property
  - added resize observer to update on slider resize

- Bug Fixes
  - dynamic track updates on image load
  - fixed slickPause and autoPlay issues (paused slider would resume autoplay sometime)
  - fixed trackStyle update on window resize
  - fixed NodeList forEach problem for chrome 51 or below
  - fixed bugs due to uncleared callback timers
  - fixed update issues on just slider resize


## 0.21.0

**Release Changes**

- Fixed issues
  - dataset undefined error in case of swipeToSlide but finite slides
  - slideWidth issue by transform scale
  - variableWidth + finite alignment problems
  - wrapper direction rtl issues
  - added onload update handler for images
  - fixed breaking of animation on setState

- Mixins to Pure Functions
  - getWidth, getHeight
  - swipeDirection
  - initialize, update

- Other Changes
  - removed sass, using pure CSS instead
  - enforced dir='ltr' in the slider, so dir='rtl' in wrapper doesn't break the slider
  - corrected up/down direction conventions
  - added more tests along with snapshots

## 0.20.0

**Release Changes**

- handled responsive breakpoint collision
- renamed autoPlayTimer to autoplayTimer and removed it from state
- changed es5 module.exports with es6 export default in src/index
- implemented slider syncing with asNavFor prop
- made all the slides untabbable
- implemented getSlick method as in slick
- implemented slickGetOption method
- implemented lazyLoaded event
- implemented reInit event
- implemented onSwipe event and documented edgeEvent


## 0.19.0

**Release Changes**

Following are the changes to be mentioned:

- fixed slideWidth calculation approximation
- fixed unusual scrolls in focusOnSelect mode
- added appendDots method for customization of dots
- modified logic for handling odd/even cases where there were unusual scrolls in opposite direction
- implemented unslick feature properly
- fixed variableWidth issues like blank spaces at edges, improper alignment
- handling focus loss in case of fade=true
- responsive lazyloading bug fixed
- increased verticalswiping resistance from 4 to 10


## 0.18.0

**Major Changes:**

- `centerPadding` prop now accepts % value as well
- Fixed dots count in certain cases, where it was wrong
- Fixed fade property mess-up on click
- Fixed invisibility issue when fade & vertical are true
- Modified logic for updating lazyLoadedList, earlier there were some whitespaces at ends, now they're gone
- Fixed getTrackLeft issue for slideCount=1


## 0.17.1

**Major Changes**

* Enforced some settings in specific configurations like:
  - `slidesToScroll = 1` *when fade is true*
  - `slidesToScroll = 1` *when centerMode is true*
  - `slidesToShow = 1` *when fade is true*

* Changed the number of clones (preclones and postclones), that fixed couple of issues like blank spaces after last slide and/or before first slide which occurred in several cases.


**Minor Changes**

- Rich amount of tests and test-utilities added
- Additional documentation comments added
- Refactored small snippets for betterment
- Fixed several lazyload and centerMode bugs
