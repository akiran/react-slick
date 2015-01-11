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

    this.autoPlay();
  },
  // Accessiblity handler for previous and next
  keyHandler: function (e) {

  }, 
  // Focus on selecting a slide (click handler on track)
  selectHandler: function (e) {

  },
  swipeStart: function (e) {
    var touches, posX, posY;
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
    e.preventDefault();
  },
  swipeMove: function (e) {
    if (this.state.dragging) {
      var swipeLeft, swipeLength, swipeDirection;
      var curLeft;
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
    }
    e.preventDefault();
  },
  swipeEnd: function (e) {
    var touchObject = this.state.touchObject;
    var minSwipe = this.state.listWidth/this.props.touchThreshold;
    var swipeDirection = this.swipeDirection(touchObject);
    this.setState({
      dragging: false,
      touchObject: {} 
    }); 
    if (touchObject.swipeLength > minSwipe) {
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
    e.preventDefault();
  },
};

module.exports = EventHandlers;