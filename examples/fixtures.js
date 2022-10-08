const base = require('@playwright/test');
const { EmailAPI } = require('./pom/email-api')

exports.test = base.test.extend({
  emailAPI: async ({ playwright }, use) => {
    const BASE_URL = 'http://localhost:8025';
    let headersList = {
        "Accept": "*/*",
        "Authorization": `Basic ${process.env.AUTH_TOKEN}`
       }
    const apiContext = await playwright.request.newContext({
        baseURL: BASE_URL,
        ignoreHTTPSErrors: true,
        extraHTTPHeaders: headersList,
    });
    const emailAPI = new EmailAPI(apiContext);
    await use(emailAPI);     
  },
});
