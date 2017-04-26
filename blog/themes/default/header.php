<!doctype html>
<html lang="en">
	<head>
		<meta charset="utf-8">
		<title><?php echo page_title('Page can’t be found'); ?> - <?php echo site_name(); ?></title>

		<meta name="description" content="<?php echo site_description(); ?>">

		<link rel="stylesheet" href="<?php echo theme_url('/css/reset.css'); ?>">
		<link rel="stylesheet" href="<?php echo theme_url('/css/style.css'); ?>">		
		<link rel="alternate" type="application/rss+xml" title="RSS" href="<?php echo rss_url(); ?>">
		<link rel="shortcut icon" href="<?php echo theme_url('img/favicon.png'); ?>">

		<!--[if lt IE 9]>
			<script src="//html5shiv.googlecode.com/svn/trunk/html5.js"></script>
		<![endif]-->

		<script>var base =   '<?php echo theme_url(); ?>';</script>
		<script src="<?php echo theme_url('/js/jquery.js'); ?>"></script>		
		<script src="<?php echo theme_url('/js/core.js'); ?>"></script>

	    <meta name="viewport" content="width=device-width">
	    <meta name="generator" content="Anchor CMS">

	    <meta property="og:title" content="<?php echo site_name(); ?>">
	    <meta property="og:type" content="website">
	    <meta property="og:url" content="<?php echo current_url(); ?>">
	    <meta property="og:image" content="<?php echo theme_url('img/og_image.png'); ?>">
	    <meta property="og:site_name" content="<?php echo site_name(); ?>">
	    <meta property="og:description" content="<?php echo site_description(); ?>">

		<?php if(customised()): ?>
		    <!-- Custom CSS -->    				
<style><?php echo article_css(); ?></style>
    		<!--  Custom Javascript -->
    		<script><?php echo article_js(); ?></script>		
		<?php endif; ?>
	</head>
	<body class="<?php echo body_class(); echo admin_class(); ?>">
		<div class="main">
			<div class="inner">
				<?php if(has_menu_items()): ?>
				<nav id="mobile" role="navigation" class="nav-select">
					<ul>
						<?php while(menu_items()): ?>
						<li <?php echo(menu_active() ? 'class="active"' : ''); ?>>
							<a href="<?php echo menu_url(); ?>" title="<?php echo menu_title(); ?>">
								<?php echo menu_name(); ?>
							</a>
						</li>
						<?php endwhile; ?>
						<li>
							<form action="<?php echo search_url(); ?>" method="post">						
						<input type="search" class="search-input" name="term" placeholder="To search, type and hit enter&hellip;" value="<?php echo search_term(); ?>">						
					</form>	
						</li>
						</ul>
						</nav>
						<?php endif; ?>								
			</div>
			<header class="header">
				<div class="search-bar <?php echo search_class(); ?>">
					<div class="inner">
						<form id="search" action="<?php echo search_url(); ?>" method="post">						
						<input type="search" id="term" class="search-box" name="term" placeholder="To search, type and hit enter&hellip;" value="<?php echo search_term(); ?>">						
					</form>					
					</div>
				</div>
				<div class="inner clearfix">
					<h1 class="logo left"><?php echo get_site_logo(); ?></h1>
					
				<?php if(has_menu_items()): ?>
				<nav id="main" role="navigation" class="nav right">
					<ul>
						<?php while(menu_items()): ?>
						<li <?php echo(menu_active() ? 'class="active"' : ''); ?>>
							<a href="<?php echo menu_url(); ?>" title="<?php echo menu_title(); ?>">
								<?php echo menu_name(); ?>
							</a>
						</li>
						<?php endwhile; ?>
						<li>
							<a href="#" class="search-toggle"><img src="<?php echo theme_url('/img/search.png'); ?>"</a>
						</li>
					</ul>
				</nav>
				<?php endif; ?>					
					<a href="#" class="nav-toggle right">Menu</a>					
				</div>				
			</header>				