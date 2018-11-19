/** @format */

import config from '../../../config.json';

const WP_ADMIN_USER = {
	username: config.testAccounts.gutenbergSimpleSiteUser[0],
	password: config.testAccounts.gutenbergSimpleSiteUser[1],
};

const {
	WP_USERNAME = WP_ADMIN_USER.username,
	WP_PASSWORD = WP_ADMIN_USER.password,
	WP_BASE_URL = config.sandboxURL,
} = process.env;

export { WP_ADMIN_USER, WP_USERNAME, WP_PASSWORD, WP_BASE_URL };
