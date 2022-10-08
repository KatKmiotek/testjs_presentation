const utf8 = require('utf8');
const quotedPrintable = require('quoted-printable');

exports.EmailAPI = class EmailAPI {

    /**
     * @param {import('@playwright/test').APIRequestContext} apiContext
     */
    constructor(apiContext) {
      this.apiContext = apiContext;
    };

  async getEmailResponse(userEmail){
      const emailResponse = await this.apiContext.get('/api/v2/search', {
        params: {
          kind: 'to',
          query: userEmail,
        }
      });
      const responseJson = await emailResponse.json();
      return responseJson;
  };

  async getEmailBody(userEmail){
    const response = await this.getEmailResponse(userEmail)
    let emailBody = JSON.stringify(response.items[0].Content.Body);
      emailBody = JSON.parse(emailBody);
      emailBody = utf8.decode(quotedPrintable.decode(emailBody))
      return emailBody;
  };
  }
