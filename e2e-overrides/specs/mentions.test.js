/**
 * Internal dependencies
 *
 * @format
 */

import { newPost, getEditedPostContent, clickBlockAppender } from '../support/utils';
import { WP_USERNAME } from '../support/utils/config';

describe('autocomplete mentions', () => {
	beforeAll(async () => {
		await newPost();
	});

	it('should insert mention', async () => {
		await clickBlockAppender();
		await page.keyboard.type('I am @');
		await page.waitForSelector('.components-autocomplete__result');
		await page.keyboard.press('Enter');
		await page.keyboard.type('.');
		expect(await getEditedPostContent()).toMatch(`<!-- wp:paragraph -->
<p>I am @${WP_USERNAME}.</p>
<!-- /wp:paragraph -->`);
	});
});
