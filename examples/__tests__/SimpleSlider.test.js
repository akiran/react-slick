import React from "react";
import SimpleSlider from "../SimpleSlider";
import { render, fireEvent, waitFor, screen } from "@testing-library/react";

describe("SimpleSlider example", () => {
  test("render", () => {
    const { container } = render(<SimpleSlider />);
    expect(container.getElementsByClassName("slick-slide").length).toBe(13);
  });
});
