import React, { useRef } from "react";
import Slider from "../src/slider";

export default function AutoPlayMethods() {
  const ref = useRef();
  function play(playType) {
    ref.current.slickPlay(playType);
  }
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000
  };
  return (
    <div>
      <h2>Auto Play & Pause with buttons</h2>
      <Slider ref={ref} {...settings}>
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
      <div style={{ textAlign: "center" }}>
        <button className="button" onClick={() => play("playing")}>
          Play
        </button>
        <button className="button" onClick={() => play("paused")}>
          Pause
        </button>
      </div>
    </div>
  );
}
