import React, { Component } from "react";
import Slider from "../src/slider";

export default class SwipeAnimated extends Component {
  state = {
    currentIndex: 0,
    tempIndexOffset: 0
  };

  beforeChange = (oldIndex, newIndex) => {
    this.setState({ currentIndex: newIndex, tempIndexOffset: 0 });
  };

  swipeEvent = (swipeDirection, slideOffset) => {
    if (
      typeof slideOffset === "number" &&
      slideOffset !== this.state.tempIndexOffset
    ) {
      this.setState({ tempIndexOffset: slideOffset });
    }
  };

  render() {
    const settings = {
      className: "center",
      infinite: true,
      centerMode: true,
      slidesToShow: 5,
      swipeToSlide: true,
      beforeChange: this.beforeChange,
      swipeEvent: this.swipeEvent
    };

    const currentIndex = this.state.currentIndex + this.state.tempIndexOffset;

    return (
      <div>
        <h2>Swipe Animated</h2>
        <Slider {...settings}>
          {Array.from({ length: 9 }).map((x, i) => (
            <div>
              <h3 style={currentIndex === i ? { color: "red" } : undefined}>
                {i + 1}
              </h3>
            </div>
          ))}
        </Slider>
      </div>
    );
  }
}
