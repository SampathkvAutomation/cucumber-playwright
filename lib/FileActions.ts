import { Page, request } from '@playwright/test';
import path from 'path';

export class FileActions {
  private page!: Page;




  async verifyApiProcessing() {
    const apiContext = await request.newContext();
    return apiContext.get('process.env.BASE_URL' + 'validate-files');
  }


}