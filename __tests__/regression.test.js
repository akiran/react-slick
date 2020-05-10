import { mount } from "enzyme";
import React from "react";
import Slider from "../src/slider";

// Test to replicate https://github.com/akiran/react-slick/issues/1742
test("Should have 1 dot with 1 slide", () => {
  function DotMissingWithOneSlideIssue() {
    return (
      <Slider dots={true}>
        <h1>1</h1>
      </Slider>
    );
  }
  const slider = mount(<DotMissingWithOneSlideIssue />);
  let dots = slider.find(".slick-dots li").length;
  expect(dots).toEqual(1);
});
