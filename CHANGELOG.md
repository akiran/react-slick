# Change Log

## [Unreleased](https://github.com/akiran/react-slick/tree/HEAD)

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