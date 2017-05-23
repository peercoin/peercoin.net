<!-- Grey Wrap / Site Stats -->
	<!-- FOOTER -->
	<footer class="footer" style="padding: 0px 0 10px;">
		<div class="container">
<!--
			<div class="row">
				<div class="col-lg-3">
					<h2><?php echo $Locale->getText("footer.links"); ?></h2>
					<ul>
						<li><a href="https://github.com/ppcoin/ppcoin">Source Code (Github)</a></li>
						<li><a href="https://github.com/ppcoin/ppcoin/wiki">Wiki</a></li>
						<li><a href="https://talk.peercoin.net">Forum</a></li>
						<li><a href="http://peercoinmyths.com/">Myths</a></li>
					</ul>
				</div>
				<div class="col-lg-3">
					<h2><?php echo $Locale->getText("footer.tools"); ?></h2>
					<ul>
						<li><a href="http://wallet.peercointalk.org/">Wallet Generator (Beta!)</a></li>
						<li><a href="http://ppc.blockr.io/">Blockr.io - Block Explorer</a></li>
						<li><a href="http://bitinfocharts.com/comparison/hashrate-ppc.html">Network Statistics</a></li>
						<li><a href="http://www.coinwarz.com/calculators/peercoin-mining-calculator/">Mining Calculator</a></li>
					</ul>
				</div>

				<div class="col-lg-3">
					<h2><?php echo $Locale->getText("footer.exchanges"); ?></h2>
					<ul>
						<li><a href="http://www.btc38.com/trade.html?btc38_trade_coin_name=ppc">BTC38</a></li>
						<li><a href="https://btc-e.com/exchange/ppc_btc/">BTC-E</a></li>
						<li><a href="https://coinomat.com/#BTC/PPC">Coinomat</a></li>
						<li><a href="https://www.cryptsy.com/markets/view/28">Cryptsy</a></li>
						<li><a href="https://www.vaultofsatoshi.com/">Vault of Satoshi</a></li>
					</ul>
				</div>

				<div class="col-lg-3">
					<h2><?php echo $Locale->getText("footer.mining"); ?></h2>
					<ul>
						<li><a href="https://peercoin.blockmines.com/">Blockmines</a></li>
						<li><a href="https://peercoin.ecoining.com/">Ecoining Pool</a></li>
						<li><a href="https://www.coinotron.com/">Coinotron</a></li>
						<li><a href="https://ppcoin.d7.lt/">D7 Pool</a></li>
					</ul>
				</div>
			</div><!-- /row -->

			<div class="row">
				<div class="col-lg-12 social-icons">
			        <a target="_blank" href="https://talk.peercoin.net">
			              <img src="assets/img/icons/social-peercointalk.png" alt="Join us on the Peercoin Forum">
			        </a>
			        <a target="_blank" href="https://www.facebook.com/Peercoin">
			              <img src="assets/img/icons/social-fb.png" alt="Visit us on Facebook">
			        </a>
			        <a target="_blank" href="https://plus.google.com/+PeercoinNet">
			              <img src="assets/img/icons/social-google.png" alt="Visit us on Google+">
			        </a>
			            <a target="_blank" href="https://www.reddit.com/r/peercoin">
			              <img src="assets/img/icons/social-reddit.png" alt="Reddit">
			        </a>
			            <a target="_blank" href="https://twitter.com/PeercoinPPC">
			              <img src="assets/img/icons/social-twitter.png" alt="Follow us on Twitter">
			        </a>
			            <a target="_blank" href="https://www.youtube.com/user/peercoin">
			              <img src="assets/img/icons/social-yt.png" alt="Watch videos on YouTube">
			        </a>
			            <a target="_blank" href="http://peer4commit.com">
			              <img src="assets/img/icons/social-peer4commit.png" alt="Peer4commit">
			        </a>
			            <a target="_blank" href="http://www.peerbox.me">
			              <img src="assets/img/icons/social-peerbox.png" alt="Peerbox">
			        </a>
			            <a target="_blank" href="https://github.com/peercoin">
			              <img src="assets/img/icons/social-github.png" alt="Source code on GitHub">
			        </a>
			            <a target="_blank" href="https://www.transifex.com/projects/p/website-ppc">
			              <img src="assets/img/icons/social-transifex.png" alt="Translate website on Transifex">
			        </a>
	          	</div>
          	</div><!-- /row -->

			<div class="row">
				<div id="footer-language-bar" class="col-lg-12">
	            	<?php
		            	foreach($Locale->getLanguages() as $language_code => $language_text):
			            	if($Locale->locale_code!=$language_code){
			            		$url_loc = substr($_SERVER['PHP_SELF'], 0, strpos($_SERVER['PHP_SELF'], '.php')+4);
			            		echo "<a href=\"".$url_loc."?locale=".$language_code."\">".$language_text."</a>";
			            	}
		            	endforeach;
	            	?>
	        	</div>
			</div><!-- /row -->

		</div><!-- /container -->
	</footer>



    <!-- Bootstrap core JavaScript
    ================================================== -->
    <!-- Placed at the end of the document so the pages load faster -->
    <script src="//ajax.googleapis.com/ajax/libs/jquery/1.10.2/jquery.min.js" integrity="sha384-aBL3Lzi6c9LNDGvpHkZrrm3ZVsIwohDD7CDozL0pk8FwCrfmV7H9w8j3L7ikEv6h" crossorigin="anonymous"></script>
    <script src="//netdna.bootstrapcdn.com/bootstrap/3.0.0/js/bootstrap.min.js" integrity="sha384-Zzs5x1/YUvlxpCu06c197tRCubLCMA7pCoHbZeoZuz/oEgYD6NVmvLzDSKYBoc3J" crossorigin="anonymous"></script>
    <script type="text/javascript">
        var secondText = "<?php echo $Locale->getText("second_ago"); ?>";
        var secondsText = "<?php echo $Locale->getText("seconds_ago"); ?>";
    </script>
	<script src="assets/js/peercoin.js"></script>
	<script src="assets/js/grids.min.js"></script>

	<!-- Drop down menu in minting -->
	<script type='text/javascript'>
		$(document).ready(function() {
			$('.collapse').on('shown.bs.collapse', function() {
				$(this).parent().find(".glyphicon-down").removeClass("glyphicon-down").addClass("glyphicon-up");
			}).on('hidden.bs.collapse', function() {
				$(this).parent().find(".glyphicon-up").removeClass("glyphicon-up").addClass("glyphicon-down");
			});
		});

		$(window).load(function() {
			$('.wallet-entry').responsiveEqualHeightGrid();
			setTimeout(function() { $('.wallet-entry > div').addClass('wallet-entry-bottom'); }, 500);
		});

		$(window).resize(function() {
			$('.wallet-entry > div').removeClass('wallet-entry-bottom');
			$('.wallet-entry').responsiveEqualHeightGrid();
			setTimeout(function() { $('.wallet-entry > div').addClass('wallet-entry-bottom'); }, 500);
		});
	</script>

	<!-- Only for the exchange page -->
	<?php if(isset($exchange_page)) { ?>
	<script>
		$(document).ready(function() {
			$(".exchange-button").tooltip();
			$(".exchange-button").click(function(e) {
				e.preventDefault();
				$(".exchange-button").removeClass("active");
				$(this).addClass("active");
				$(".exchange-info").removeClass("active");
				$("#exchange-"+$(this).data("exchange")).addClass("active");
			});
		});
	</script>
	<?php } ?>
	
	<!-- Peercoin greenbar chat buttons -->
	<script>
		(function(e){function d(){var b=document.createElement("STYLE");b.innerHTML="\n        #"+a+".PPC-Injector {\n          -webkit-user-select: none;\n          -moz-user-select: none;\n          -ms-user-select: none;\n          user-select: none;\n          box-sizing: border-box;\n          position: fixed;\n          bottom: 0;\n          left: 0;\n          z-index: 999999;\n          width: 100%;\n          padding: 15px;\n          font-size: 15px;\n          text-align: center;\n          border-top: 1px solid #308d43;\n          text-shadow: 0 1px 0 #308d43;\n          background: #3cb054;\n          color: #fff;\n          transition: all 0.5s ease-in-out;\n          transform: translate3d(0, 100%, 0);\n        }\n\n        #"+
a+".PPC-Injector.status--active {\n          transform: translate3d(0, 0, 0);\n        }\n\n        #"+a+".PPC-Injector h4 {\n          font-size: 1em;\n          margin: 0 0 10px;\n          padding: 0;\n          font-weight: normal;\n        }\n\n        #"+a+" .PPC-Injector__button {\n          display: inline-block;\n          border: 1px solid #308d43;\n          border-radius: 4px;\n          padding: 0.8em 1.5em;\n          font-size: 14px;\n          width: 150px;\n          text-align: center;\n          font-weight: bold;\n          color: #fff;\n        }\n\n        #"+
a+" .PPC-Injector__button svg {\n          display: inline-block;\n          height: 21px;\n          float: left;\n          margin-top: -2px;\n        }\n\n        #"+a+" .PPC-Injector__button:hover {\n          background: #308d43;\n        }\n\n        #"+a+" .PPC-Injector__button:last-child {\n          margin-left: 10px;\n        }\n\n        #"+a+" .PPC-Injector__close {\n          position: absolute;\n          top: 10px;\n          right: 10px;\n          width: 30px;\n          height: 30px;\n          border-radius: 4px;\n          background: #308d43;\n          opacity: 0.6;\n          display: flex;\n          align-items: center;\n          justify-content: center;\n          cursor: pointer;\n        }\n\n        #"+
a+" .PPC-Injector__close:hover {\n          opacity: 0.8;\n        }\n\n        #"+a+" .PPC-Injector__close:active {\n          opacity: 1;\n        }\n\n        #"+a+" .PPC-Injector__close svg {\n          width: 12px;\n          height: 12px;\n        }\n\n        @media screen and (max-width: 600px) {\n          #"+a+".PPC-Injector {\n            padding: 5px 5px 10px;\n          }\n\n          #"+a+".PPC-Injector h4 {\n            padding: 30px;\n            font-size: 1.2em;\n          }\n\n          #"+
a+" .PPC-Injector__close {\n            background: none;\n          }\n\n          #"+a+" .PPC-Injector__button {\n            width: 46%;\n            max-width: 150px;\n          }\n        }\n      ";document.head.appendChild(b)}function c(){localStorage.setItem("PPC-Injector--USER-INTERACTED","yes");b.children[0].classList.remove("status--active")}var a="INJECTOR-"+Math.floor(1E9*Math.random()),b;return function(){localStorage.getItem("PPC-Injector--USER-INTERACTED")||(d(),b=document.createElement("DIV"),
b.innerHTML='\n        <div id="'+a+'" class="PPC-Injector">\n          <div class="PPC-Injector__close" id="'+a+'-close">\n            \n      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 25 25" preserveAspectRatio="xMidYMid">\n        <path fill-rule="evenodd" fill="rgb(255, 255, 255)"\n       d="M25.521,23.400 L22.692,26.228 L12.793,16.328 L3.600,25.521 L0.772,22.692 L9.964,13.500 L0.772,4.308 L3.600,1.479 L12.793,10.672 L22.692,0.772 L25.521,3.601 L15.621,13.500 L25.521,23.400 Z"/>\n      </svg>\n    \n          </div>\n          <h4><?php echo $Locale->getText("footer.greenbar"); ?></h4>\n          <a href="https://t.me/peercoin" id="'+
a+'-telegram" class="PPC-Injector__button">\n      <svg\n       xmlns="http://www.w3.org/2000/svg" viewBox="0 0 45 45" preserveAspectRatio="xMidYMid">\n        <path fill-rule="evenodd" fill="rgb(255, 255, 255)"\n       d="M22.500,0.000 C10.074,0.000 -0.000,10.074 -0.000,22.500 C-0.000,34.926 10.074,45.000 22.500,45.000 C34.926,45.000 45.000,34.926 45.000,22.500 C45.000,10.074 34.926,0.000 22.500,0.000 ZM29.429,33.205 C29.429,33.205 28.867,34.610 27.322,33.935 L21.603,29.551 L21.604,29.552 L17.936,32.896 C17.936,32.896 17.649,33.113 17.335,32.977 L18.076,26.657 C18.076,26.657 28.362,17.411 28.783,17.018 C29.205,16.624 29.064,16.540 29.064,16.540 C29.092,16.062 28.305,16.540 28.305,16.540 L14.676,25.196 L8.999,23.284 C8.999,23.284 8.128,22.975 8.043,22.301 C7.959,21.627 9.027,21.261 9.027,21.261 L31.593,12.409 C31.593,12.409 33.448,11.594 33.448,12.943 L29.429,33.205 Z"/>\n      </svg>\n     Telegram</a>\n          <a href="https://peercoin.chat/channel/general/" id="'+
a+'-rocketchat" class="PPC-Injector__button">\n      <svg\n       xmlns="http://www.w3.org/2000/svg" viewBox="0 0 53 45" preserveAspectRatio="xMidYMid">\n        <path fill-rule="evenodd" fill="rgb(255, 255, 255)"\n       d="M52.999,22.537 C52.999,25.192 52.203,27.739 50.632,30.106 C49.222,32.232 47.246,34.112 44.760,35.698 C39.959,38.757 33.650,40.442 26.995,40.442 C24.772,40.442 22.581,40.254 20.456,39.883 C19.137,41.115 17.594,42.223 15.960,43.099 C7.234,47.319 -0.002,43.198 -0.002,43.198 C-0.002,43.198 6.726,37.683 5.632,32.848 C2.622,29.869 0.991,26.276 0.991,22.536 C0.991,22.523 0.991,22.512 0.991,22.500 C0.991,22.488 0.991,22.476 0.991,22.464 C0.991,18.724 2.622,15.131 5.632,12.152 C6.726,7.317 -0.002,1.802 -0.002,1.802 C-0.002,1.802 7.234,-2.319 15.960,1.902 C17.594,2.777 19.137,3.885 20.456,5.117 C22.581,4.745 24.772,4.558 26.995,4.558 C33.650,4.558 39.959,6.244 44.760,9.303 C47.246,10.889 49.222,12.770 50.632,14.895 C52.203,17.262 52.999,19.808 52.999,22.464 C52.999,22.476 52.999,22.489 52.999,22.501 C52.999,22.513 52.999,22.525 52.999,22.537 ZM26.995,8.313 C14.672,8.313 4.681,14.680 4.682,22.536 C4.682,25.958 6.579,29.099 9.739,31.552 C10.283,36.669 7.742,39.775 6.027,41.613 C11.300,42.944 16.728,38.826 19.196,35.864 C21.623,36.441 24.251,36.758 26.995,36.758 C39.318,36.758 49.309,30.390 49.309,22.536 C49.309,14.681 39.318,8.313 26.995,8.313 ZM37.301,25.951 C35.664,25.951 34.337,24.627 34.337,22.993 C34.337,21.360 35.664,20.035 37.301,20.035 C38.938,20.035 40.265,21.360 40.265,22.993 C40.265,24.627 38.938,25.951 37.301,25.951 ZM26.995,25.951 C25.358,25.951 24.031,24.627 24.031,22.993 C24.031,21.360 25.358,20.035 26.995,20.035 C28.632,20.035 29.959,21.360 29.959,22.993 C29.959,24.627 28.632,25.951 26.995,25.951 ZM16.689,25.951 C15.052,25.951 13.725,24.627 13.725,22.993 C13.725,21.360 15.052,20.036 16.689,20.036 C18.326,20.036 19.653,21.360 19.653,22.993 C19.653,24.627 18.326,25.951 16.689,25.951 Z"/>\n      </svg>\n     Web Chat</a>\n        </div>\n      ',
document.body.appendChild(b),document.getElementById(a+"-close").addEventListener("click",c),document.getElementById(a+"-telegram").addEventListener("click",c),document.getElementById(a+"-rocketchat").addEventListener("click",c),setTimeout(function(){b.children[0].classList.add("status--active")},3500))}()})(window);
	</script>
  </body>
</html>
