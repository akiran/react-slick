import React, { Component } from "react";
import Slider from "../src/slider";
import { baseUrl } from "./config";

class Paging extends Component {
  render() {
    const {
      slidesToScroll,
      currentSlide,
      slidesToShow,
      slideCount,
      index,
      onClick
    } = this.props;

    const pagination = `${index + 1} / ${slideCount}`;
    return (
      <a onClick={onClick}>
        <img src={`${baseUrl}/abstract0${index + 1}.jpg`} />
        <span>{pagination}</span>
      </a>
    );
  }
}

export default class CenterMode extends Component {
  render() {
    const settings = {
      customPaging: function(i, sliderSettings) {
        return <Paging {...sliderSettings} index={i} />;
      },
      dots: true,
      dotsClass: "slick-dots slick-thumb",
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1
    };
    return (
      <div>
        <h2>Custom Paging</h2>
        <Slider {...settings}>
          <div>
            <img src={baseUrl + "/abstract01.jpg"} />
          </div>
          <div>
            <img src={baseUrl + "/abstract02.jpg"} />
          </div>
          <div>
            <img src={baseUrl + "/abstract03.jpg"} />
          </div>
          <div>
            <img src={baseUrl + "/abstract04.jpg"} />
          </div>
        </Slider>
      </div>
    );
  }
}
