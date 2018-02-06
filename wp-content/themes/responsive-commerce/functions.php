<?php

/**
 * Load css files.
 * @return [type] [description]
 */
function responsive_commerce_enqueue_style() {
	// Load main css file of parent theme.
    wp_enqueue_style( 'di-business-style-default', get_template_directory_uri() . '/style.css' );

    // Load this child theme css after all parent css files.
    wp_enqueue_style( 'responsive-commerce-style',  get_stylesheet_directory_uri() . '/style.css', array( 'bootstrap', 'font-awesome', 'di-business-style-default', 'di-business-style-core', 'di-business-style-woo' ), wp_get_theme()->get('Version'), 'all');
}
add_action( 'wp_enqueue_scripts', 'responsive_commerce_enqueue_style' );

