import React, { useState } from "react";
import Slider from "../src/slider";

function MultipleItems() {
  const [countOfSlides, setCountOfSlides] = useState(3);
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: countOfSlides,
    slidesToScroll: countOfSlides
  };
  return (
    <div>
      <h2> Multiple items </h2>
      <button
        onClick={() =>
          countOfSlides < 9
            ? setCountOfSlides(countOfSlides + 1)
            : setCountOfSlides(8)
        }
        className="button"
      >
        Add slides
      </button>
      <button
        onClick={() =>
          countOfSlides > 1
            ? setCountOfSlides(countOfSlides - 1)
            : setCountOfSlides(1)
        }
        className="button"
      >
        Remove slides
      </button>
      <Slider {...settings}>
        <div>
          <h3>1</h3>
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

export default MultipleItems;
