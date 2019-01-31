<?php
/**
 * WPStartup functions and definitions
 *
 * @link https://developer.wordpress.org/themes/basics/theme-functions/
 *
 * @package WPStartup
 */


// Theme support options
require_once(get_template_directory().'/functions/theme-support.php');

// WP Head and other cleanup functions
require_once(get_template_directory().'/functions/cleanup.php');

// Register scripts and stylesheets
require_once(get_template_directory().'/functions/enqueue-scripts.php');

// Register custom menus and menu walkers
require_once(get_template_directory().'/functions/menu.php');

// Register sidebars/widget areas
require_once(get_template_directory().'/functions/sidebar.php');

// Makes WordPress comments suck less
require_once(get_template_directory().'/functions/comments.php');

// Replace 'older/newer' post links with numbered navigation
require_once(get_template_directory().'/functions/page-navi.php');

// Adds site styles to the WordPress editor
// require_once(get_template_directory().'/functions/editor-styles.php');

// Remove Emoji Support
// require_once(get_template_directory().'/functions/disable-emoji.php');

// Related post function - no need to rely on plugins
// require_once(get_template_directory().'/functions/related-posts.php');

// Use this as a template for custom post types
// require_once(get_template_directory().'/functions/custom-post-type.php');

// Customize the WordPress login menu
require_once(get_template_directory().'/functions/login.php');

// Customize the WordPress admin
require_once(get_template_directory().'/functions/admin.php');


/**
 * Implement the Custom Header feature.
 */
require_once(get_template_directory().'/functions/custom-header.php');

/**
 * Custom template tags for this theme.
 */
require_once(get_template_directory().'/functions/template-tags.php');

/**
 * Functions which enhance the theme by hooking into WordPress.
 */
require_once(get_template_directory().'/functions/template-functions.php');

/**
 * Customizer additions.
 */
require_once(get_template_directory().'/functions/customizer.php');

/**
 * Load Jetpack compatibility file.
 */
if ( defined( 'JETPACK__VERSION' ) ) :
	require_once(get_template_directory().'/functions/jetpack.php');
endif;

/**
 * Load WooCommerce compatibility file.
 */
if ( class_exists( 'WooCommerce' ) ) :
	require_once(get_template_directory().'/functions/woocommerce.php');
endif;
