var afterTransition = require('after-transition');

var EventHandlers = {
  // Event handler for previous and next
  changeSlide: function (options, e) {
    console.log('changeSlide');
    var indexOffset, slideOffset, unevenOffset;
    unevenOffset = (this.state.slideCount % this.props.slidesToScroll !== 0);
    indexOffset = unevenOffset ? 0 : (this.state.slideCount - this.state.currentSlide) % this.props.slidesToScroll;

    if (options.message === 'previous') {
      slideOffset = indexOffset === 0 ? this.props.slidesToScroll : this.props.slidesToShow - indexOffset;
      if (this.state.slideCount > this.props.slidesToShow) {
        this.slideHandler(this.state.currentSlide  - slideOffset, false);
      }
      // this.slideHandler(this.state.currentSlide - this.props.slidesToScroll);
    } else if (options.message === 'next') {
      slideOffset = indexOffset === 0 ? this.props.slidesToScroll : indexOffset;
      if (this.state.slideCount > this.props.slidesToShow) {
        this.slideHandler(this.state.currentSlide + slideOffset, false);
      }
      // this.slideHandler(this.state.currentSlide + this.props.slidesToScroll);
    } else if (options.message === 'index') {
      // Click on dots
      var targetSlide = options.index*this.props.slidesToScroll;
      if (targetSlide !== this.state.currentSlide) {
        this.slideHandler(targetSlide);
      }
    }

    this.autoPlay();
  },
  // Accessiblity handler for previous and next
  keyHandler: function (e) {

  }, 
  // Focus on selecting a slide (click handler on track)
  selectHandler: function (e) {

  },
  swipeStart: function (e) {
    console.log('swipeStart');
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
    console.log('swipemove');
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
    console.log('swipeend');
    var minSwipe = this.state.listWidth/this.props.touchThreshold;
    var swipeDirection = this.swipeDirection(this.state.touchObject);
    
    this.setState({
      dragging: false
    }); 
    if (this.state.touchObject.swipeLength > minSwipe) {
      if (swipeDirection === 'left') {
        this.slideHandler(this.state.currentSlide + this.props.slidesToScroll);
      } else if (swipeDirection === 'right') {
        this.slideHandler(this.state.currentSlide - this.props.slidesToScroll);
      }
    } else {
      this.slideHandler(this.state.currentSlide, null, true);
    }
  },
};

module.exports = EventHandlers;