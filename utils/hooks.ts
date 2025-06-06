import { Before, After } from '@cucumber/cucumber';
import { GlobalContructor } from '../utils/GlobalContructor';
import { chromium } from '@playwright/test';

// Initialize before each scenario
Before(async function (this: GlobalContructor) {
  // await this.init();
  const browser = await chromium.launch({ headless: false });
  const context = await browser.newContext();
  const page = await context.newPage();

  this.browser = browser;
  this.page = page;
});

// Clean up after each scenario
After(async function (this: GlobalContructor) {
  await this.destroy();
});
