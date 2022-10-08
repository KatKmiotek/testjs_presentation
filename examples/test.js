const { test } = require('../fixtures');
const { expect } = require('@playwright/test')
const { EmailPage } = require('../pom/email-page');

test('User can verify email', async ({ emailAPI, page }) => {
  const emailPage = new EmailPage(page);
  const HTML = await emailAPI.getEmailBody('testUser@example.com');
  await emailPage.goTo(HTML);
  await emailPage.clickButton();
  expect(page.url()).toEqual('https://testjssummit.com/')
});
