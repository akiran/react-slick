import React from "react";
import { mount } from "enzyme";
import AutoPlay from "../AutoPlay";

describe("AutoPlay Tests", () => {
  test.skip("autoplay default true test", async () => {
    const wrapper = mount(<AutoPlay />);
    await new Promise(resolve => setTimeout(resolve, 2200));
    wrapper.update(); 
    expect(wrapper.find("div.slick-current").props()["data-index"]).toEqual(1);
  });

  test("autoplay true to false test", async () => {
    const wrapper = mount(<AutoPlay />);
    expect(wrapper.find("div.slick-current").props()["data-index"]).toEqual(0);

    await new Promise(resolve => setTimeout(resolve, 500));
    wrapper.update(); 
    expect(wrapper.find("div.slick-current").props()["data-index"]).toEqual(0);

    wrapper.find('.button').at(1).simulate("click");
    await new Promise(resolve => setTimeout(resolve, 2200));
    wrapper.update(); 
    expect(wrapper.find("div.slick-current").props()["data-index"]).toEqual(0);
  });

  test("autoplay false to true test", async () => {
    const wrapper = mount(<AutoPlay />);
    wrapper.find('.button').at(1).simulate("click");
    expect(wrapper.find("div.slick-current").props()["data-index"]).toEqual(0);

    await new Promise(resolve => setTimeout(resolve, 2200));
    wrapper.update(); 
    expect(wrapper.find("div.slick-current").props()["data-index"]).toEqual(0);
    wrapper.find('.button').at(0).simulate("click");
    await new Promise(resolve => setTimeout(resolve, 2200));
    wrapper.update(); 
    expect(wrapper.find("div.slick-current").props()["data-index"]).toEqual(1);
  });
});
