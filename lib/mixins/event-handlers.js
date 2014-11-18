var afterTransition = require('after-transition');

var EventHandlers = {
  slideHandler: function (options, e) {
    options = options || {};
    var animSlide, currentSlide;
    var animDirection, currentDirection;
    var offsetSlide;
    if (options.index > this.state.currentSlide) {
      offsetSlide = options.index - this.state.currentSlide;
      animDirection = currentDirection = 1;
      animSlide = currentSlide = this.state.currentSlide + offsetSlide;
      if (animSlide >= this.state.slideCount) {
        currentSlide = animSlide - this.state.slideCount;
        currentDirection = 0;
      }
    } else {
      offsetSlide = this.state.currentSlide - options.index;
      animDirection = currentDirection = 0;
      animSlide = currentSlide = this.state.currentSlide - offsetSlide;
      if (animSlide < 0) {
        currentSlide  = animSlide + this.state.slideCount; 
        currentDirection = 1;
      }
    }
    this.setState({
      animating: true,
      currentSlide: currentSlide,
      currentDirection: currentDirection,
      animSlide: animSlide,
      animDirection: animDirection
    }, function () {
      afterTransition(this.refs.track.getDOMNode(), function() {
        this.setState({animating: false});
      }.bind(this));
    });
    
  },
};

module.exports = EventHandlers;