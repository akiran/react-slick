import React from "react";
import { render, fireEvent } from "@testing-library/react";
import { html as beautify_html } from "js-beautify";
import {
  activeSlide,
  activeSlides,
  clickNext,
  clickPrevious,
  getActiveButton,
  getActiveSlidesCount,
  getActiveSlidesText,
  getButtons,
  getButtonsLength,
  getButtonsListItem,
  getClonesCount,
  getCurrentSlide,
  getSlidesCount,
  hasClass
} from "../../test-utils";
import SwipeToSlide from "../SwipeToSlide";

describe("Multiple Items", function() {
  it("should have 9 actual slides and (3(pre) + 3(post)) clone slides", function() {
    const { container } = render(<SwipeToSlide />);
    expect(getSlidesCount(container)).toEqual(19);
    expect(getClonesCount(container)).toEqual(10);
    //expect(beautify_html(toString(container))).toMatchSnapshot();
  });
  it("should have 5 active slides", function() {
    const { container } = render(<SwipeToSlide />);
    expect(getActiveSlidesCount(container)).toEqual(5);
    // expect(beautify_html(toString(container))).toMatchSnapshot();
  });
  it("should show first 5 slides", function() {
    const { container } = render(<SwipeToSlide />);
    expect(getActiveSlidesText(container)).toEqual(["1", "2", "3", "4", "5"]);
    // expect(beautify_html(toString(container))).toMatchSnapshot();
  });
  it("should show slides from 2 to 6 when next button is clicked", function() {
    const { container } = render(<SwipeToSlide />);
    clickNext(container);
    // Array.from(container.querySelectorAll(".slick-current")).map(e=>console.log(e.textContent))x
    expect(getActiveSlidesText(container)).toEqual(["2", "3", "4", "5", "6"]);
    // expect(beautify_html(toString(container))).toMatchSnapshot();
  });
  it("should show last 5 slides when previous button is clicked", function() {
    const { container } = render(<SwipeToSlide />);
    clickPrevious(container);
    expect(getActiveSlidesText(container)).toEqual(["9", "1", "2", "3", "4"]);
    // expect(beautify_html(toString(container))).toMatchSnapshot();
  });
});
