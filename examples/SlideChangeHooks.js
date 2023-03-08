import React, { useState } from "react";
import Slider from "../src/slider";

export default function SlideChangeHooks() {
  const [state, setState] = useState({
    oldSlide: 0,
    activeSlide: 0,
    activeSlide2: 0
  });

  const settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    beforeChange: (current, next) =>
      setState(prevS => ({ ...prevS, oldSlide: current, activeSlide: next })),
    afterChange: current =>
      setState(prevS => ({ ...prevS, activeSlide2: current }))
  };
  return (
    <div>
      <h2>beforeChange and afterChange hooks</h2>
      <p>
        BeforeChange &gt oldSlide: <strong>{state.oldSlide}</strong>
      </p>
      <p>
        BeforeChange &gt activeSlide: <strong>{state.activeSlide}</strong>
      </p>
      <p>
        AfterChange &gt activeSlide: <strong>{state.activeSlide2}</strong>
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
