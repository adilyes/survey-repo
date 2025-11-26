import { test, expect } from '@playwright/test';

test('Google title should contain Google', async ({ page }) => {
  await page.goto('https://google.com');
  await expect(page).toHaveTitle(/Google/);
});

test('This test will fail intentionally', async ({ page }) => {
  await page.goto('https://google.com');
  await expect(page).toHaveTitle(/SomethingElse/);
});