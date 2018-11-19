/**
 * Node dependencies
 *
 * @format
 */

import { join } from 'path';

/**
 * Internal dependencies
 */
import { goToWPPath } from './go-to-wp-path';
import { login } from './login';

export async function visitAdmin(adminPath, query) {
	await goToWPPath(join('wp-admin', adminPath), query);

	if (page.url().indexOf('/log-in') !== -1) {
		await login();
		return visitAdmin(adminPath, query);
	}
}
