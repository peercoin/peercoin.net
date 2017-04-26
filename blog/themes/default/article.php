<?php theme_include('header'); ?>
<section class="posts">
	<div class="single-post inner">	
<article class="post" itemscope="itemscope" itemtype="http://schema.org/BlogPosting" itemprop="blogPost" id="article-<?php echo article_id(); ?>">
						<header class="post-header">
							<?php
							get_post_edit(); 
							?>
							<h2 class="post-title" itemprop="headline"><a href="<?php echo article_url(); ?>" title="<?php echo article_title(); ?>" rel="bookmark"><?php echo article_title(); ?></a></h2>					
						</header>
						<div class="post-content" itemprop="text">
							<?php
							echo get_snap('article', 'post-image');
							?>							
							<p>
								<?php
								echo article_markdown();
								 ?>
							</p>

						</div>
						<time class="post-time" itemprop="datePublished" datetime="<?php echo date(DATE_W3C, article_time()); ?>"><?php echo relative_time(article_time()); ?></time>																			
					</article>
					</div>
					</div>
					</section>
		<?php if(comments_open()): ?>		
			<?php if(has_commeting_system() == true){ ?>
				<section class="comments system">
				<?php get_commenting_system(); ?>
				</section>
			<?php }else{ ?>			
			<div class="comment-section inner">
			<?php if(has_comments()): ?>
			<ul class="commentlist">
				<?php while(comments()): ?>
				<li class="comment" id="comment-<?php echo comment_id(); ?>">
					<div class="wrap">
						<div class="comment-head clearfix">
						<h2><?php echo comment_name(); ?></h2><time><?php echo relative_time(comment_time()); ?></time>			
						</div>			
						<div class="content">
							<?php echo comment_text(); ?>
						</div>
					</div>
				</li>
				<?php endwhile; ?>
			</ul>
			<?php endif; ?>
			<form id="comment" class="commentform wrap" method="post" action="<?php echo comment_form_url(); ?>#comment">
				<h3 class="commentform-title">Add Comment</h3>
				<?php echo comment_form_notifications(); ?>

								
					<?php echo comment_form_input_name('placeholder="Your name"'); ?>
									<?php echo comment_form_input_email('placeholder="Your email (won’t be published)"'); ?>
									<?php echo comment_form_input_text('placeholder="Your comment"'); ?>
									<?php echo comment_form_button("Comment"); ?>
				
			</form>
</div>
<?php } ?>
		</section>
		<?php endif; ?>

<?php theme_include('footer'); ?>