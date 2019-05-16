import React from 'react';
import Slider from 'react-slick';

class Carousel extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      isTouchDevice: false,
    };
  }
  
  // Check if the device is a touch-device - if yes, add a listener
  componentDidMount () {
    if (window && 'ontouchstart' in window) {
      this.setState({ isTouchDevice: true });
      window.addEventListener('touchstart', this.touchStart);
      window.addEventListener('touchmove', this.preventTouch, { passive: false });
    }
  }

  // Check if the device is a touch-device - if yes, clean up listener
  componentWillUnmount () {
    if (window && 'ontouchstart' in window) {
      window.removeEventListener('touchstart', this.touchStart);
      window.removeEventListener('touchmove', this.preventTouch, { passive: false });
    }
  }

  // Find the initial point of touch
  touchStart (e) {
    this.firstClientX = e.touches[0].clientX;
    this.firstClientY = e.touches[0].clientY;
  }
  
  // Prevent scroll if the horizontal gesture dominates the vertical gesture, 
  // or when the horizontal gesture exceeds some threshold
  preventTouch (e) {
    const minValue = 5; // threshold

    this.clientX = e.touches[0].clientX - this.firstClientX;
    this.clientY = e.touches[0].clientY - this.firstClientY;

    if (Math.abs(this.clientX) > minValue || Math.abs(this.clientX) > Math.abs(this.clientY)) {
      e.preventDefault();
      e.returnValue = false;
      return false;
    }
  }
  render () {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
    };
    const { children } = this.props
    return (
      <Slider {...settings}>
        {children && children.map(child => {
          return (child);
        })}
      </Slider>
    );
  }
}

export { Carousel };
