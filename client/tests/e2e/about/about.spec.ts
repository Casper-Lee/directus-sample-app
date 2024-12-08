import { test, expect } from "@playwright/test";

test("Screenshot of about", async ({ page }) => {
  await page.goto("http://localhost:3000/about");

  await page.waitForTimeout(1000);

  await expect(page).toHaveScreenshot({ fullPage: true });
});
