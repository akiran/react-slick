import React from "react";
import CenterMode from "../CenterMode";
import { render, fireEvent, waitFor, screen } from "@testing-library/react";
import { html as beautify_html } from "js-beautify";
import {
  activeSlides,
  getActiveSlidesCount,
  getClonesCount,
  getCurrentSlide,
  getSlidesCount
} from "../../test-utils";

describe("CenterMode Tests", () => {
  test("Counting test", () => {
    const { container } = render(<CenterMode />);
    let totalSlides = getSlidesCount(container);
    let clonedSlides = getClonesCount(container);
    let activeSlides = getActiveSlidesCount(container);
    expect(totalSlides).toEqual(16);
    expect(clonedSlides).toEqual(10);
    expect(activeSlides).toEqual(3);
    expect(beautify_html(toString(container))).toMatchSnapshot();
  });
  test("Positioning test", () => {
    const { container } = render(<CenterMode />);
    let currentSlide = getCurrentSlide(container);
    console.log(currentSlide[0]);
    // Array.from(currentSlide).map(e=>console.log(e))
    //let activeSlides = activeSlides(container);
    expect(currentSlide.props()["data-index"]).toEqual(0);
    // expect(activeSlides.map(slide => slide.props()["data-index"])).toEqual([
    //   -1,
    //   0,
    //   1
    // ]);
    // expect(beautify_html(slider.html())).toMatchSnapshot();
  });
  //   test("Activity test", () => {
  //     const slider = mount(<CenterMode />);
  //     let currentSlide = slider.find("div.slick-current");
  //     let activeSlides = slider.find("div.slick-active");
  //     expect(currentSlide.props()["data-index"]).toEqual(0);
  //     expect(activeSlides.map(slide => slide.props()["data-index"])).toEqual([
  //       -1,
  //       0,
  //       1
  //     ]);

  //     clickNext(slider);

  //     currentSlide = slider.find("div.slick-current");
  //     activeSlides = slider.find("div.slick-active");
  //     expect(currentSlide.props()["data-index"]).toEqual(1);
  //     expect(activeSlides.map(slide => slide.props()["data-index"])).toEqual([
  //       0,
  //       1,
  //       2
  //     ]);

  //     expect(beautify_html(slider.html())).toMatchSnapshot();
  //   });
});
