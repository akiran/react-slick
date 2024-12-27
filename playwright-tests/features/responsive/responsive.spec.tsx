import { test, expect } from "@playwright/experimental-ct-react";
import Responsive from "./responsive.story";

test.use({ viewport: { width: 1200, height: 500 } });

async function activeSlidesCount(component) {
  return await component.locator(".slick-slide.slick-active").count();
}

test("Responsive settings", async ({ mount, page }) => {
  const component = await mount(<Responsive />);

  await expect(await activeSlidesCount(component)).toEqual(4);

  await page.setViewportSize({ width: 1000, height: 500 });
  await page.waitForTimeout(10);
  await expect(await activeSlidesCount(component)).toEqual(3);

  await page.setViewportSize({ width: 600, height: 500 });
  await page.waitForTimeout(10);
  await expect(await activeSlidesCount(component)).toEqual(2);

  await page.setViewportSize({ width: 400, height: 500 });
  await page.waitForTimeout(10);
  await expect(await activeSlidesCount(component)).toEqual(1);

  await page.setViewportSize({ width: 600, height: 500 });
  await page.waitForTimeout(10);
  await expect(await activeSlidesCount(component)).toEqual(2);

  await page.setViewportSize({ width: 1000, height: 500 });
  await page.waitForTimeout(10);
  await expect(await activeSlidesCount(component)).toEqual(3);

  await page.setViewportSize({ width: 1500, height: 500 });
  await page.waitForTimeout(10);
  await expect(await activeSlidesCount(component)).toEqual(4);
});
