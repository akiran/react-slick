import React, { useRef, useState } from "react";
import Slider from "../src/slider";
import { baseUrl } from "./config";

export default function SlickGoTo() {
  const refSlider = useRef();
  const [state, setState] = useState({
    slideIndex: 0,
    updateCount: 0
  });

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    afterChange: () =>
      setState(state => ({ ...state, updateCount: state.updateCount + 1 })),
    beforeChange: (current, next) =>
      setState(prevS => ({ ...prevS, slideIndex: next }))
  };
  return (
    <div>
      <h2>Slick Go To</h2>
      <p>Total updates: {state.updateCount} </p>
      <input
        onChange={e => refSlider.current.slickGoTo(e.target.value)}
        value={state.slideIndex}
        type="range"
        min={0}
        max={3}
      />
      <Slider ref={refSlider} {...settings}>
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
