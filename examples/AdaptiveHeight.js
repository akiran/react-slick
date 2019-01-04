import React, { Component } from "react";
import Slider from "../src/slider";

export default class AdaptiveHeight extends Component {
  render() {
    var settings = {
      className: "",
      dots: true,
      infinite: true,
      slidesToShow: 3,
      slidesToScroll: 1,
      adaptiveHeight: true
    };
    return (
      <div>
        <h2>Adaptive height</h2>
        <Slider {...settings}>
          <div>
            <h3>1</h3>
          </div>
          <div>
            <h3>2</h3>
            <p>You should see one text line here...</p>
          </div>
          <div>
            <h3>3</h3>
            <p>You should see two text lines here...</p>
            <p>Height is adaptive</p>
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
