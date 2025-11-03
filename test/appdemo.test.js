import { expect } from "chai";

// Test Suite for API Demos Mobile Application
describe("API Demos App", () => {
  // Test Case: Launch API Demos app
  it("should launch app successfully", async () => {
    await browser.startActivity("io.appium.android.apis", ".ApiDemos");
    console.log("✅ Open app successfully");
  });

  // Test Case: Verify all menu text elements are displayed and take screenshot
  it("should verify all text in API Demos", async () => {
    const expectedTexts = [
      "Accessibility",
      "Animation",
      "App",
      "Content",
      "Graphics",
      "Media",
      "NFC",
      "OS",
      "Preference",
      "Text",
      "Views",
    ];

    for (const expectedText of expectedTexts) {
      const element = await $(
        "//android.widget.TextView[@text='" + expectedText + "']"
      );
      const isDisplayed = await element.isDisplayed();
      expect(isDisplayed).to.be.true;
    }

    await browser.saveScreenshot("./screenshots/text-verification.png");
    console.log("✅ All texts verfied successfully");
  });
});
