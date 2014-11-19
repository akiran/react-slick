var afterTransition = require('after-transition');

var EventHandlers = {
  // Event handler for previous and next
  changeSlide: function (options, e) {
    if (options.message === 'previous') {
      this.slideHandler(this.state.currentSlide - 1);
    } else if (options.message === 'next') {
      this.slideHandler(this.state.currentSlide + 1);
    } else if (options.message === 'index') {
      // Click on dots
      this.slideHandler(options.index);
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
        curX: e.clientX
      }
    });    
  },
  swipeMove: function (e) {

  },
  swipeEnd: function (e) {
    e.preventDefault();
    this.setState({
      dragging: false
    }); 
  },
};

module.exports = EventHandlers;