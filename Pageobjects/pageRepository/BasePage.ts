import { Page } from '@playwright/test';

export abstract class BasePage {
  protected readonly page: Page;
  protected readonly baseUrl: string;
  
  constructor(page: Page, URL: string) {
    this.page = page;
    this.baseUrl = URL || 'process.env.BASE_URL';
    if (!this.baseUrl) {
      throw new Error('Base URL must be provided to BasePage constructor');
    }
  }
  
    async navigate(path: string = ''): Promise<void> {
    await this.page.goto(`${this.baseUrl}${path}`);
  }
}