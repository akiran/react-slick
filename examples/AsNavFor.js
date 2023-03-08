import React, { useEffect, useRef, useState } from "react";
import Slider from "../src/slider";

export default function AsNavFor() {
  const slide1 = useRef();
  const slide2 = useRef();
  const [first, setFirst] = useState(null);
  const [second, setSecond] = useState(null);
  useEffect(() => {
    setFirst(slide1.current);
    setSecond(slide2.current);
  }, []);
  return (
    <div>
      <h2>Slider Syncing (AsNavFor)</h2>
      <h4>First Slider</h4>
      <Slider asNavFor={second} ref={slide1}>
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
      <h4>Second Slider</h4>
      <Slider
        asNavFor={first}
        ref={slide2}
        slidesToShow={3}
        swipeToSlide={true}
        focusOnSelect={true}
      >
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
