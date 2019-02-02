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

<body <?php body_class(); ?>>

    <header class="site-header">
        <div class="site-container">

            <div class="site-nav">
                <a href="<?php echo esc_url( home_url( '/' ) ); ?>" rel="home" class="site-logo" title="Terug naar home">
                    <?php the_custom_logo(); ?>
                </a>
                <nav role="navigation">
                    <div class="site-nav__bar">
                        <button class="site-nav__hamburger hamburger hamburger--slider hidden-l" type="button"
                            aria-label="Menu" aria-controls="site-nav">
                            <span class="hamburger-box">
                                <span class="hamburger-inner"></span>
                            </span>
                        </button>
                    </div>
                    <div class="site-nav__container site-nav__overflow" id="site-nav">
                        <?php wpstartup_main_nav(); ?>
                    </div>
                </nav>


            </div>
        </div>
    </header>

    <main class="site-main" role="main" itemscope itemprop="mainContentOfPage">