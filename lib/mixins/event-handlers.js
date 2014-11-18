var afterTransition = require('after-transition');

var EventHandlers = {
  slideHandler: function (options, e) {
    var targetSlide, currentSlide;
    if (options.event === 'next') {
      targetSlide = currentSlide = this.state.currentSlide + 1;
      if (targetSlide >= this.state.slideCount) {
        currentSlide = targetSlide - this.state.slideCount;
      }
    } else if (options.event === 'previous') {
      targetSlide = currentSlide = this.state.currentSlide - 1;
      if (targetSlide < 0) {
        currentSlide  = targetSlide + this.state.slideCount; 
      }
    }
    this.setState({
      animating: true,
      currentSlide: currentSlide,
      animSlide: targetSlide
    }, function () {
      afterTransition(this.refs.track.getDOMNode(), function() {
        this.setState({animating: false});
      }.bind(this));
    });
    
  },
};

module.exports = EventHandlers;