<?php
add_action( 'init', 'my_theme_enqueue_styles' );
function my_theme_enqueue_styles() {
	wp_enqueue_style(	'parent-style', get_template_directory_uri() . '/style.css'	);
	wp_enqueue_style(	'main-style', get_stylesheet_directory_uri() . '/style.css'	);
	wp_enqueue_scripts( 'main-js', get_stylesheet_directory_uri() . '/scripts/scripts.js');
}
?>