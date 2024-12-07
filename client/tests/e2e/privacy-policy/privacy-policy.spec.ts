import { test, expect } from "@playwright/test";

test("Screenshot of privacy policy", async ({ page }) => {
  await page.goto("http://localhost:3000/privacy");

  await page.waitForTimeout(1000);

  await expect(page).toHaveScreenshot({ fullPage: true });
});
