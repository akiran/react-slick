import React from "react";
import { mount } from "enzyme";
import SlickGoTo from "../SlickGoTo";

describe.skip("SlickGoTo", () => {
  it("should goto 2nd slide", () => {
    const wrapper = mount(<SlickGoTo />);
    wrapper.find("input").simulate("change", { target: { value: 1 } });
    expect(wrapper.find(".slick-slide.slick-active img").props().src).toEqual(
      "/img/react-slick/abstract02.jpg"
    );
  });
  it("should goto 2nd slide, even if input is number in string format", () => {
    const wrapper = mount(<SlickGoTo />);
    wrapper.find("input").simulate("change", { target: { value: "1" } });
    expect(wrapper.find(".slick-slide.slick-active img").props().src).toEqual(
      "/img/react-slick/abstract02.jpg"
    );
  });
  it("should remain at 1st slide", () => {
    const wrapper = mount(<SlickGoTo />);
    wrapper.find("input").simulate("change", { target: { value: 0 } });
    expect(wrapper.find(".slick-slide.slick-active img").props().src).toEqual(
      "/img/react-slick/abstract01.jpg"
    );
  });
  it.skip("should go to 1st slide from another 3rd slide", () => {
    // skipped because two simultaneous clicks dont' work with css and speed>0
    const wrapper = mount(<SlickGoTo waitForAnimate={false} />);
    wrapper.find("input").simulate("change", { target: { value: 3 } });
    wrapper.find("input").simulate("change", { target: { value: 0 } });
    expect(wrapper.find(".slick-slide.slick-active img").props().src).toEqual(
      "/img/react-slick/abstract01.jpg"
    );
  });
});
