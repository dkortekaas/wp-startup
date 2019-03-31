<?php
/**
 * The template for displaying the footer
 *
 * Contains the closing of the #content div and all content after.
 *
 * @link https://developer.wordpress.org/themes/basics/template-files/#template-partials
 *
 * @package WPStartup
 */

?>

</main>

<footer class="site-footer">
    <div class="site-container">
        <div class="g-row g-row--reverse">
            <div class="g-column g-size-4">
                <ul class="nav-list site-footer__social-links">
                    <li>
                        <a href="#" target="_blank"
                            title="" class="ga-twitter">
                            <i class="fab fa-twitter-square"></i>
                        </a>
                    </li>

                    <li>
                        <a href="#" target="_blank"
                            title="" class="ga-youtube">
                            <i class="fab fa-youtube-square"></i>
                        </a>
                    </li>
                </ul>
            </div>
            <div class="g-column g-size-8">
                <ul class="nav-list site-footer__main-links">
                    <li><a href="#">Link</a></li>
                    <li><a href="#">Link</a></li>
                    <li><a href="#">Link</a></li>
                </ul>

                <ul class="nav-list site-footer__sub-links">
                    <li>© 2019 
                        <?php printf( esc_html__( 'Copyright %s', 'textdomain' ), get_bloginfo ( 'name' ) ); ?>
                    </li>
                    <li><a href="#">Link</a></li>
                    <li><a href="#">Link</a></li>
                </ul>

            </div>
        </div>
    </div>

</footer>

<?php wp_footer(); ?>

</body>

</html>