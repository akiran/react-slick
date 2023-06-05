import React, { useState, useRef } from "react";
import Slider from "../src/slider";
import { baseUrl } from "./config";

function SlickGoTo(props) {
  const [slideIndex, setSlideIndex] = useState(0);
  const [updateCount, setUpdateCount] = useState(0);
  let sliderRef = useRef(null);
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    afterChange: () => setUpdateCount(updateCount + 1),
    beforeChange: (current, next) => setSlideIndex(next),
    ...props
  };
  return (
    <div>
      <h2>Slick Go To</h2>
      <p>Total updates: {updateCount} </p>
      <input
        onChange={e => sliderRef.slickGoTo(e.target.value)}
        value={slideIndex}
        type="range"
        min={0}
        max={3}
      />
      <Slider
        ref={slider => {
          sliderRef = slider;
        }}
        {...settings}
      >
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
      </Slider>
    </div>
  );
}

export default SlickGoTo;
