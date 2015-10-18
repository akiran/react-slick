import React, { Component } from 'react'
import Slider from '../src/slider'

export default class CenterModeWithFocusOnSelect extends Component {
  render() {
    const settings = {
      className: 'center',
      focusOnSelect: true,
      centerMode: true,
      dots: true,
      infinite: false,
      slidesToShow: 5,
      slidesToScroll: 1,
      speed: 500
    };
    return (
      <div>
        <h2>Center Mode with FocusOnSelect</h2>
        <Slider {...settings}>
          <div><h3>1</h3></div>
          <div><h3>2</h3></div>
          <div><h3>3</h3></div>
          <div><h3>4</h3></div>
          <div><h3>5</h3></div>
          <div><h3>6</h3></div>
        </Slider>
      </div>
    );
  }
}
