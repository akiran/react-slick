import React, { Component } from "react";
import Slider from "../src/slider";

export default class SlideChangeHooks extends Component {
  state = {
    oldSlide: 0,
    activeSlide: 0,
    activeSlide2: 0
  };
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 1000,
      slidesToShow: 1,
      slidesToScroll: 1,
      beforeChange: (current, next) =>
        this.setState({ oldSlide: current, activeSlide: next }),
      afterChange: current => this.setState({ activeSlide2: current })
    };
    return (
      <div>
        <h2>beforeChange and afterChange hooks</h2>
        <p>
          BeforeChange => oldSlide: <strong>{this.state.oldSlide}</strong>
        </p>
        <p>
          BeforeChange => activeSlide: <strong>{this.state.activeSlide}</strong>
        </p>
        <p>
          AfterChange => activeSlide: <strong>{this.state.activeSlide2}</strong>
        </p>
        <Slider {...settings}>
          <div>
            <h3>1</h3>
          </div>
          <div>
            <h3>2</h3>
          </div>
          <div>
            <h3>3</h3>
          </div>
          <div>
            <h3>4</h3>
          </div>
          <div>
            <h3>5</h3>
          </div>
          <div>
            <h3>6</h3>
          </div>
        </Slider>
      </div>
    );
  }
}
