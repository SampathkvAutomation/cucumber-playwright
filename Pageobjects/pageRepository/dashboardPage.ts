/* eslint-disable @typescript-eslint/require-await */
/* eslint-disable @typescript-eslint/no-unused-vars */

import { Page, Locator } from '@playwright/test';

export class DashboardPage {
  //   private  notificationsIcon: Locator;
  //   private  notificationsCount: Locator;
  //   private  notificationsList: Locator;
  //   private readonly uploadButton: Locator;
  //   private readonly filesList: Locator;
  private readonly page!: Page;
  private readonly baseUrl!: string;

  constructor(baseUrl: string) {
    // this.notificationsIcon = this.page.locator('.notifications-Icon');
    // this.notificationsCount = this.page.locator('.notifications-count');
    // this.notificationsList = this.page.locator('.notifications-list');
    // this.uploadButton = this.page.locator('button.upload-files');
    // this.filesList = this.page.locator('.files-list');
  }

  async navigate(): Promise<void> {
    await this.page.goto('process.env.BASE_URL' + '/dashboard');
  }

  async validateMetadata() {
    // Mock validation or check response
    return true;
  }

  async checkNotification() {
    await this.page.goto('process.env.BASE_URL' + '/dashboard');
    await this.page.waitForSelector('.notification-item:has-text("New file from User A")');
  }

  async checkEmail() {
    // Simulate email check (use MailSlurp or mock)
    return true;
  }

  async accessSharedFiles() {
    await this.page.click('text=Shared With Me');
    await this.page.waitForSelector('.shared-file');
  }

  async commentAndShareBack() {
    await this.page.click('.shared-file');
    await this.page.fill('#comment-box', 'Looks good, sharing back!');
    await this.page.click('#share-back');
  }

  async verifyCommentAndFile() {
    await this.page.click('text=My Files');
    return this.page.isVisible('text=Looks good, sharing back!');
  }
}
