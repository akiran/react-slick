import React, { Component } from "react";
import Slider from "../src/slider";
import { baseUrl } from "./config";

export default class LazyLoadUnevenSets extends Component {
  render() {
    const settings = {
      dots: true,
      lazyLoad: true,
      infinite: true,
      slidesToShow: 3,
      slidesToScroll: 3,
      speed: 500
    };
    return (
      <div>
        <h2> Lazy Load Uneven Sets </h2>
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
          <div>
            <img src={baseUrl + "/abstract01.jpg"} />
          </div>
          <div>
            <img src={baseUrl + "/abstract02.jpg"} />
          </div>
          <div>
            <img src={baseUrl + "/abstract03.jpg"} />
          </div>
        </Slider>
      </div>
    );
  }
}
