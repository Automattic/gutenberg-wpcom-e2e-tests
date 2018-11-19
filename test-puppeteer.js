/** @format */
import config from './config.json';
import puppeteer from 'puppeteer';

(async () => {
	const browser = await puppeteer.launch({ headless: false });
	const page = await browser.newPage();
	await page.goto(config.calypsoBaseURL);
	await page.screenshot({ path: 'example.png' });

	await browser.close();
})();
