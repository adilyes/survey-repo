import { test, expect } from "@playwright/test";
import { step, attachment } from "allure-js-commons";

test("Google title should contain Google", async ({ page }) => {
  await step("Navigate Hello world", async () => {
  await page.goto("https://google.com");
  });
  await attachment("Screenshot", await page.screenshot(), "image/png")
  await expect(page).toHaveTitle(/Google/);
});

test("This test will fail intentionally", async ({ page }) => {
  await page.goto("https://google.com");
  await expect(page).toHaveTitle(/SomethingElse/);
});
