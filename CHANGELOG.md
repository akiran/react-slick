# Change Log

## [Unreleased](https://github.com/akiran/react-slick/tree/HEAD)

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