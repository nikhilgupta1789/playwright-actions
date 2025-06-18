import { test, expect } from '@playwright/test';

test('@smoke Dashboard test', async ({ page }) => {
  // Navigate to the dashboard page
  await page.goto('https://www.automationexercise.com/products');

  // Check if the h1 element contains the text 'Dashboard'
  expect(page.url()).toContain('/products');
});
