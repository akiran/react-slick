import React, { Component } from 'react'
import Slider from '../src/slider'

class CustomSlide extends Component {
  render() {
    const {index, ...props} = this.props
    return (
      <div {...props}><h3>{index}</h3></div>
    )
  }
}

export default class SimpleSlider extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
    };
    return (
      <div>
        <h2>Custom Slides</h2>
        <Slider {...settings}>
          <CustomSlide index={1} />
          <CustomSlide index={2} />
          <CustomSlide index={3} />
          <CustomSlide index={4} />
          <CustomSlide index={5} />
          <CustomSlide index={6} />
        </Slider>
      </div>
    );
  }
}
