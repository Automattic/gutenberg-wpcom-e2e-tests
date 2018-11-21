/** @format */
/**
 * Internal dependencies
 */
import { WP_USERNAME, WP_PASSWORD } from './config';

export async function login(username = WP_USERNAME, password = WP_PASSWORD) {
	await page.waitForSelector('#usernameOrEmail');
	await page.focus('#usernameOrEmail');
	await page.type('#usernameOrEmail', username);
	await page.click('.login__form-action button.is-primary');
	await page.waitFor(1000);
	await page.focus('#password');
	await page.type('#password', password);
	await page.waitFor(1000);

	await Promise.all([
		page.waitForNavigation(),
		page.click('.login__form-action button.is-primary'),
	]);
}
