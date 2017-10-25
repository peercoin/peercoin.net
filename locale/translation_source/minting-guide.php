$lang['en'] += array(
	'mintguide.title' => 'Follow the guide corresponding to your Peercoin client to start minting!',
	'mintguide.qt_step1' => 'Ensure your wallet is encrypted with a good passphrase. Write this down and keep it somewhere safe; if you forget the passphrase you will lose your coins. The wallet encryption option can be found under the settings tab in the Peercoin-Qt wallet program.',
	'mintguide.qt_step2' => 'To start minting go to help -> debug window -> console and enter: <br><kbd>walletpassphrase abc 999999 true</kbd><br> where "abc" is your passphrase and "999999" is the time you want to mint for in seconds. You can change the amount of time to whatever you like, but it is usually easiest just to set it at a very high number. If your passphrase has spaces then enclose it in quotation marks.',
	'mintguide.qt_step3' => 'Clear your passphrase by pressing Ctrl-L.',
	'mintguide.qt_step4' => 'You can check you are minting by looking at the little padlock in the bottom right corner of the client. After a few moments it should become unlocked. If you hover your mouse over it, it should say "Wallet is encypted and currently unlocked for block minting only".',
);
