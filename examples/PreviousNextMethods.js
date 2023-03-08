import React, { useRef } from "react";
import Slider from "../src/slider";

export default function PreviousNextMethods() {
  const ref = useRef();
  function next() {
    ref.current.slickNext();
  }
  function previous() {
    ref.current.slickPrev();
  }

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };
  return (
    <div>
      <h2>Previous and Next methods</h2>
      <Slider ref={ref} {...settings}>
        <div key={1}>
          <h3>1</h3>
        </div>
        <div key={2}>
          <h3>2</h3>
        </div>
        <div key={3}>
          <h3>3</h3>
        </div>
        <div key={4}>
          <h3>4</h3>
        </div>
        <div key={5}>
          <h3>5</h3>
        </div>
        <div key={6}>
          <h3>6</h3>
        </div>
      </Slider>
      <div style={{ textAlign: "center" }}>
        <button className="button" onClick={() => previous()}>
          Previous
        </button>
        <button className="button" onClick={() => next()}>
          Next
        </button>
      </div>
    </div>
  );
}
