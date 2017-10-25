<?php  $page_title = "Minting Guide"; include ('header.php'); ?>

	<div class="row text-center">
		<img class="svg-quickstart" src="assets/img/misc/minting-guide.png" />
	</div>

	<div class="row row-nomargin">
		<div class="col-md-10 text-center">
			<h2><?php echo $Locale->getText("mintguide.title"); ?></h2>
		</div>
	</div>
	<div class="row">
		<div class="col-md-8 col-md-offset-2">
			<h1>Peercoin Client v0.4</h1>
			<ol>
				<li><?php echo $Locale->getText("mintguide.qt_step1"); ?></li>
				<li><?php echo $Locale->getText("mintguide.qt_step2"); ?></li>
				<li><?php echo $Locale->getText("mintguide.qt_step3"); ?></li>
				<li><?php echo $Locale->getText("mintguide.qt_step4"); ?></li>
			</ol>
		</div>
	</div>
</div>
<?php include ('footer.php'); ?>
