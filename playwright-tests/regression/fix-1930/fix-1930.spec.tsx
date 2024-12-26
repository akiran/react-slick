// Test fix of #1930: Extra height of slider in vertical mode when number of slides is less than or equal to slidesToShow

import { test, expect } from "@playwright/experimental-ct-react";
import { VerticalModeFinite, VerticalModeInfinite } from "./fix-1930.story";

test.use({ viewport: { width: 500, height: 500 } });

test("height check in vertical mode when slides < slidesToShow and finite", async ({
  mount
}) => {
  const component = await mount(<VerticalModeFinite />);

  const track = component.locator(".slick-track").first();
  const box = await track.boundingBox();
  await expect(box.height).toEqual(200);
});

test("height check in vertical mode when slides < slidesToShow and infinite", async ({
  mount
}) => {
  const component = await mount(<VerticalModeInfinite />);

  const track = component.locator(".slick-track").first();
  const box = await track.boundingBox();
  await expect(box.height).toEqual(200);
});
