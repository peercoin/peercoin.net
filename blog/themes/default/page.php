<?php theme_include('header'); ?>

		<section class="posts">
			<div class="single-page inner">
			<div class="post">
			<header class="post-header">
							<h2 class="post-title" itemprop="headline"><a href="<?php echo page_url(); ?>" title="<?php echo page_title(); ?>" rel="bookmark"><?php echo page_title(); ?></a></h2>							
						</header>
						<div class="post-content" itemprop="text">
							<?php echo get_snap('page', 'featured-image'); ?>							
							<p>
								<?php
								echo page_content();
								 ?>
							</p>
						</div>
						</div>
						</div>
		</section>

<?php theme_include('footer'); ?>