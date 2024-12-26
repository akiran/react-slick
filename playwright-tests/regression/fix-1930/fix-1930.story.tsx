import Slider from "../../../src-jsx";
import React from "react";

export function VerticalModeFinite() {
  const settings = {
    dots: true,
    infinite: false,
    vertical: true,
    slidesToShow: 3
  };
  return (
    <Slider {...settings}>
      <div>
        <div style={{ height: 100 }}>1</div>
      </div>
      <div>
        <div style={{ height: 100 }}>2</div>
      </div>
    </Slider>
  );
}

export function VerticalModeInfinite() {
  const settings = {
    dots: true,
    infinite: true,
    vertical: true,
    slidesToShow: 3
  };
  return (
    <Slider {...settings}>
      <div>
        <div style={{ height: 100 }}>1</div>
      </div>
      <div>
        <div style={{ height: 100 }}>2</div>
      </div>
    </Slider>
  );
}
