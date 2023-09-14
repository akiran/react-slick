import React from "react";
import { mount } from "enzyme";

import VerticalMode from "../VerticalMode";
import VerticalModeWhenUnslick from "../VerticalModeWhenUnslick";
import Slider from "../../src/slider";

describe("Vertical Mode", function () {
  it("should have 15 slides (3(preclone) + 6(actual) + 6(postclone))", function () {
    const wrapper = mount(<VerticalMode />);
    expect(wrapper.find(".slick-slide").length).toEqual(15);
  });
  it("should have 9 clone slides", function () {
    const wrapper = mount(<VerticalMode />);
    expect(wrapper.find(".slick-cloned").length).toEqual(9);
  });
  it("should have 3 active slide", function () {
    const wrapper = mount(<VerticalMode />);
    expect(wrapper.find(".slick-slide.slick-active").length).toEqual(3);
  });
  it("should have 6 dots", function () {
    const wrapper = mount(<VerticalMode />);
    expect(wrapper.find(".slick-dots").children().length).toEqual(6);
  });
  it("should have 1 active dot", function () {
    const wrapper = mount(<VerticalMode />);
    expect(wrapper.find(".slick-dots .slick-active").length).toEqual(1);
  });
  it("should have a prev arrow", function () {
    const wrapper = mount(<VerticalMode />);
    expect(wrapper.find(".slick-prev").length).toEqual(1);
  });
  it("should have a next arrow", function () {
    const wrapper = mount(<VerticalMode />);
    expect(wrapper.find(".slick-next").length).toEqual(1);
  });
});

describe("Vertical Mode when Unslick", function () {
  // ref: https://github.com/enzymejs/enzyme/issues/1940
  // fix the 'offsetHeight' to 100px
  const originalOffsetHeight = Object.getOwnPropertyDescriptor(
    HTMLElement.prototype,
    "offsetHeight"
  );
  beforeAll(() => {
    Object.defineProperty(HTMLElement.prototype, "offsetHeight", {
      configurable: true,
      value: 100,
    });
  });
  afterAll(() => {
    Object.defineProperty(
      HTMLElement.prototype,
      "offsetHeight",
      originalOffsetHeight
    );
  });

  it("should render correct height when only child", function () {
    const wrapper = mount(
      <Slider vertical>
        <div>
          <h3>1</h3>
        </div>
      </Slider>
    );

    const slides = wrapper.find(".slick-slide");
    const firstSlideHeight = slides.first().getDOMNode().offsetHeight;
    const totalHeight = parseInt(firstSlideHeight) * slides.length;
    const sliderTrackHeight = getComputedStyle(
      wrapper.find(".slick-track").getDOMNode()
    ).height;

    expect(totalHeight).toEqual(parseInt(sliderTrackHeight));
  });

  it("should render correct height when unslick", function () {
    const wrapper = mount(<VerticalModeWhenUnslick />);

    const slides = wrapper.find(".slick-slide");
    const firstSlideHeight = slides.first().getDOMNode().offsetHeight;
    const totalHeight = parseInt(firstSlideHeight) * slides.length;
    const sliderTrackHeight = getComputedStyle(
      wrapper.find(".slick-track").getDOMNode()
    ).height;

    expect(totalHeight).toEqual(parseInt(sliderTrackHeight));
  });

  it("should have 2 slides (0(preclone) + 2(actual) + 0(postclone))", function () {
    const wrapper = mount(<VerticalModeWhenUnslick />);
    expect(wrapper.find(".slick-slide").length).toEqual(2);
  });
  it("should have 0 clone slides", function () {
    const wrapper = mount(<VerticalModeWhenUnslick />);
    expect(wrapper.find(".slick-cloned").length).toEqual(0);
  });
  it("should have 2 active slide", function () {
    const wrapper = mount(<VerticalModeWhenUnslick />);
    expect(wrapper.find(".slick-slide.slick-active").length).toEqual(2);
  });
});
