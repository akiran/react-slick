import React from "react";
import { mount } from "enzyme";
import CenterMode from "../CenterMode";
import { html as beautify_html } from "js-beautify";
import { clickNext } from "../../__tests__/testUtils";

describe("CenterMode Tests", () => {
  test("Counting test", () => {
    const slider = mount(<CenterMode />);
    let totalSlides = slider.find(".slick-slide").length;
    let clonedSlides = slider.find(".slick-cloned").length;
    let activeSlides = slider.find(".slick-slide.slick-active").length;
    expect(totalSlides).toEqual(16);
    expect(clonedSlides).toEqual(10);
    expect(activeSlides).toEqual(3);
    expect(beautify_html(slider.html())).toMatchSnapshot();
  });
  test("Positioning test", () => {
    const slider = mount(<CenterMode />);
    let currentSlide = slider.find("div.slick-current");
    let activeSlides = slider.find("div.slick-active");
    expect(currentSlide.props()["data-index"]).toEqual(0);
    expect(activeSlides.map(slide => slide.props()["data-index"])).toEqual([
      -1,
      0,
      1
    ]);
    expect(beautify_html(slider.html())).toMatchSnapshot();
  });
  test("Activity test", () => {
    const slider = mount(<CenterMode />);
    let currentSlide = slider.find("div.slick-current");
    let activeSlides = slider.find("div.slick-active");
    expect(currentSlide.props()["data-index"]).toEqual(0);
    expect(activeSlides.map(slide => slide.props()["data-index"])).toEqual([
      -1,
      0,
      1
    ]);

    clickNext(slider);

    currentSlide = slider.find("div.slick-current");
    activeSlides = slider.find("div.slick-active");
    expect(currentSlide.props()["data-index"]).toEqual(1);
    expect(activeSlides.map(slide => slide.props()["data-index"])).toEqual([
      0,
      1,
      2
    ]);

    expect(beautify_html(slider.html())).toMatchSnapshot();
  });
});
