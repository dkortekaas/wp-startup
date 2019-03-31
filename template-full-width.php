<?php
/*
Template Name: Full Width (No Sidebar)
*/

get_header(); ?>
			
<div class="main-body" role="main">
	
	<div class="g-layout">
		<div class="g-section g-size-12">
				
			<?php if (have_posts()) : while (have_posts()) : the_post(); ?>

				<?php get_template_part( 'parts/loop', 'page' ); ?>
					
			<?php endwhile; endif; ?>							

		</div>
	</div>

</div>

<?php
get_footer();
