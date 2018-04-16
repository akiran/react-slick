import React, { Component } from 'react'
import Slider from '../src/slider'


class Slide extends Component {
  render() {

      const style = { ...this.props.style, height: 100, transition: 'width 400ms  ease-out', backgroundColor: this.props.color};

      return <div {...this.props} style={style}> <h2> { this.props.color } </h2></div>

  }
}

export default class CenterGrow extends Component {
  render() {
    const settings = {
      infinite: true,
      centerMode: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      variableWidth: true,
      speed: 400,
      centerGrow: {
        normal: 300,
        center: 500,
      },
      focusOnSelect: true,
      arrows: true,
      centerPadding: '0px',
    };
    return (
      <div>
        <h2>Center Grow</h2>
        <Slider {...settings}>
          {
            ['red', 'green', 'blue', 'orange', 'yellow'].map((color) => {
              return <Slide key={color} color={color} />
            })
          }
        </Slider>
      </div>
    );
  }
}
