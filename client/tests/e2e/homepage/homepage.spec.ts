import { test, expect } from "@playwright/test";

test("Screenshot of homepage", async ({ page }) => {
  await page.goto("http://localhost:3000/");

  await page.waitForTimeout(1000);

  await expect(page).toHaveScreenshot();
});

test("Navigation Bar", async ({ page }) => {
  await page.goto("http://localhost:3000/");

  await page.getByTestId("home-link").click();
  await expect(page).toHaveURL("http://localhost:3000/");

  await page.getByTestId("about-link").click();
  await expect(page).toHaveURL("http://localhost:3000/about");

  await page.getByTestId("conduct-link").click();
  await expect(page).toHaveURL("http://localhost:3000/conduct");

  await page.getByTestId("privacy-link").click();
  await expect(page).toHaveURL("http://localhost:3000/privacy");

  await page.getByTestId("blog-link").click();
  await expect(page).toHaveURL("http://localhost:3000/blog");
});
