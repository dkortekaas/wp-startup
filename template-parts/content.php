<?php
/**
 * Template part for displaying posts
 *
 * @link https://developer.wordpress.org/themes/basics/template-hierarchy/
 *
 * @package WPStartup
 */

?>

<div <?php post_class( "g-row" ); ?> id="post-<?php the_ID(); ?>">
	<article class="g-column g-size-12">

		<header class="entry-header">
			<?php
			if ( is_singular() ) :
				the_title( '<h1 class="entry-title">', '</h1>' );
			else :
				the_title( '<h2 class="entry-title"><a href="' . esc_url( get_permalink() ) . '" rel="bookmark">', '</a></h2>' );
			endif;

			if ( 'post' === get_post_type() ) :
				?>
				<div class="entry-meta">
					<?php
					wpstartup_posted_on();
					wpstartup_posted_by();
					?>
				</div>
			<?php endif; ?>
		</header>

		<?php wpstartup_post_thumbnail(); ?>

		<div class="entry-content">
			<?php
			the_content( sprintf(
				wp_kses(
					/* translators: %s: Name of current post. Only visible to screen readers */
					__( 'Continue reading<span class="screen-reader-text"> "%s"</span>', 'wpstartup' ),
					array(
						'span' => array(
							'class' => array(),
						),
					)
				),
				get_the_title()
			) );

			wp_link_pages( array(
				'before' => '<div class="page-links">' . esc_html__( 'Pages:', 'wpstartup' ),
				'after'  => '</div>',
			) );
			?>
		</div>

		<footer class="entry-footer">
			<?php wpstartup_entry_footer(); ?>
		</footer>

	</article>
</div>