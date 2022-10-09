const { test } = require('../fixtures');
const { expect } = require('@playwright/test')
const { EmailPage } = require('../pom/email-page');

test('User can verify email', async ({ emailAPI, page }) => {
  // pre-condition 

  const HTMLBody = await emailAPI.getEmailBody('testUser@example.com');

  const emailPage = new EmailPage(page);

  await emailPage.goTo(HTMLBody);
  await emailPage.clickButton();

  expect(page.url()).toEqual('https://testjssummit.com/')
});

test('Visual comparison of email', async ({ emailAPI, page }) => {
    // pre-condition 
  
    const HTMLBody = await emailAPI.getEmailBody('testUser@example.com');
  
    const emailPage = new EmailPage(page);
  
    await emailPage.goTo(HTMLBody);
    
    await expect(page).toHaveScreenshot('email.png');
  });

  test('Get a button href', async ({ emailAPI, page }) => {
    // pre-condition 
  
    const HTMLBody = await emailAPI.getEmailBody('testUser@example.com');
  
    const emailPage = new EmailPage(page);
    await emailPage.goTo(HTMLBody);

  
    await expect(emailPage.verifyButton)
                .toHaveAttribute('href', 'https://testjssummit.com/');
    
  });
test('User can verify email', async () => {
    // pre-condition i.e user creates the account - email gets sent
    
    // want to access SMTP server
    // get last email that has been sent to the user
    // get its HTML body part
    // render page with email content
    // click verify button 
    // confirm new tab opens and has expected URL

  });
