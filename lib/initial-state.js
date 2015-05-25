var initialState = {
    animating: false,
    dragging: false,
    autoPlayTimer: null,
    currentDirection: 0,
    currentLeft: null,
    currentSlide: 0,
    direction: 1,
    // listWidth: null,
    // listHeight: null,
    // loadIndex: 0,
    slideCount: null,
    slideWidth: null,
    // sliding: false,
    // slideOffset: 0,
    swipeLeft: null,
    touchObject: {
      startX: 0,
      startY: 0,
      curX: 0,
      curY: 0
    },

    // added for react
    initialized: false,
    trackStyle: {},
    trackWidth: 0,

    // Removed
    // transformsEnabled: false,
    // $nextArrow: null,
    // $prevArrow: null,
    // $dots: null,
    // $list: null,
    // $slideTrack: null,
    // $slides: null,
};

module.exports = initialState;
