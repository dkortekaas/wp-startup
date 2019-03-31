<?php
// Calling your own login css so you can style it
function wpstartup_login_css() {
	wp_enqueue_style( 
		'wpstartup_login_css', 
		get_template_directory_uri() . '/assets/css/login.css', 
		false 
	);
}

// changing the logo link from wordpress.org to your site
function wpstartup_login_url() {  return home_url(); }

// changing the alt text on the logo to show your site name
function wpstartup_login_title() { return get_option('blogname'); }

// calling it only on the login page
add_action( 'login_enqueue_scripts', 'wpstartup_login_css', 10 );
add_filter( 'login_headerurl', 'wpstartup_login_url' );
add_filter( 'login_headertitle', 'wpstartup_login_title' );