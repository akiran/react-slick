import React, { Component } from 'react'
import createReactClass from 'create-react-class'
import Slider from '../src/slider'

var SampleNextArrow = createReactClass({
  render: function() {
    const {className, style, onClick} = this.props
    return (
      <div
        className={className}
        style={{...style, display: 'block', background: 'red'}}
        onClick={onClick}
      ></div>
    );
  }
});

var SamplePrevArrow = createReactClass({
  render: function() {
    const {className, style, onClick} = this.props
    return (
      <div
        className={className}
        style={{...style, display: 'block', background: 'green'}}
        onClick={onClick}
      ></div>
    );
  }
});

export default class CustomArrows extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      slidesToShow: 3,
      slidesToScroll: 1,
      nextArrow: <SampleNextArrow />,
      prevArrow: <SamplePrevArrow />
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
