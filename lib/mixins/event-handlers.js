var EventHandlers = {
  nextHandler: function (e) {
    var newPos = this.state.pos + this.state.sliderWidth;
    this.setState({
      pos: (newPos > (this.state.sliderWidth*this.state.slideCount))? this.state.sliderWidth: newPos
    });
  },
  previousHandler: function () {
    var newPos = this.state.pos - this.state.sliderWidth;
    this.setState({
      pos: (newPos < this.state.sliderWidth)? this.state.sliderWidth*this.state.slideCount: newPos
    });
  }
};

module.exports = EventHandlers;