import React from "react";
import { mount } from "enzyme";
import Slider from "../src/index";

class ScrollBar extends React.Component {
  render() {
    const settings = { ...this.props };

    return (
      <Slider {...settings}>
        <div>slide1</div>
        <div>slide2</div>
        <div>slide3</div>
        <div>slide4</div>
      </Slider>
    );
  }
}

describe("ScrollBar with combinations of possibilities", function() {
  it("should display scrollbar if scrollBar prop is true and slides to show < total slides", function() {
    const settings = {
      slidesToShow: 2,
      scrollBar: true
    };
    const wrapper = mount(<ScrollBar {...settings} />);
    expect(wrapper.find(".scroll-bar").length).toBe(1);
  });
  it("should not display scrollbar if scrollBar prop is false", function() {
    const settings = {
      slidesToShow: 2,
      scrollBar: false
    };
    const wrapper = mount(<ScrollBar {...settings} />);
    expect(wrapper.find(".scroll-bar").length).not.toBe(1);
  });
  it("should not display scrollbar if slides to show >= total slides", function() {
    const settings = {
      slidesToShow: 4,
      scrollBar: true
    };
    const wrapper = mount(<ScrollBar {...settings} />);
    expect(wrapper.find(".scroll-bar").length).not.toBe(1);
  });
});
