/* eslint-disable @typescript-eslint/prefer-nullish-coalescing */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-require-imports */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/consistent-indexed-object-style */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { setWorldConstructor, World, IWorldOptions } from '@cucumber/cucumber';
import { Browser, BrowserContext, Page, chromium } from '@playwright/test';

export class GlobalContructor extends World {
  public browser!: Browser;
  public context!: BrowserContext;
  public page!: Page;
  public pages: { [key: string]: any } = {};

  constructor(options: IWorldOptions) {
    super(options);
  }

  async init() {
    this.browser = await chromium.launch({ headless: false });
    this.context = await this.browser.newContext();
    this.page = await this.context.newPage();

    // Initialize page objects
    const baseUrl = process.env.BASE_URL || 'Default';

    // Import page classes
    const { LoginPage } = require('../Pageobjects/pageRepository/LoginPage');
    const { DashboardPage } = require('../Pageobjects/pageRepository/DashboardPage');
    const { FileUploadPage } = require('../Pageobjects/pageRepository/FileUploadPage');

    // Create and store page instances
    this.pages.loginPage = new LoginPage(this.page);
    this.pages.dashboardPage = new DashboardPage(this.page, baseUrl);
    this.pages.fileUploadPage = new FileUploadPage(this.page, baseUrl);
  }

  async destroy() {
    if (this.browser) {
      await this.browser.close();
    }
  }
}

setWorldConstructor(GlobalContructor);
