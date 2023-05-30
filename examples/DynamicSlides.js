import React, { useState } from "react";
import Slider from "../src/slider";

function DynamicSlides(props) {
  const [slides, setSlides] = useState([1, 2, 3, 4, 5, 6]);
  const handleClick = () => {
    setSlides(
      slides.length === 6 ? [1, 2, 3, 4, 5, 6, 7, 8, 9] : [1, 2, 3, 4, 5, 6]
    );
  };
  // click() {
  //   const { slides } = this.state;
  //   this.setState({
  //     slides:
  //       slides.length === 6 ? [1, 2, 3, 4, 5, 6, 7, 8, 9] : [1, 2, 3, 4, 5, 6]
  //   });
  // }
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    ...props
  };
  return (
    <div>
      <h2>Dynamic slides</h2>
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
