<?php
/**
 * Template part for displaying page content in page.php
 *
 * @link https://developer.wordpress.org/themes/basics/template-hierarchy/
 *
 * @package WPStartup
 */

?>

<div <?php post_class( "g-row" ); ?> id="post-<?php the_ID(); ?>">
	<article class="g-column g-size-12">

		<header>
			<?php the_title( '<h1 class="entry-title">', '</h1>' ); ?>
		</header>

		<?php wpstartup_post_thumbnail(); ?>

		<div class="entry-content">
			<?php
			the_content();

			wp_link_pages( array(
				'before' => '<div class="page-links">' . esc_html__( 'Pages:', 'wpstartup' ),
				'after'  => '</div>',
			) );
			?>
		</div>

		<?php if ( get_edit_post_link() ) : ?>
			<footer class="entry-footer">
				<?php
				edit_post_link(
					sprintf(
						wp_kses(
							/* translators: %s: Name of current post. Only visible to screen readers */
							__( 'Edit <span class="screen-reader-text">%s</span>', 'wpstartup' ),
							array(
								'span' => array(
									'class' => array(),
								),
							)
						),
						get_the_title()
					),
					'<span class="edit-link">',
					'</span>'
				);
				?>
			</footer><!-- .entry-footer -->
		<?php endif; ?>
	</article>
</div>