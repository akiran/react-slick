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
    e.preventDefault();
    console.log('drag start');
  },
  swipeMove: function (e) {
    e.preventDefault();
    console.log('drag ing');
  },
  swipeEnd: function (e) {
    e.preventDefault();
    console.log('drag end');
  },
};

module.exports = EventHandlers;