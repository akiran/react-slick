import React from "react";
import { mount } from "enzyme";
import Fade from "../Fade";
import { clickNext, clickPrev } from "../../__tests__/testUtils";

describe("Fade", () => {
  it("should change slides when clicked on next & prev buttons", () => {
    const slider = mount(<Fade />);
    let activeSlide = slider.find("div.slick-active");
    expect(activeSlide.props()["data-index"]).toEqual(0);
    clickNext(slider);
    activeSlide = slider.find("div.slick-active");
    expect(activeSlide.props()["data-index"]).toEqual(1);
    clickPrev(slider);
    activeSlide = slider.find("div.slick-active");
    expect(activeSlide.props()["data-index"]).toEqual(0);
  });
});
