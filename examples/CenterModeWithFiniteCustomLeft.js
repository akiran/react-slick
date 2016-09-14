import React, { Component } from 'react'
import Slider from '../src/slider'

export default class CenterModeWithFiniteCustomLeft extends Component {
  handleCustomTagetSlideLeft(targetLeft, currentSlide, targetSlide) {
    return (targetLeft + 100);
  }

  handleCustomCurrentSlideLeft(currentLeft) {
    return (currentLeft + 100);
  }

  onInitTargetLeft(targetLeft, slideCount, slideWidth, trackWidth) {
    return 0;
  }

  render() {
    const settings = {
      className: 'center',
      centerMode: true,
      infinite: false,
      centerPadding: 0,
      variableWidth: true,
      onInitTargetLeft: this.onInitTargetLeft,
      customTargetSlideLeft: this.handleCustomTagetSlideLeft,
      customCurrentSlideLeft: this.handleCustomCurrentSlideLeft,
      speed: 500
    };
    return (
      <div>
        <h2>Center Mode (finite) - Custom Slide Left - Move left 100 each step</h2>
        <div style={{width: 520}}>
        
          <Slider {...settings}>
            <div style={{width: 240}}><h3>1</h3></div>
            <div style={{width: 240}}><h3>2</h3></div>
            <div style={{width: 240}}><h3>3</h3></div>
            <div style={{width: 240}}><h3>4</h3></div>
            <div style={{width: 240}}><h3>5</h3></div>
            <div style={{width: 240}}><h3>6</h3></div>
            <div style={{width: 240}}><h3>7</h3></div>
            <div style={{width: 240}}><h3>8</h3></div>
            <div style={{width: 240}}><h3>9</h3></div>
          </Slider>
        </div>
      </div>
    );
  }
}
