<?php
function site_scripts() {
        
    // Adding scripts file in the footer
    wp_enqueue_script( 'main', get_template_directory_uri() . '/assets/scripts/scripts.min.js', array( 'jquery' ), filemtime(get_template_directory() . '/assets/scripts'), true );
   
    // Register main stylesheet
    wp_enqueue_style( 'main', get_template_directory_uri() . '/assets/css/main.css', array(), filemtime(get_template_directory() . '/assets/css'), 'all' );

    // Comment reply script for threaded comments
    if ( is_singular() AND comments_open() AND (get_option('thread_comments') == 1)) {
      wp_enqueue_script( 'comment-reply' );
    }
}
add_action('wp_enqueue_scripts', 'site_scripts', 999);
