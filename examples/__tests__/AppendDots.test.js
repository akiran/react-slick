import React from "react";
import { mount } from "enzyme";
import AppendDots from "../AppendDots";
import { html as beautify_html } from "js-beautify";

function generateAppendDots(className){
  return dots => (
    <div
      className={className}
      style={{
        backgroundColor: "#ddd",
        borderRadius: "10px",
        padding: "10px"
      }}
    >
      <ul style={{ margin: "0px" }}>{dots}</ul>
    </div>
  );
}

describe("AppendDots Tests", () => {
  test("Default example test", () => {
    const slider = mount(<AppendDots />);
    const dotsContainer = slider.find("div.slick-dots");
    expect(dotsContainer.length).toBe(1);
    expect(beautify_html(slider.html())).toMatchSnapshot();
  });
  test("Custom className test", () => {
    const settings = {
      appendDots: generateAppendDots('myClassName')
    };
    const slider = mount(<AppendDots settings={settings} />);
    const dotsContainer = slider.find("div.slick-dots.myClassName");
    expect(dotsContainer.length).toBe(1);
    expect(beautify_html(slider.html())).toMatchSnapshot();
  });
  test("Custom className and dotsClass setting", () => {
    const settings = {
      appendDots: generateAppendDots('myClassName'),
      dotsClass: 'customClassName'
    };
    const slider = mount(<AppendDots settings={settings} />);
    const dotsContainer = slider.find("div.customClassName.myClassName");
    expect(dotsContainer.length).toBe(1);
    expect(beautify_html(slider.html())).toMatchSnapshot();
  })
});