<?php theme_include('header'); ?>
<section class="posts">
	<div class="inner">
<h1 class="search-query">You searched for &ldquo;<?php echo search_term(); ?>&rdquo;.</h1>

<?php if(has_search_results()): ?>
	<ul class="items">
		<?php $i = 0; while(search_results()): $i++; ?>
		<li>
			<article class="post">
				<h2 class="post-title clearfix">
					<a href="<?php echo article_url(); ?>" title="<?php echo article_title(); ?>" class="left"><?php echo article_title(); ?></a>
					<time class="post-time right" itemprop="datePublished" datetime="<?php echo date(DATE_W3C, article_time()); ?>"><?php echo relative_time(article_time()); ?></time>
				</h2>
			</article>
		</li>
		<?php endwhile; ?>
	</ul>
</div>
</section>
	<?php if(has_pagination()): ?>
	<nav class="pagination">
		<div class="wrap">
			<?php echo search_prev(); ?>
			<?php echo search_next(); ?>
		</div>
	</nav>
	<?php endif; ?>

<?php else: ?>
	<p class="post">Unfortunately, there's no results for &ldquo;<?php echo search_term(); ?>&rdquo;. Did you spell everything correctly?</p>
<?php endif; ?>

<?php theme_include('footer'); ?>