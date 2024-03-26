import React from "react";
import Slider from "../src/index";

export function GenericSliderComponent({ slidesCount, settings }) {
  const slides = [...Array(slidesCount).keys()].map(item => (
    <div key={item}>{item + 1}</div>
  ));
  return <Slider {...settings}>{slides}</Slider>;
}

test("fake test", () => {
  expect(1).toBe(1);
});
