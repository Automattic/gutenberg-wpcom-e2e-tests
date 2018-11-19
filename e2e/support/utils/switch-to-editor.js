export async function switchToEditor( mode ) {
	await page.click(
		'.edit-post-more-menu [aria-label="Show more tools & options"]'
	);
	const [ button ] = await page.$x(
		`//button[contains(text(), '${ mode } Editor')]`
	);
	await button.click( 'button' );
}
