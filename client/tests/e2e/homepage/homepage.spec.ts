import { test, expect } from "@playwright/test";

test("Screenshot of homepage", async ({ page }) => {
  await page.goto("http://localhost:3000/");

  await expect(page).toHaveScreenshot();
});

