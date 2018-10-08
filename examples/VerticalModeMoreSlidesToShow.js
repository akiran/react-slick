import React, { Component } from "react";
import Slider from "../src/slider";

export default class VerticalModeMoreSlidesToShow extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: false,
      slidesToShow: 4,
      slidesToScroll: 1,
      vertical: true,
      verticalSwiping: true,
      beforeChange: function(currentSlide, nextSlide) {
        console.log("before change", currentSlide, nextSlide);
      },
      afterChange: function(currentSlide) {
        console.log("after change", currentSlide);
      }
    };
    return (
      <div>
        <h2>
          Vertical Mode with Greater <code>slidesToShow</code> than Slides
        </h2>
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
        </Slider>
      </div>
    );
  }
}
