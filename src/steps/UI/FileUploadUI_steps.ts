import { Page, expect } from '@playwright/test';
import { Given, When, Then } from '@cucumber/cucumber';
import { LoginPage } from '../../../Pageobjects/pageRepository/LoginPage';
import { DashboardPage } from '../../../Pageobjects/pageRepository/dashboardPage';
import { UploadPage } from '../../../Pageobjects/pageRepository/UploadPage';
import { FileActions } from '../../../lib/FileActions';
import { GlobalContructor } from '../../../utils/GlobalContructor';

// page: Page;

const actions = new FileActions();
// const loginPage = new LoginPage(page);
const uploadPage = new UploadPage('process.env.BASE_URL');
const dashboardPage = new DashboardPage('process.env.BASE_URL');

// Step Definitions for File Upload Feature
// This file contains the step definitions for the file upload feature using Cucumber and Playwright.
// It includes steps for logging in, uploading files, validating metadata, and checking notifications.

Given('User A from Org1 logs into the UI portal', async function (this: GlobalContructor) {
  const loginPage = new LoginPage(this.page);

  await loginPage.loginAsUserA();
});

When('User A uploads up to 5 files with metadata', async () => {
  await uploadPage.uploadFilesWithMetadata();
});

Then('files are sent to REST API for processing and stored in S3', async () => {
  const response = await actions.verifyApiProcessing();
  expect(response.status()).toBe(200);
});

Then('metadata is validated successfully', async () => {
  const metadataValid = await dashboardPage.validateMetadata();
  expect(metadataValid).toBeTruthy();
});

Then('User B receives a dashboard notification and an email', async () => {
  await dashboardPage.checkNotification();
  await dashboardPage.checkEmail();
});

When('User B accesses the shared files', async function (this: GlobalContructor) {
  const loginPage = new LoginPage(this.page);

  await loginPage.loginAsUserB();
  await dashboardPage.accessSharedFiles();
});

When('User B adds a comment and shares the file back to User A', async () => {
  await dashboardPage.commentAndShareBack();
});

Then('User A can view the comment and shared file', async function (this: GlobalContructor) {
  const loginPage = new LoginPage(this.page);
  await loginPage.loginAsUserA();
  const visible = await dashboardPage.verifyCommentAndFile();
  expect(visible).toBeTruthy();
});
