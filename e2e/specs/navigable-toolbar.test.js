/**
 * External dependencies
 */
import { forEach } from 'lodash';

/**
 * Internal dependencies
 */
import { newPost, pressWithModifier } from '../support/utils';

describe( 'block toolbar', () => {
	forEach( {
		unified: true,
		contextual: false,
	}, ( isUnifiedToolbar, label ) => {
		beforeEach( async () => {
			await newPost();

			await page.evaluate( ( _isUnifiedToolbar ) => {
				const { select, dispatch } = wp.data;
				const isCurrentlyUnified = select( 'core/edit-post' ).isFeatureActive( 'fixedToolbar' );
				if ( isCurrentlyUnified !== _isUnifiedToolbar ) {
					dispatch( 'core/edit-post' ).toggleFeature( 'fixedToolbar' );
				}
			}, isUnifiedToolbar );
		} );

		const isInRichTextEditable = () => page.evaluate( () => (
			document.activeElement.classList.contains( 'editor-rich-text__tinymce' )
		) );

		const isInBlockToolbar = () => page.evaluate( () => (
			!! document.activeElement.closest( '.editor-block-toolbar' )
		) );

		describe( label, () => {
			it( 'navigates in and out of toolbar by keyboard (Alt+F10, Escape)', async () => {
				// Assumes new post focus starts in title. Create first new
				// block by ArrowDown.
				await page.keyboard.press( 'ArrowDown' );

				// [TEMPORARY]: A new paragraph is not technically a block yet
				// until starting to type within it.
				await page.keyboard.type( 'Example' );

				// Upward
				await pressWithModifier( 'alt', 'F10' );
				expect( await isInBlockToolbar() ).toBe( true );

				// Downward
				await page.keyboard.press( 'Escape' );
				expect( await isInRichTextEditable() ).toBe( true );
			} );
		} );
	} );
} );
