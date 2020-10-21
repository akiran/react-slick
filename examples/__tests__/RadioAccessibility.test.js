import React from "react";
import { mount } from "enzyme";
import RadioAccessibility from "../RadioAccessibility";
import { html as beautify_html } from "js-beautify";

describe("Radio Accessibility", function() {
  it("should have role radiogroup", function() {
    const wrapper = mount(<RadioAccessibility />);
  });

  it("should have 9 slides and no cloned slides", function() {
    const wrapper = mount(<RadioAccessibility />);
    expect(wrapper.find(".slick-slide").length).toEqual(9);
    expect(beautify_html(wrapper.html())).toMatchSnapshot();
  });
  it("should have 3 active slides", function() {
    const wrapper = mount(<RadioAccessibility />);
    expect(wrapper.find(".slick-slide.slick-active").length).toEqual(3);
    expect(beautify_html(wrapper.html())).toMatchSnapshot();
  });
  it("should show first 3 slides", function() {
    const wrapper = mount(<RadioAccessibility />);
    expect(
      wrapper
        .find(".slick-slide.slick-active")
        .first()
        .text()
    ).toEqual("Focusable LinkFocusable ButtonHeader 1");
    expect(
      wrapper
        .find(".slick-slide.slick-active")
        .at(1)
        .text()
    ).toEqual("2");
    expect(
      wrapper
        .find(".slick-slide.slick-active")
        .last()
        .text()
    ).toEqual("3");
    expect(beautify_html(wrapper.html())).toMatchSnapshot();
  });
  it("should show slides from 4 to 6 when next button is clicked", function() {
    const wrapper = mount(<RadioAccessibility />);
    wrapper.find(".slick-next").simulate("click");
    expect(
      wrapper
        .find(".slick-slide.slick-active")
        .first()
        .text()
    ).toEqual("4");
    expect(
      wrapper
        .find(".slick-slide.slick-active")
        .at(1)
        .text()
    ).toEqual("5");
    expect(
      wrapper
        .find(".slick-slide.slick-active")
        .last()
        .text()
    ).toEqual("6");
    expect(beautify_html(wrapper.html())).toMatchSnapshot();
  });
});
