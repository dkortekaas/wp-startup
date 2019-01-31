<?php
/**
 * The header for our theme
 *
 * This is the template that displays all of the <head> section and everything up until <div id="content">
 *
 * @link https://developer.wordpress.org/themes/basics/template-files/#template-partials
 *
 * @package WPStartup
 */

?>
<!doctype html>
<html <?php language_attributes(); ?>>

<head>
    <meta charset="<?php bloginfo( 'charset' ); ?>">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link rel="profile" href="https://gmpg.org/xfn/11">

    <?php wp_head(); ?>
</head>

<body <?php body_class(); ?> >

    <header class="site-header" role="banner">
        <div class="container">
            <a href="<?php echo esc_url( home_url( '/' ) ); ?>" rel="home" class="site-logo">
                <?php
			the_custom_logo();
			?>
            </a>
			<?php
				wpstartup_top_nav(); ?>
        </div>
    </header>

    <nav class="site-nav js-load-siteNav" role="navigation">
        <div class="container">
            <div class="site-nav__menu site-nav__panel js-siteNav-panel" data-level="1">
                <a href="/" class="site-logo">
				<?php
				the_custom_logo();
				?>
                </a>
				<?php wpstartup_main_nav(); ?>
            </div>
        </div>
        <div class="site-nav__search site-nav__panel js-siteNav-panel" data-slide-direction="right">
            <div class="container">
                Searchform

            </div>
        </div>

    </nav>

	<main class="site-main" role="main" itemscope itemprop="mainContentOfPage">