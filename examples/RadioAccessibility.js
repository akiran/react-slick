import React, { Component } from "react";
import Slider from "../src/slider";

export default class RadioAccesibility extends Component {
  render() {
    const settings = {
      accessibility: false,
      infinite: false,
      speed: 555,
      slidesToShow: 3,
      slidesToScroll: 3,
      cssHideClass: "hide508",
      type: "radiogroup",
      label: "Delivery Calendar",
      instructions: "Change your delivery date",
      slideOnClick: function(e) {
        console.log("herewtf:", e);
      },
      slideOnKeyDown: function(e) {
        console.log("herewtf:", e);
      }
    };
    return (
      <div>
        <h2> Radio Accessibility </h2>
        <Slider {...settings}>
          <div>
            <a href="/goto">Focusable Link</a>
            <button>Focusable Button</button>
            <h3>Header 1</h3>
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
          <div>
            <h3>7</h3>
          </div>
          <div>
            <h3>8</h3>
          </div>
          <div>
            <h3>9</h3>
          </div>
        </Slider>
      </div>
    );
  }
}
