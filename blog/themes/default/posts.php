<?php theme_include('header'); ?>

<section class="posts">
	<?php if(has_posts()): ?>		
				<div class="inner">
					<?php while(posts()): ?>
					<article class="post" itemscope="itemscope" itemtype="http://schema.org/BlogPosting" itemprop="blogPost">
						<header class="post-header">
							<?php
							get_post_edit(); 
							?>
							<h2 class="post-title" itemprop="headline"><a href="<?php echo article_url(); ?>" title="<?php echo article_title(); ?>" rel="bookmark"><?php echo article_title(); ?></a></h2>
						</header>
						<br>
						<div class="post-content" itemprop="text">
							<?php
							echo get_snap('article', 'featured-image');
							?>
							<p>
								<?php
								echo iwrite_excerpt(strip_tags(article_markdown()));
								 ?>...
							</p>
						</div>
						<time class="post-time" itemprop="datePublished" datetime="<?php echo date(DATE_W3C, article_time()); ?>"><?php echo relative_time(article_time()); ?></time>																			
					</article>
					<?php endwhile; ?>
		<?php if(has_pagination()): ?>
		<nav class="pagination">
			<div class="wrap">
				<?php echo posts_prev(); ?>
				<?php echo posts_next(); ?>
			</div>
		</nav>
		<?php endif; ?>

	<?php else: ?>
		<p>Looks like you have some writing to do!</p>
	<?php endif; ?>

</section>

<?php theme_include('footer'); ?>