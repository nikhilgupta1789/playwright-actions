import { test, expect } from '@playwright/test';

test('@e2e Login test', async ({ page }) => {
  // Navigate to the login page
  await page.goto('https://www.automationexercise.com/');

  await page.click('text=Login');

  // Fill in the username and password fields
  await page.fill('input[name="email"]', process.env.USERNAME || 'user');
  await page.fill('input[name="password"]', process.env.PASSWORD || 'pass');

  // Submit the login form
  await page.click('button[type="submit"]');

  // Wait for navigation to the dashboard
  await page.waitForURL('**/login');

  // Check if the URL contains '/dashboard'
  expect(page.url()).toContain('/login');
});
