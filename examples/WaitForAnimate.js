import React, { Component } from "react";
import Slider from "../src/slider";

export default class WaitForAnimate extends Component {
  render() {
    const settings = {
      speed: 2000,
      waitForAnimate: false
    };

    const onClick = () => {
      setTimeout(() => this.slider.slickNext(), 0);
      setTimeout(() => this.slider.slickPrev(), 600);
      setTimeout(() => this.slider.slickNext(), 1200);
    };

    return (
      <div>
        <h2>Wait for animate</h2>
        <button onClick={onClick}>
          click me to trigger next / prev / next
        </button>
        <Slider {...settings} ref={slider => (this.slider = slider)}>
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
