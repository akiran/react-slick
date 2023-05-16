import React from "react";
import { render, fireEvent } from "@testing-library/react";
import UnevenSetsFinite from "../UnevenSetsFinite";
import UnevenSetsInfinite from "../UnevenSetsInfinite";
import { html as beautify_html } from "js-beautify";
import {
  activeSlides,
  clickNext,
  getActiveSlidesCount,
  getButtonsLength,
  getClonesCount,
  getCurrentSlide,
  getSlidesCount
} from "../../test-utils";

describe("UnevenSets Finite", () => {
  test("Counting test", () => {
    const { container } = render(<UnevenSetsFinite />);
    let totalSlides = getSlidesCount(container);
    let clonedSlides = getClonesCount(container);
    let activeSlides = getActiveSlidesCount(container);
    let dots = getButtonsLength(container);
    expect(totalSlides).toEqual(6);
    expect(clonedSlides).toEqual(0);
    expect(activeSlides).toEqual(4);
    expect(dots).toEqual(2);
    expect(beautify_html(toString(container))).toMatchSnapshot();
  });
  test("Positioning test", () => {
    const { container } = render(<UnevenSetsFinite />);
    let currentSlide = getCurrentSlide(container);
    let activeslides = activeSlides(container);
    expect(parseInt(currentSlide.getAttribute("data-index"))).toEqual(0);
    expect(
      Array.from(activeslides).map(slide =>
        parseInt(slide.getAttribute("data-index"))
      )
    ).toEqual([0, 1, 2, 3]);
    expect(beautify_html(toString(container))).toMatchSnapshot();
  });
  test("Activity test", () => {
    const { container } = render(<UnevenSetsFinite />);
    let currentSlide = getCurrentSlide(container);
    let activeslides = activeSlides(container);
    expect(parseInt(currentSlide.getAttribute("data-index"))).toEqual(0);
    expect(
      Array.from(activeslides).map(slide =>
        parseInt(slide.getAttribute("data-index"))
      )
    ).toEqual([0, 1, 2, 3]);

    clickNext(container);

    currentSlide = getCurrentSlide(container);
    activeslides = activeSlides(container);
    expect(parseInt(currentSlide.getAttribute("data-index"))).toEqual(4);
    expect(
      Array.from(activeslides).map(slide =>
        parseInt(slide.getAttribute("data-index"))
      )
    ).toEqual([2, 3, 4, 5]);

    expect(beautify_html(toString(container))).toMatchSnapshot();
  });
});

describe("UnevenSets Infinite", () => {
  test("Counting test", () => {
    const { container } = render(<UnevenSetsInfinite />);
    let totalSlides = getSlidesCount(container);
    let clonedSlides = getClonesCount(container);
    let activeSlides = getActiveSlidesCount(container);
    let dots = getButtonsLength(container);
    expect(totalSlides).toEqual(16);
    expect(clonedSlides).toEqual(10);
    expect(activeSlides).toEqual(4);
    expect(dots).toEqual(2);
    expect(beautify_html(toString(container))).toMatchSnapshot();
  });
  test("Positioning test", () => {
    const { container } = render(<UnevenSetsInfinite />);
    let currentSlide = getCurrentSlide(container);
    let activeslides = activeSlides(container);
    expect(parseInt(currentSlide.getAttribute("data-index"))).toEqual(0);
    expect(
      Array.from(activeslides).map(slide =>
        parseInt(slide.getAttribute("data-index"))
      )
    ).toEqual([0, 1, 2, 3]);
    expect(beautify_html(toString(container))).toMatchSnapshot();
  });
  test("Activity test", () => {
    const { container } = render(<UnevenSetsInfinite />);
    let currentSlide = getCurrentSlide(container);
    let activeslides = activeSlides(container);
    expect(parseInt(currentSlide.getAttribute("data-index"))).toEqual(0);
    expect(
      Array.from(activeslides).map(slide =>
        parseInt(slide.getAttribute("data-index"))
      )
    ).toEqual([0, 1, 2, 3]);

    clickNext(container);

    currentSlide = getCurrentSlide(container);
    activeslides = activeSlides(container);
    expect(parseInt(currentSlide.getAttribute("data-index"))).toEqual(4);
    expect(
      Array.from(activeslides).map(slide =>
        parseInt(slide.getAttribute("data-index"))
      )
    ).toEqual([4, 5, 6, 7]);
    expect(beautify_html(toString(container))).toMatchSnapshot();
  });
});
