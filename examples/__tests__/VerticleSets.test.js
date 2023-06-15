import React from "react";
import { render, fireEvent } from "@testing-library/react";
import VerticleMode from "../VerticalMode";
import VerticalSwipeToSlide from "../VerticalSwipeToSlide";
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

describe("Verticle Mode testing", function() {
  it("should have 9 actual slides and (1(pre) + 1(post)) clone slides", function() {
    const { container } = render(<VerticleMode />);
    expect(getSlidesCount(container)).toEqual(12);
    expect(getClonesCount(container)).toEqual(6);
    //expect(beautify_html(toString(container))).toMatchSnapshot();
  });
  it("should have 3 active slides", function() {
    const { container } = render(<VerticleMode />);
    expect(getActiveSlidesCount(container)).toEqual(3);
    // expect(beautify_html(toString(container))).toMatchSnapshot();
  });
  it("should have 3 dots", function() {
    const { container } = render(<VerticleMode />);
    expect(getButtonsLength(container)).toEqual(6);
    // expect(beautify_html(toString(container))).toMatchSnapshot();
  });
  it("should show first 3 slides", function() {
    const { container } = render(<VerticleMode />);
    expect(getActiveButton(container)).toEqual(["1"]);
    expect(getActiveSlidesText(container)).toEqual(["1", "2", "3"]);
    // expect(beautify_html(toString(container))).toMatchSnapshot();
  });
  it("should show slides from 4 to 6 when next button is clicked", function() {
    const { container } = render(<VerticleMode />);
    clickNext(container);
    // Array.from(container.querySelectorAll(".slick-current")).map(e=>console.log(e.textContent))
    expect(getActiveButton(container)).toEqual(["2"]);
    expect(getActiveSlidesText(container)).toEqual(["2", "3", "4"]);
    // expect(beautify_html(toString(container))).toMatchSnapshot();
  });
  it("should show last 3 slides when previous button is clicked", function() {
    const { container } = render(<VerticleMode />);
    clickPrevious(container);
    expect(getActiveButton(container)).toEqual(["6"]);
    expect(getActiveSlidesText(container)).toEqual(["6", "1", "2"]);
    // expect(beautify_html(toString(container))).toMatchSnapshot();
  });
  it("should show slides first 3 slides when first dot is clicked", function() {
    const { container } = render(<VerticleMode />);
    fireEvent(
      getButtons(container)[0],
      new MouseEvent("click", {
        bubbles: true,
        cancelable: true
      })
    );
    expect(getActiveButton(container)).toEqual(["1"]);
    expect(getActiveSlidesText(container)).toEqual(["1", "2", "3"]);
    // expect(beautify_html(toString(container))).toMatchSnapshot();
  });
  it("should show slides from 4 to 6 when fourth dot is clicked", function() {
    const { container } = render(<VerticleMode />);
    fireEvent(
      getButtons(container)[3],
      new MouseEvent("click", {
        bubbles: true,
        cancelable: true
      })
    );
    expect(getActiveButton(container)).toEqual(["4"]);
    expect(getActiveSlidesText(container)).toEqual(["4", "5", "6"]);
    // expect(beautify_html(toString(container))).toMatchSnapshot();
  });
  it("should show last 3 slides when last dot is clicked", function() {
    const { container } = render(<VerticleMode />);
    fireEvent(
      getButtons(container)[5],
      new MouseEvent("click", {
        bubbles: true,
        cancelable: true
      })
    );
    expect(getActiveButton(container)).toEqual(["6"]);
    expect(getActiveSlidesText(container)).toEqual(["6", "1", "2"]);
    // expect(beautify_html(toString(container))).toMatchSnapshot();
  });
});

describe("VerticleSwipeToSlide Mode testing", function() {
  it("should have 9 actual slides and (1(pre) + 1(post)) clone slides", function() {
    const { container } = render(<VerticalSwipeToSlide />);
    expect(getSlidesCount(container)).toEqual(12);
    expect(getClonesCount(container)).toEqual(6);
    //expect(beautify_html(toString(container))).toMatchSnapshot();
  });
  it("should have 3 active slides", function() {
    const { container } = render(<VerticalSwipeToSlide />);
    expect(getActiveSlidesCount(container)).toEqual(3);
    // expect(beautify_html(toString(container))).toMatchSnapshot();
  });
  it("should have 3 dots", function() {
    const { container } = render(<VerticalSwipeToSlide />);
    expect(getButtonsLength(container)).toEqual(6);
    // expect(beautify_html(toString(container))).toMatchSnapshot();
  });
  it("should show first 3 slides", function() {
    const { container } = render(<VerticalSwipeToSlide />);
    expect(getActiveButton(container)).toEqual(["1"]);
    expect(getActiveSlidesText(container)).toEqual(["1", "2", "3"]);
    // expect(beautify_html(toString(container))).toMatchSnapshot();
  });
  it("should show slides from 4 to 6 when next button is clicked", function() {
    const { container } = render(<VerticalSwipeToSlide />);
    clickNext(container);
    // Array.from(container.querySelectorAll(".slick-current")).map(e=>console.log(e.textContent))
    expect(getActiveButton(container)).toEqual(["2"]);
    expect(getActiveSlidesText(container)).toEqual(["2", "3", "4"]);
    // expect(beautify_html(toString(container))).toMatchSnapshot();
  });
  it("should show last 3 slides when previous button is clicked", function() {
    const { container } = render(<VerticalSwipeToSlide />);
    clickPrevious(container);
    expect(getActiveButton(container)).toEqual(["6"]);
    expect(getActiveSlidesText(container)).toEqual(["6", "1", "2"]);
    // expect(beautify_html(toString(container))).toMatchSnapshot();
  });
  it("should show slides first 3 slides when first dot is clicked", function() {
    const { container } = render(<VerticalSwipeToSlide />);
    fireEvent(
      getButtons(container)[0],
      new MouseEvent("click", {
        bubbles: true,
        cancelable: true
      })
    );
    expect(getActiveButton(container)).toEqual(["1"]);
    expect(getActiveSlidesText(container)).toEqual(["1", "2", "3"]);
    // expect(beautify_html(toString(container))).toMatchSnapshot();
  });
  it("should show slides from 4 to 6 when fourth dot is clicked", function() {
    const { container } = render(<VerticalSwipeToSlide />);
    fireEvent(
      getButtons(container)[3],
      new MouseEvent("click", {
        bubbles: true,
        cancelable: true
      })
    );
    expect(getActiveButton(container)).toEqual(["4"]);
    expect(getActiveSlidesText(container)).toEqual(["4", "5", "6"]);
    // expect(beautify_html(toString(container))).toMatchSnapshot();
  });
  it("should show last 3 slides when last dot is clicked", function() {
    const { container } = render(<VerticalSwipeToSlide />);
    fireEvent(
      getButtons(container)[5],
      new MouseEvent("click", {
        bubbles: true,
        cancelable: true
      })
    );
    expect(getActiveButton(container)).toEqual(["6"]);
    expect(getActiveSlidesText(container)).toEqual(["6", "1", "2"]);
    // expect(beautify_html(toString(container))).toMatchSnapshot();
  });
});
