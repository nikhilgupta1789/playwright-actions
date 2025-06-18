import fs from 'fs';
import path from 'path';
import { defineConfig } from '@playwright/test';

// Delete existing allure-results and allure-report directories before the suite runs
const baseDir = path.resolve(__dirname);
const allureResultsDir = path.join(baseDir, 'allure-results');
const allureReportDir = path.join(baseDir, 'allure-report');

if (fs.existsSync(allureResultsDir)) {
  fs.rmSync(allureResultsDir, { recursive: true, force: true });
  console.log('Deleted existing allure-results directory');
}

if (fs.existsSync(allureReportDir)) {
  fs.rmSync(allureReportDir, { recursive: true, force: true });
  console.log('Deleted existing allure-report directory');
}

export default defineConfig({
  testDir: './tests',
  reporter: [
    ['list'],
    ['allure-playwright']
  ],
  use: {
    headless: true,
  },
});
