import React, { useState } from "react";
import Slider from "react-slick";

function DynamicSlides() {
  const [slides, setSlides] = useState([1, 2, 3, 4, 5, 6]);
  const handleClick = () => {
    setSlides(
      slides.length === 6 ? [1, 2, 3, 4, 5, 6, 7, 8, 9] : [1, 2, 3, 4, 5, 6]
    );
  };
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3
  };
  return (
    <div>
      <button className="button" onClick={handleClick}>
        Click to change slide count
      </button>
      <Slider {...settings}>
        {slides.map(slide => {
          return (
            <div key={slide}>
              <h3>{slide}</h3>
            </div>
          );
        })}
      </Slider>
    </div>
  );
}

export default DynamicSlides;
