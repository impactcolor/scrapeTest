const puppeteer = require('puppeteer');
const sleep = require('sleep');

(async () => {
  const searchQuery = 'motivation';
  const browser = await puppeteer.launch({
    headless: false,
  });
  const page = await browser.newPage();
  await page.goto('https://unsplash.com/collections/1004170/motivation');

  const getAllElements = await page.$$('._1Nk0C');

  for (const handle of getAllElements) {
    try {
      await handle.click();
      const downloadButton = await page.$('a[title="Download photo"]');
      await downloadButton.click();
      await sleep.sleep(2000);
    } catch (e) {
      console.error(e);
    }
  }

  await browser.close();
})();
