//Imports the test and expect functions from the Playwright ct-react module
import { test, expect } from "@playwright/experimental-ct-react";
//Imports the App component to test from the relative ../App path
import App from "./sample.story";

//Configures the viewport to a 500x500 size
test.use({ viewport: { width: 500, height: 500 } });
//Starts a test case named "should work" which will run asynchronously,
//mount function binding is destructured from test parameter
test("Sample playwright test", async ({ mount }) => {
  //Uses mount() to instantiate the <App /> component in isolation
  const component = await mount(<App></App>);
  //Asserts that component contains expected "Learn React" text on it verifying basic render.
  await expect(component).toContainText("Learn React");
});
