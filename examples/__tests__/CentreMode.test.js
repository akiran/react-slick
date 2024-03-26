import React from "react";
import CenterMode from "../CenterMode";
import { render } from "@testing-library/react";
import { html as beautify_html } from "js-beautify";
import {
  getActiveSlides,
  getActiveSlidesCount,
  getClonesCount,
  getCurrentSlide,
  getSlidesCount,
  clickNext
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
    //expect(beautify_html(toString(container))).toMatchSnapshot();
  });
  test("Positioning test", () => {
    const { container } = render(<CenterMode />);
    let currentSlide = getCurrentSlide(container);
    let activeslides = getActiveSlides(container);
    expect(parseInt(currentSlide.getAttribute("data-index"))).toEqual(0);
    expect(
      Array.from(activeslides).map(e => parseInt(e.getAttribute("data-index")))
    ).toEqual([-1, 0, 1]);
    //expect(beautify_html(toString(container))).toMatchSnapshot();
  });
  test("Activity test", () => {
    const { container } = render(<CenterMode />);
    let currentSlide = getCurrentSlide(container);
    let activeslides = getActiveSlides(container);
    expect(parseInt(currentSlide.getAttribute("data-index"))).toEqual(0);
    expect(
      Array.from(activeslides).map(e => parseInt(e.getAttribute("data-index")))
    ).toEqual([-1, 0, 1]);
    clickNext(container);

    currentSlide = getCurrentSlide(container);
    activeslides = getActiveSlides(container);
    expect(parseInt(currentSlide.getAttribute("data-index"))).toEqual(1);
    expect(
      Array.from(activeslides).map(e => parseInt(e.getAttribute("data-index")))
    ).toEqual([0, 1, 2]);

    // expect(beautify_html(toString(container))).toMatchSnapshot();
  });
});
