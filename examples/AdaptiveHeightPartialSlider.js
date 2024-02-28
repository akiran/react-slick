import React from "react";
import Slider from "react-slick";

function AdaptiveHeightPartialSlider() {
  const settings = {
    className: "",
    dots: true,
    infinite: false,
    slidesToShow: 2.5,
    slidesToScroll: 1,
    adaptiveHeight: true
  };

  return (
    <div className="slider-container">
      <Slider {...settings}>
        <div data-offsetheigth="10">
          <h3>1</h3>
          <div></div>
        </div>
        <div data-offsetheigth="20">
          <h3>2</h3>
          <p>Hello</p>
        </div>
        <div>
          <h3>3</h3>
          <p>See ....</p>
          <p>Height is adaptive</p>
        </div>
      </Slider>
    </div>
  );
}

export default AdaptiveHeightPartialSlider;
