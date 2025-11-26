import { test, expect } from "@playwright/test";
import { step } from "allure-js-commons";

test("Google title should contain Google", async ({ page }) => {
  await step("Открываем главную страницу", async () => {
    await page.goto("https://google.com");
  });
  await expect(page).toHaveTitle(/Google/);
});

test("This test will fail intentionally", async ({ page }) => {
  await step("Open Google homepage", async () => {
    await page.goto("https://google.com");
  });
  await expect(page).toHaveTitle(/SomethingElse/);
});
