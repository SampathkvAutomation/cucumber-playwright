/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @stylistic/quotes */
import { Page, Locator } from '@playwright/test';
import * as dotenv from 'dotenv';
dotenv.config();

export class LoginPage {
  // private readonly baseUrl: string;
  constructor(private page: Page) {
    this.page = page;
  }

  async loginAsUserA() {
    const baseUrl = process.env.BASE_URL || 'https://www.foundahealth.com/'; // fallback
    await this.page.goto(`${baseUrl} `);
    await this.page.fill('#email', 'usera@org1.com');
    await this.page.fill('#password', 'password123');
    await this.page.click('button[type=submit]');
    await this.page.waitForSelector('#upload-area');
  }

  async loginAsUserB() {
    const baseUrl = process.env.BASE_URL || 'http://localhost:3000'; // fallback

    await this.page.goto(`${baseUrl}` + 'login');
    await this.page.fill('#email', 'userb@org2.com');
    await this.page.fill('#password', 'password123');
    await this.page.click('button[type=submit]');
  }
}
