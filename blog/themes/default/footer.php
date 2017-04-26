<footer class="footer">
	<div class="inner clearfix">
		<div class="left copyright">
			&copy; <?php echo date('Y'); ?>
			<?php echo site_name(); ?>.
		</div>
		<div class="right meta">
			<?php echo footer_text(); ?>
		</div>
	</div>
</footer>
</div>
<script type="text/javascript">
	var _gaq = _gaq || [];
_gaq.push(['_setAccount', '<?php echo google_analytics(); ?>']);
	_gaq.push(['_trackPageview']);
	(function() {
	var ga = document.createElement('script'); ga.type = 'text/javascript'; ga.async = true;
	ga.src = ('https:' == document.location.protocol ? 'https://ssl' : 'http://www') + '.google-analytics.com/ga.js';
	var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(ga, s);
	})();
</script>
</body>
</html>