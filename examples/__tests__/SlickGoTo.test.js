import React from "react";
import { fireEvent, getRoles, render } from "@testing-library/react";
import SlickGoTo from "../SlickGoTo";
import { activeSlide, getActiveSlides, getSlidesCount } from "../../test-utils";

describe.skip("SlickGoTo", () => {
  it("should goto 2nd slide", () => {
    const { container } = render(<SlickGoTo />);
    fireEvent.change(container.getElementsByTagName("input")[0], {
      target: { value: 1 }
    });
    let currentImg = Array.from(
      activeSlide(container).getElementsByTagName("img")
    )[0];
    expect(currentImg.getAttribute("src")).toEqual(
      "/img/react-slick/abstract02.jpg"
    );
  });
  it("should goto 2nd slide, even if input is number in string format", () => {
    const { container } = render(<SlickGoTo />);
    fireEvent.change(container.getElementsByTagName("input")[0], {
      target: { value: "1" }
    });
    let currentImg = Array.from(
      activeSlide(container).getElementsByTagName("img")
    )[0];
    expect(currentImg.getAttribute("src")).toEqual(
      "/img/react-slick/abstract02.jpg"
    );
  });
  it("should remain at 1st slide", () => {
    const { container } = render(<SlickGoTo />);
    fireEvent.change(container.getElementsByTagName("input")[0], {
      target: { value: 0 }
    });
    let currentImg = Array.from(
      activeSlide(container).getElementsByTagName("img")
    )[0];
    expect(currentImg.getAttribute("src")).toEqual(
      "/img/react-slick/abstract01.jpg"
    );
  });
  it.skip("should go to 1st slide from another 3rd slide", () => {
    // skipped because two simultaneous clicks dont' work with css and speed>0
    const wrapper = render(<SlickGoTo waitForAnimate={false} />);
    wrapper.find("input").simulate("change", { target: { value: 3 } });
    wrapper.find("input").simulate("change", { target: { value: 0 } });
    expect(wrapper.find(".slick-slide.slick-active img").props().src).toEqual(
      "/img/react-slick/abstract01.jpg"
    );
  });
});
