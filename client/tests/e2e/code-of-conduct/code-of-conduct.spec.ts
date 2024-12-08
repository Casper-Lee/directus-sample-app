import { test, expect } from "@playwright/test";

test("Screenshot of code of conduct", async ({ page }) => {
  await page.goto("http://localhost:3000/conduct");

  await page.waitForTimeout(1000);

  await expect(page).toHaveScreenshot({ fullPage: true });
});
