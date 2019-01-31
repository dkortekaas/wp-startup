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
    <div class="container">
        <div class="g-row g-row--reverse">
            <div class="g-column g-size-4">
                <ul class="nav-list site-footer__social-links">
                    <li>
                        <a href="https://twitter.com/ReclasseringNL" target="_blank"
                            title="Twitter van Reclassering Nederland" class="ga-twitter">
                            <svg class="icon icon-twitter icon--l icon--white">
                                <use xlink:href="#icon-twitter"></use>
                            </svg>
                        </a>
                    </li>

                    <li>
                        <a href="https://www.youtube.com/user/ReclasseringNL" target="_blank"
                            title="Youtube van Reclassering Nederland" class="ga-youtube">
                            <svg class="icon icon-youtube icon--l icon--white">
                                <use xlink:href="#icon-youtube"></use>
                            </svg>
                        </a>
                    </li>
                </ul>
            </div>
            <div class="g-column g-size-8">
                <ul class="nav-list site-footer__main-links">
                    <li><a href="/over-de-reclassering">Over de reclassering</a></li>
                    <li><a href="/ik-moet-naar-de-reclassering/veelgestelde-vragen">Veelgestelde vragen</a></li>
                    <li><a href="/contact">Contact</a></li>
                </ul>


                <ul class="nav-list site-footer__sub-links">
                    <li>© 2019 Reclassering Nederland</li>
                    <li><a href="/over-de-reclassering/disclaimer">Disclaimer</a></li>
                    <li><a href="/ik-moet-naar-de-reclassering/privacy">Privacy</a></li>
                </ul>

            </div>
        </div>
    </div>

</footer>






</div><!-- #content -->

<footer id="colophon" class="site-footer">
    <div class="site-info">
        <a href="<?php echo esc_url( __( 'https://wordpress.org/', 'wpstartup' ) ); ?>">
            <?php
				/* translators: %s: CMS name, i.e. WordPress. */
				printf( esc_html__( 'Proudly powered by %s', 'wpstartup' ), 'WordPress' );
				?>
        </a>
        <span class="sep"> | </span>
        <?php
				/* translators: 1: Theme name, 2: Theme author. */
				printf( esc_html__( 'Theme: %1$s by %2$s.', 'wpstartup' ), 'wpstartup', '<a href="https://weblogiq.nl">Weblogiq</a>' );
				?>
    </div><!-- .site-info -->
</footer><!-- #colophon -->
</div><!-- #page -->

<?php wp_footer(); ?>

</body>

</html>