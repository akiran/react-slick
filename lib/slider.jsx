var React = require('react');
var cloneWithProps = require('react/lib/cloneWithProps');
var cx = require('react/lib/cx');
var EventHandlers = require('./mixins/event-handlers');

var Slider = React.createClass({
  mixins: [EventHandlers],
  getInitialState: function () {
    return {
      currentSlide: 1,
      slideCount: 0,
      sliderWidth: 0,
      pos: 560 
    };
  },
  componentDidMount: function () {
    this.setState({
      slideCount: React.Children.count(this.props.children),
      sliderWidth: this.getDOMNode().getBoundingClientRect().width,
    });
  },
  
  getTrackStyle: function () {
    return {
      opacity: 1,
      width: (this.state.slideCount + 2)*this.state.sliderWidth,
      transform: 'translate3d(-' + this.state.pos + 'px, 0px, 0p)'
    };
  },
  getSlideStyle: function () {
    return {
      width: this.state.sliderWidth
    };
  },
  getDots: function () {
    return <div></div>;
  },
  getSlides: function () {
    console.log('slides');
    var slides;
    slides = React.Children.map(this.props.children, function (child, index) {
      var slideClasses = {
        'slick-slide': true,
        'slick-active': (this.state.currentSlide === index)
      };
      return <div className={cx(slideClasses)} style={this.getSlideStyle()}>{child}</div>;
    }.bind(this));
    return slides;
  },
  getTrack: function () {
    var trackStyle = {
      opacity: 1,
      width: (this.state.slideCount + 2)*this.state.sliderWidth,
      transform: 'translate3d(-' + this.state.pos + 'px, 0px, 0px)'
    };
    if (this.state.slideCount) {
      return (
        <div className='slick-track' style={trackStyle}>
          <div className='slick-slide slick-cloned' style={this.getSlideStyle()}>
            {cloneWithProps(this.props.children[this.state.slideCount - 1])}
          </div>
          {this.getSlides()}
         <div className='slick-slide slick-cloned' style={this.getSlideStyle()}>
            {cloneWithProps(this.props.children[0])}
         </div>
        </div>
      );
    } else {
      return null;
    }
  },
  render: function () {
    return (
      <div className='slick-initialized slick-slider'>
        <div className='slick-list'>
          {this.getTrack()}
        </div>
        <button type="button" data-role="none" className="slick-prev" style={{display: 'block'}} onClick={this.previousHandler}> Previous</button>
        <button type="button" data-role="none" className="slick-next" style={{display: 'block'}} onClick={this.nextHandler}>Next</button>
      </div>
    );
  }
});

module.exports = Slider;