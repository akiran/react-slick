import React from "react";
import SimpleSlider from "../SimpleSlider";
import { render, fireEvent, waitFor, screen } from "@testing-library/react";

describe("SimpleSlider example", () => {
  it("should have 13 slides (1(preclone) + 6(actual) + 6(postclone))", function() {
    const { container } = render(<SimpleSlider />);
    expect(container.getElementsByClassName("slick-slide").length).toBe(13);
  });
  it("should have 7 clone slides", function() {
    const { container } = render(<SimpleSlider />);

    expect(container.getElementsByClassName("slick-cloned").length).toBe(7);
  });
  it("should have 1 active slide", function() {
    const { container } = render(<SimpleSlider />);
    expect(container.querySelectorAll(".slick-slide.slick-active").length).toBe(
      1
    );
  });
  it("should have 6 dots", function() {
    const { container } = render(<SimpleSlider />);
    expect(
      container.getElementsByClassName("slick-dots")[0].children.length
    ).toBe(6);
  });
  it("should have 1 active dot", function() {
    const { container } = render(<SimpleSlider />);
    expect(container.querySelectorAll(".slick-dots .slick-active").length).toBe(
      1
    );
  });
  it("should have a prev arrow", function() {
    const { container } = render(<SimpleSlider />);
    expect(container.getElementsByClassName("slick-prev").length).toBe(1);
  });
  it("should have a next arrow", function() {
    const { container } = render(<SimpleSlider />);
    expect(container.getElementsByClassName("slick-next").length).toBe(1);
  });
  it("should got to second slide when next button is clicked", function() {
    const { container } = render(<SimpleSlider />);
    fireEvent(
      container.getElementsByClassName("slick-next")[0],
      new MouseEvent("click", {
        bubbles: true,
        cancelable: true
      })
    );
    expect(
      container.querySelectorAll(".slick-slide.slick-active")[0].textContent
    ).toBe("2");
    expect(container.querySelectorAll(".slick-dots .slick-active").length).toBe(
      1
    );
    expect(
      container
        .querySelectorAll(".slick-dots")[0]
        .children[1].classList.contains("slick-active")
    ).toBe(true);
  });
});
