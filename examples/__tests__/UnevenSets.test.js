import React from "react";
import { mount } from "enzyme";
import UnevenSetsFinite from "../UnevenSetsFinite";
import UnevenSetsInfinite from "../UnevenSetsInfinite";
import { html as beautify_html } from "js-beautify";
import { clickNext } from "../../__tests__/testUtils";

describe("UnevenSets Finite", () => {
  test("Counting test", () => {
    const slider = mount(<UnevenSetsFinite />);
    let totalSlides = slider.find(".slick-slide").length;
    let clonedSlides = slider.find(".slick-cloned").length;
    let activeSlides = slider.find(".slick-slide.slick-active").length;
    let dots = slider.find(".slick-dots").children().length;
    expect(totalSlides).toEqual(6);
    expect(clonedSlides).toEqual(0);
    expect(activeSlides).toEqual(4);
    expect(dots).toEqual(2);
    expect(beautify_html(slider.html())).toMatchSnapshot();
  });
  test("Positioning test", () => {
    const slider = mount(<UnevenSetsFinite />);
    let currentSlide = slider.find("div.slick-current");
    let activeSlides = slider.find("div.slick-active");
    expect(currentSlide.props()["data-index"]).toEqual(0);
    expect(activeSlides.map(slide => slide.props()["data-index"])).toEqual([
      0,
      1,
      2,
      3
    ]);
    expect(beautify_html(slider.html())).toMatchSnapshot();
  });
  test("Activity test", () => {
    const slider = mount(<UnevenSetsFinite />);
    let currentSlide = slider.find("div.slick-current");
    let activeSlides = slider.find("div.slick-active");
    expect(currentSlide.props()["data-index"]).toEqual(0);
    expect(activeSlides.map(slide => slide.props()["data-index"])).toEqual([
      0,
      1,
      2,
      3
    ]);

    clickNext(slider);

    currentSlide = slider.find("div.slick-current");
    activeSlides = slider.find("div.slick-active");
    expect(currentSlide.props()["data-index"]).toEqual(4);
    expect(activeSlides.map(slide => slide.props()["data-index"])).toEqual([
      4,
      5
    ]);

    clickNext(slider);

    currentSlide = slider.find("div.slick-current");
    activeSlides = slider.find("div.slick-active");
    expect(currentSlide.props()["data-index"]).toEqual(4);
    expect(activeSlides.map(slide => slide.props()["data-index"])).toEqual([
      4,
      5
    ]);

    expect(beautify_html(slider.html())).toMatchSnapshot();
  });
});

describe("UnevenSets Infinite", () => {
  test("Counting test", () => {
    const slider = mount(<UnevenSetsInfinite />);
    let totalSlides = slider.find(".slick-slide").length;
    let clonedSlides = slider.find(".slick-cloned").length;
    let activeSlides = slider.find(".slick-slide.slick-active").length;
    let dots = slider.find(".slick-dots").children().length;
    expect(totalSlides).toEqual(16);
    expect(clonedSlides).toEqual(10);
    expect(activeSlides).toEqual(4);
    expect(dots).toEqual(2);
    expect(beautify_html(slider.html())).toMatchSnapshot();
  });
  test("Positioning test", () => {
    const slider = mount(<UnevenSetsInfinite />);
    let currentSlide = slider.find("div.slick-current");
    let activeSlides = slider.find("div.slick-active");
    expect(currentSlide.props()["data-index"]).toEqual(0);
    expect(activeSlides.map(slide => slide.props()["data-index"])).toEqual([
      0,
      1,
      2,
      3
    ]);
    expect(beautify_html(slider.html())).toMatchSnapshot();
  });
  test("Activity test", () => {
    const slider = mount(<UnevenSetsInfinite />);
    let currentSlide = slider.find("div.slick-current");
    let activeSlides = slider.find("div.slick-active");
    expect(currentSlide.props()["data-index"]).toEqual(0);
    expect(activeSlides.map(slide => slide.props()["data-index"])).toEqual([
      0,
      1,
      2,
      3
    ]);

    clickNext(slider);

    currentSlide = slider.find("div.slick-current");
    activeSlides = slider.find("div.slick-active");
    expect(currentSlide.props()["data-index"]).toEqual(4);
    expect(activeSlides.map(slide => slide.props()["data-index"])).toEqual([
      4,
      5,
      6,
      7
    ]);
    expect(beautify_html(slider.html())).toMatchSnapshot();
  });
});
