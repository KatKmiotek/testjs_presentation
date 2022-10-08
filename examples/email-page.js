exports.EmailPage = class EmailPage {

    /**
     * @param {import('@playwright/test').Page} page
     */
    constructor(page) {
      this.page = page;
      this.url = '/email'
      this.verifyButton = page.locator('#button1')
    }
  
    async goTo(HTMLContent){
        await this.page.route(this.url, (route) => {
            route.fulfill({ body: HTMLContent })
        })
        await this.page.goto(this.url);
    }
    
    async clickButton(){
        const [newPage] = await Promise.all([
            this.page.context().waitForEvent('page'),
            this.verifyButton.click(),
        ])
        return newPage;
    }
  }
