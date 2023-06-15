import React from "react";
import AppendDots from "../AppendDots";
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

describe("Append Dots example", () => {
  it("should have 8 slides (1(preclone) + 6(actual) + 1(postclone))", function() {
    const { container } = render(<AppendDots a={5} />);
    expect(container.getElementsByClassName("slick-slide").length).toBe(8);
  });
  it("should have 3 clone slides", function() {
    const { container } = render(<AppendDots />);
    expect(container.getElementsByClassName("slick-cloned").length).toBe(2);
  });
  it("should have 1 current slide", function() {
    const { container } = render(<AppendDots />);
    expect(
      container.querySelectorAll(".slick-slide.slick-current").length
    ).toBe(1);
    expect(parseInt(getCurrentSlide(container).textContent) - 1).toBe(0);
  });
  it("should have 1 active slide", function() {
    const { container } = render(<AppendDots />);
    expect(container.querySelectorAll(".slick-slide.slick-active").length).toBe(
      1
    );
    expect(
      Array.from(getActiveSlide(container).children).map(
        e => parseInt(e.textContent) - 1
      )[0]
    ).toBe(0);
  });
  it("should have 6 dots", function() {
    const { container } = render(<AppendDots />);
    console.log(
      Array.from(container.getElementsByClassName("slick-dots"))[0].children[0]
        .children.length
    );
    expect(
      container.getElementsByClassName("slick-dots")[0].children[0].children
        .length
    ).toBe(6);
  });
  it("should have 1 active dot", function() {
    const { container } = render(<AppendDots />);

    expect(container.querySelectorAll(".slick-dots .slick-active").length).toBe(
      1
    );
  });
  it("should have a prev arrow", function() {
    const { container } = render(<AppendDots />);
    expect(container.getElementsByClassName("slick-prev").length).toBe(1);
  });
  it("should have a next arrow", function() {
    const { container } = render(<AppendDots />);
    expect(container.getElementsByClassName("slick-next").length).toBe(1);
  });
  it("should got to next slide when next button is clicked", function() {
    const { container } = render(<AppendDots />);
    clickNext(container);
    expect(
      container.querySelectorAll(".slick-slide.slick-active")[0].textContent
    ).toBe("2");
    expect(container.querySelectorAll(".slick-dots .slick-active").length).toBe(
      1
    );
    expect(
      container.getElementsByClassName("slick-dots")[0].children[0].children[1]
    ).toHaveClass("slick-active");
  });
  it("should goto previous slide when prev button is clicked", function() {
    const { container } = render(<AppendDots />);
    clickPrevious(container);
    expect(
      container.querySelectorAll(".slick-slide.slick-active")[0].textContent
    ).toBe("6");
    expect(container.querySelectorAll(".slick-dots .slick-active").length).toBe(
      1
    );
    expect(
      container.getElementsByClassName("slick-dots")[0].children[0].children[5]
    ).toHaveClass("slick-active");
  });
  it("should goto 4th slide when 4th dot is clicked", function() {
    const { container } = render(<AppendDots />);
    fireEvent(
      container.querySelectorAll(".slick-dots div")[3],
      new MouseEvent("click", {
        bubbles: true,
        cancelable: true
      })
    );
    expect(getActiveSlidesText(container)[0]).toEqual("4");
    expect(getActiveSlidesCount(container)).toEqual(1);
    expect(
      hasClass(
        container.getElementsByClassName("slick-dots")[0].children[0]
          .children[3],
        "slick-active"
      )
    ).toEqual(true);
  });
  it("check the content of dots", function() {
    const { container } = render(<AppendDots />);
    const array = [];
    Array.from(
      container.getElementsByClassName("slick-dots")[0].children[0].children
    ).forEach(i => array.push(i.textContent));
    expect(array).toEqual(["1", "2", "3", "4", "5", "6"]);
  });
});
