import React, { useState } from "react";
import Slider from "../src/slider";

function SlideChangeHooks() {
  const [oldSlide, setOldSlide] = useState(0);
  const [activeSlide, setActiveSlide] = useState(0);
  const [activeSlide2, setActiveSlide2] = useState(0);

  const settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    beforeChange: (current, next) => {
      setOldSlide(current);
      setActiveSlide(next);
    },
    afterChange: current => setActiveSlide2(current)
  };
  return (
    <div>
      <h2>beforeChange and afterChange hooks</h2>
      <p>
        BeforeChange {"=>"} oldSlide: <strong>{oldSlide}</strong>
      </p>
      <p>
        BeforeChange {"=>"} activeSlide: <strong>{activeSlide}</strong>
      </p>
      <p>
        AfterChange {"=>"} activeSlide: <strong>{activeSlide2}</strong>
      </p>
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
      </Slider>
    </div>
  );
}

export default SlideChangeHooks;
