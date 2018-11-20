/** @format */

import { sandbox } from '../../../config.json';

const { username, password, url } = sandbox;

const WP_ADMIN_USER = {
	username,
	password,
};

const {
	WP_USERNAME = WP_ADMIN_USER.username,
	WP_PASSWORD = WP_ADMIN_USER.password,
	WP_BASE_URL = url,
} = process.env;

export { WP_ADMIN_USER, WP_USERNAME, WP_PASSWORD, WP_BASE_URL };
