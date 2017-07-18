import React, { Component } from 'react'
import Slider from '../src/slider'

export default class NoSlider extends Component {
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
        <h2> No slider</h2>
        <Slider {...settings}>
        </Slider>
      </div>
    );
  }
}
