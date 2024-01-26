import { filterSettings } from "../../src/utils/innerSliderUtils";

describe("filterSettings", () => {
  it("returns empty object if there are no valid settings", () => {
    expect(filterSettings({})).toEqual({});
    expect(filterSettings({ age: 10 })).toEqual({});
  });
  it("return an object with valid settings and omits extra properties", () => {
    expect(filterSettings({ arrows: true, dots: true })).toEqual({
      arrows: true,
      dots: true
    });
    expect(filterSettings({ arrows: true, dots: true, age: 10 })).toEqual({
      arrows: true,
      dots: true
    });
  });
});
