import React from "react";
import Slider from "../src/slider";

function CustomSlide(props) {
  const { index, ...elsProps } = props;
  return (
    <div {...elsProps}>
      <h3>{index}</h3>
    </div>
  );
}

export default function SimpleSlider() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };
  return (
    <div>
      <h2>Custom Slides</h2>
      <Slider {...settings}>
        <CustomSlide index={1} />
        <CustomSlide index={2} />
        <CustomSlide index={3} />
        <CustomSlide index={4} />
        <CustomSlide index={5} />
        <CustomSlide index={6} />
      </Slider>
    </div>
  );
}
