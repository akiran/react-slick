var afterTransition = require('after-transition');

var EventHandlers = {
  // Event handler for previous and next
  changeSlide: function (options, e) {
    if (options.message === 'previous') {
      this.slideHandler(this.state.currentSlide - this.props.slidesToShow);
    } else if (options.message === 'next') {
      this.slideHandler(this.state.currentSlide + this.props.slidesToShow);
    } else if (options.message === 'index') {
      // Click on dots
      this.slideHandler(options.index*this.props.slidesToShow);
    }
  },
  // Accessiblity handler for previous and next
  keyHandler: function (e) {

  }, 
  // Focus on selecting a slide (click handler on track)
  selectHandler: function (e) {

  },
  swipeStart: function (e) {
    this.setState({
      dragging: true,
      touchObject: {
        startX: e.clientX,
        startY: e.clientY,
        curX: e.clientX,
        curY: e.clientY
      }
    });    
  },
  swipeMove: function (e) {
    var swipeLeft, swipeLength, swipeDirection;
    var curLeft;
    var touchObject = this.state.touchObject;

    curLeft = this.getLeft(this.state.currentSlide);
    touchObject.curX = e.clientX;
    touchObject.curY = e.clientY;
    touchObject.swipeLength = Math.round(Math.sqrt(Math.pow(touchObject.curX - touchObject.startX, 2)));
    
    positionOffset = (this.props.rtl === false ? 1 : -1) * (touchObject.curX > touchObject.startX ? 1 : -1);
    swipeLeft = curLeft + touchObject.swipeLength * positionOffset;
    this.setState({
      touchObject: touchObject,
      swipeLeft: swipeLeft,
      trackStyle: this.getCSS(swipeLeft),
    });
    
  },
  swipeEnd: function (e) {
    var minSwipe = this.state.listWidth/this.props.touchThreshold;
    var swipeDirection = this.swipeDirection(this.state.touchObject);
    
    this.setState({
      dragging: false
    }); 
    if (this.state.touchObject.swipeLength > minSwipe) {
      if (swipeDirection === 'left') {
        this.slideHandler(this.state.currentSlide + 1);
      } else if (swipeDirection === 'right') {
        this.slideHandler(this.state.currentSlide - 1);
      }
    } else {
      this.slideHandler(this.state.currentSlide);
    }
  },
};

module.exports = EventHandlers;