import { test, expect } from "@playwright/test";

test("Screenshot of blog", async ({ page }) => {
  await page.goto("http://localhost:3000/blog");

  await page.waitForTimeout(1000);

  await expect(page).toHaveScreenshot({ fullPage: true });
});

test("Screenshot of rabbit facts blog", async ({ page }) => {
  await page.goto("http://localhost:3000/blog/rabbit-facts");

  await page.waitForTimeout(1000);

  await expect(page).toHaveScreenshot({ fullPage: true });
});

test("Screenshot of steampunk rabbits blog", async ({ page }) => {
  await page.goto("http://localhost:3000/blog/steampunk-rabbits");

  await page.waitForTimeout(1000);

  await expect(page).toHaveScreenshot({ fullPage: true });
});
