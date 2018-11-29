# Gutenberg on WPCOM e2e Tests

Manual e2e suite for **Gutenberg v4.5.1** running in a WPCOM Sandbox.

## Instructions

### Note: These tests will wipe out all posts and comments from the site!

1. Install the dependencies:

```
npm install
```

2. Copy the `config-example.json` file as `config.json` and fill the `sandbox` object with the URL of a WPCOM Sandbox site and the credentials of an editor (or higher role) user.<br>To observe the tests visually, set `puppeteer.headless = false` in `config.json`, and increase `puppeteer.slowMo` until the tests are slow enough (I've found `50` to be my sweet spot).

3. Obtain the e2e tests from a Gutenberg release (e.g. [`v4.5.1`]((https://github.com/WordPress/gutenberg/releases/tag/v4.5.1))):

```
npm run update-e2e v4.5.1
```

4. Update `/e2e-overrides` if needed.

5. Turn on the Sandbox.

6. Finally start testing! (This will also automatically merge `/e2e-overrides` into `/e2e`).
```
npm run test
```

**Note**: to test a single spec, please update the [Jest config (`/e2e-overrides/jest.config.json`)](/e2e-overrides/jest.config.json) before running `npm run test`:

```diff
	"testMatch": [
-		"<rootDir>/e2e/specs/**/(*.)test.js"
+		"<rootDir>/e2e/specs/foo-bar.test.js"
	],
```

## Sync with Gutenberg

As of 2018-11-23, this uses [Gutenberg 4.5.1](https://github.com/WordPress/gutenberg/releases/tag/v4.5.1) as it's the version used by the WPCOM Sandbox.

To update it as needed:

1. Run `npm update-e2e` with the tag of a new Gutenberg release (e.g. `npm update-e2e v5.0.0`).

2. Check if there are big changes between `/e2e-overrides` and the new `/e2e` folder, and update the overrides as needed. (**IMPORTANT**: keep the same folder structure!)<br>E.g. currently, most overrides are in `/support/utils.js`, but in future versions, all the utils functions will be moved into their own files.
3. Run `npm overwrite-e2e` to copy the overrides in the `/e2e` folder.
