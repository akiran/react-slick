import React, { Component } from 'react'
import Slider from '../src/slider'

class CarouselArrow extends Component {

  render() {
    let style = {
      ...this.props.style,
      display: 'block',
      background: '#d8e4e8',
      'paddingLeft': '6px',
    };

    return (
      <div className={this.props.className}
           onClick={this.props.onClick}
           style={style}>
      </div>
    );
  }
}

export default class CustomArrows extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      slidesToShow: 3,
      slidesToScroll: 1,
      nextArrow: <CarouselArrow />,
      prevArrow: <CarouselArrow />
    };
    return (
      <div>
        <h2>Custom Arrows</h2>
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