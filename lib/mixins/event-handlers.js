var EventHandlers = {
  // Event handler for previous and next
  changeSlide: function (options, e) {
    // console.log('changeSlide');
    var indexOffset, slideOffset, unevenOffset;
    unevenOffset = (this.state.slideCount % this.props.slidesToScroll !== 0);
    indexOffset = unevenOffset ? 0 : (this.state.slideCount - this.state.currentSlide) % this.props.slidesToScroll;

    if (options.message === 'previous') {
      slideOffset = (indexOffset === 0) ? this.props.slidesToScroll : this.props.slidesToShow - indexOffset;
      if (this.state.slideCount > this.props.slidesToShow) {
        this.slideHandler(this.state.currentSlide  - slideOffset, false);
      }
    } else if (options.message === 'next') {
      slideOffset = (indexOffset === 0) ? this.props.slidesToScroll : indexOffset;
      if (this.state.slideCount > this.props.slidesToShow) {
        this.slideHandler(this.state.currentSlide + slideOffset, false);
      }
    } else if (options.message === 'index') {
      // Click on dots
      var targetSlide = options.index*this.props.slidesToScroll;
      if (targetSlide !== this.state.currentSlide) {
        this.slideHandler(targetSlide);
      }
    }

  },
  // Accessiblity handler for previous and next
  keyHandler: function (e) {

  }, 
  // Focus on selecting a slide (click handler on track)
  selectHandler: function (e) {

  },
  swipeStart: function (e) {
    var touches, posX, posY;

    if ((this.props.swipe === false) || ('ontouchend' in document && this.props.swipe === false)) {
      return;
    } else if (this.props.draggable === false && e.type.indexOf('mouse') !== -1) {
      return;
    }
    posX = (e.touches !== undefined) ? e.touches[0].pageX : e.clientX;
    posY = (e.touches !== undefined) ? e.touches[0].pageY : e.clientY;
    this.setState({
      dragging: true,
      touchObject: {
        startX: posX,
        startY: posY,
        curX: posX,
        curY: posY
      }
    });   
  },
  swipeMove: function (e) {
    if (!this.state.dragging) {
      return;
    }
    if (this.state.animating) {
      return;
    }
    var swipeLeft;
    var curLeft, positionOffset;
    var touchObject = this.state.touchObject;

    curLeft = this.getLeft(this.state.currentSlide);
    touchObject.curX =  (e.touches )? e.touches[0].pageX : e.clientX;
    touchObject.curY =  (e.touches )? e.touches[0].pageY : e.clientY;
    touchObject.swipeLength = Math.round(Math.sqrt(Math.pow(touchObject.curX - touchObject.startX, 2)));
    
    positionOffset = (this.props.rtl === false ? 1 : -1) * (touchObject.curX > touchObject.startX ? 1 : -1);
    swipeLeft = curLeft + touchObject.swipeLength * positionOffset;
    this.setState({
      touchObject: touchObject,
      swipeLeft: swipeLeft,
      trackStyle: this.getCSS(swipeLeft),
    });
    
    // test for mostly-vertical movement, return if so
    if (Math.abs(touchObject.curX - touchObject.startX) < Math.abs(touchObject.curY - touchObject.startY) * 0.8)
      return;

    // don't preventDefault for small horizontal movement
    if (touchObject.swipeLength > 4) {
      e.preventDefault();
    }
  },
  swipeEnd: function (e) {
    if (!this.state.dragging) {
      return;
    }
    var touchObject = this.state.touchObject;
    var minSwipe = this.state.listWidth/this.props.touchThreshold;
    var swipeDirection = this.swipeDirection(touchObject);
    this.setState({
      dragging: false,
      swipeLeft: null,
      touchObject: {} 
    }); 
    // Fix for #13
    if (!touchObject.swipeLength) {
      return;
    }
    if (touchObject.swipeLength > minSwipe) {
      e.preventDefault();
      if (swipeDirection === 'left') {
        this.slideHandler(this.state.currentSlide + this.props.slidesToScroll);
      } else if (swipeDirection === 'right') {
        this.slideHandler(this.state.currentSlide - this.props.slidesToScroll);
      } else {
        this.slideHandler(this.state.currentSlide, null, true);
      }
    } else {
      this.slideHandler(this.state.currentSlide, null, true);
    }
  },
};

module.exports = EventHandlers;
