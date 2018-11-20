# Gutenlypso e2e

Manual e2e suite for Gutenberg running in a WPCOM Sandbox.

## Instructions

### Note: These tests will wipe out all posts and comments from the site!

Copy the `config-example.json` file as `config.json` and fill the `sandbox` object with the URL of a WPCOM Sandbox site and the credentials of an editor (or higher role) user.

To observe the tests visually, set `puppeteer.headless = false` in `config.json`, and increase `puppeteer.slowMo` until the tests are slow enough (I've found `50` to be my sweet spot).

Then `npm install` and `npm run test`.

## Sync with Gutenberg

As of 2018-11-20, this uses [Gutenberg 4.2.0](https://github.com/WordPress/gutenberg/releases/tag/v4.2.0) as it's the version used by the WPCOM Sandbox.

To update it as needed:

1. Download the source code of a new Gutenberg release (e.g. for 4.2.0: [https://github.com/WordPress/gutenberg/archive/v4.2.0.zip](https://github.com/WordPress/gutenberg/archive/v4.2.0.zip)).
2. Replace this repo's `/e2e` folder with the new Gutenberg version's `/test/e2e` one.
3. Copy the content of `e2e-overrides/support/utils.js` and use it to overwrite `e2e/support/utils.js`. (**Note**: in the future versions, all the functions in `utils.js` will be moved into their own files, so this will change.)
