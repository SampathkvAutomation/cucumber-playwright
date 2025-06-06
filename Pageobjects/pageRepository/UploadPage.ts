/* eslint-disable @typescript-eslint/no-unused-vars */
import { Page, Locator } from '@playwright/test';
// import { FileActions } from '../../lib/FileActions';
// import { User } from '../../lib/User';
import path from 'path';

export class UploadPage {
  // private readonly fileInput: Locator;
  // private readonly titleInput: Locator;
  // private readonly fileOwner: Locator;
  // private readonly uploadButton: Locator;
  private readonly page!: Page;
  private readonly baseUrl!: string;

  constructor(baseUrl: string) {
    // this.fileInput = this.page.locator('input[type="file"]');
    // this.titleInput = this.page.locator('#file-title');
    // this.fileOwner = this.page.locator('#fileOwner-select');
    // this.uploadButton = this.page.locator('button.submit-upload');
  }

  async navigateToUpload() {
    await this.page.goto(`${this.baseUrl}/upload`);
    await this.page.waitForSelector('input[type="file"]');
  }

  async uploadFilesWithMetadata() {
    const filePath = path.resolve('tests/test-data/sample.pdf');
    for (let i = 0; i < 5; i++) {
      await this.page.setInputFiles('#file-upload', filePath);
      await this.page.fill(`#title-${i}`, `File Title ${i}`);
      await this.page.fill(`#owner-${i}`, 'User A');
    }
    await this.page.click('#submit-upload');
  }
}

function navigateToUpload() {
  throw new Error('Function not implemented.');
}
