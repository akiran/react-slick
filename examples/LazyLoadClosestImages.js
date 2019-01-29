import React, { Component } from "react";
import Slider from "../src/slider";
import { baseUrl } from "./config";

export default class LazyLoadClosestImages extends Component {
  render() {
    const settings = {
      dots: true,
      lazyLoad: 1,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      initialSlide: 1
    };
    return (
      <div>
        <h2> Lazy Load previous and next slide images</h2>
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
            <img src="https://picsum.photos/400/300?image=0" />
          </div>
          <div>
            <img src="https://picsum.photos/400/300?image=1" />
          </div>
          <div>
            <img src="https://picsum.photos/400/300?image=2" />
          </div>
          <div>
            <img src="https://picsum.photos/400/300?image=3" />
          </div>
        </Slider>
      </div>
    );
  }
}
