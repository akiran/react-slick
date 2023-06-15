import React from "react";
import AsNavFor from "../AsNavFor";
import { render, fireEvent, waitFor, screen } from "@testing-library/react";
import { html as beautify_html } from "js-beautify";
import {
  getActiveSlide,
  clickNext,
  clickPrevious,
  hasClass,
  getActiveSlides,
  getActiveSlidesCount,
  getActiveSlidesText,
  getButtons,
  getButtonsListItem,
  getCurrentSlide,
  getSlideHeight
} from "../../test-utils";

describe("As Nav For example", () => {
  it("Number of slides should be 2", function() {
    const { container } = render(<AsNavFor />);
    expect(container.getElementsByClassName("slick-slider").length).toBe(2);
  });
  it("First Slide should have 8 slides (1(preclone) + 6(actual) + 1(postclone))", function() {
    const { container } = render(<AsNavFor a={5} />);
    expect(
      container
        .getElementsByClassName("slick-slider")[0]
        .getElementsByClassName("slick-slide").length
    ).toBe(8);
  });
  it("Second Slide should have 8 slides (1(preclone) + 6(actual) + 1(postclone))", function() {
    const { container } = render(<AsNavFor a={5} />);
    expect(
      container
        .getElementsByClassName("slick-slider")[1]
        .getElementsByClassName("slick-slide").length
    ).toBe(12);
  });
  it("Clicking on next of first slide should change second slide too", function() {
    const { container } = render(<AsNavFor />);
    expect(
      getActiveSlidesText(container.getElementsByClassName("slick-slider")[0])
    ).toEqual(["1"]);
    expect(
      getActiveSlidesText(container.getElementsByClassName("slick-slider")[1])
    ).toEqual(["1", "2", "3"]);
    clickNext(container.getElementsByClassName("slick-slider")[0]);
    expect(
      getActiveSlidesText(container.getElementsByClassName("slick-slider")[0])
    ).toEqual(["2"]);
    expect(
      getActiveSlidesText(container.getElementsByClassName("slick-slider")[1])
    ).toEqual(["2", "3", "4"]);
  });
  it("Clicking on next of second slide should change first slide too", function() {
    const { container } = render(<AsNavFor />);
    expect(
      getActiveSlidesText(container.getElementsByClassName("slick-slider")[0])
    ).toEqual(["1"]);
    expect(
      getActiveSlidesText(container.getElementsByClassName("slick-slider")[1])
    ).toEqual(["1", "2", "3"]);
    clickNext(container.getElementsByClassName("slick-slider")[1]);
    expect(
      getActiveSlidesText(container.getElementsByClassName("slick-slider")[0])
    ).toEqual(["2"]);
    expect(
      getActiveSlidesText(container.getElementsByClassName("slick-slider")[1])
    ).toEqual(["2", "3", "4"]);
  });
  it("Clicking on previous button of first slide should change second slide too", function() {
    const { container } = render(<AsNavFor />);
    expect(
      getActiveSlidesText(container.getElementsByClassName("slick-slider")[0])
    ).toEqual(["1"]);
    expect(
      getActiveSlidesText(container.getElementsByClassName("slick-slider")[1])
    ).toEqual(["1", "2", "3"]);
    clickPrevious(container.getElementsByClassName("slick-slider")[0]);
    expect(
      getActiveSlidesText(container.getElementsByClassName("slick-slider")[0])
    ).toEqual(["6"]);
    expect(
      getActiveSlidesText(container.getElementsByClassName("slick-slider")[1])
    ).toEqual(["6", "1", "2"]);
  });
  it("Clicking on previous button of second slide should change first slide too", function() {
    const { container } = render(<AsNavFor />);
    expect(
      getActiveSlidesText(container.getElementsByClassName("slick-slider")[0])
    ).toEqual(["1"]);
    expect(
      getActiveSlidesText(container.getElementsByClassName("slick-slider")[1])
    ).toEqual(["1", "2", "3"]);
    clickPrevious(container.getElementsByClassName("slick-slider")[1]);
    expect(
      getActiveSlidesText(container.getElementsByClassName("slick-slider")[0])
    ).toEqual(["6"]);
    expect(
      getActiveSlidesText(container.getElementsByClassName("slick-slider")[1])
    ).toEqual(["6", "1", "2"]);
  });
});
