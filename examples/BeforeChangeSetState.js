import React, { Component } from 'react'
import Slider from '../src/slider'

export default class MultipleItems extends Component {
  state = {
    activeSlide: 0
  }
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 3,
      beforeChange: (current, next) => this.setState({ activeSlide: next })
    };
    return (
      <div>
        <h2>Before change state setting</h2>
        <p>Active Slide: { this.state.activeSlide } </p>
        <Slider {...settings} ref={slider => this.slider = slider}>
          <div><h3>1</h3></div>
          <div><h3>2</h3></div>
          <div><h3>3</h3></div>
          <div><h3>4</h3></div>
          <div><h3>5</h3></div>
          <div><h3>6</h3></div>
          <div><h3>7</h3></div>
          <div><h3>8</h3></div>
          <div><h3>9</h3></div>
        </Slider>
      </div>
    );
  }
}
