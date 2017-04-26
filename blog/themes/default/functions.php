<?php
/*
 Custom theme functions
 Note: we recommend you prefix all your functions to avoid any naming
 collisions or wrap your functions with if function_exists braces.
 */
function numeral($number) {
	$test = abs($number) % 10;
	$ext = ((abs($number) % 100 < 21 and abs($number) % 100 > 4) ? 'th' : (($test < 4) ? ($test < 3) ? ($test < 2) ? ($test < 1) ? 'th' : 'st' : 'nd' : 'rd' : 'th'));
	return $number . $ext;
}

function search_class() {
	$search = search_term();
	if (!empty($search)) {
		return 'down';
	} else {
		return 'up';
	}
}

function get_post_edit() {
	if (user_authed() == true) {
		$id = article_id();
		echo '<a target="_blank" href="' . full_url() . 'admin/posts/edit/' . $id . '" class="edit-post" target="_blank">Edit</a>';
	}
}

function admin_class() {
	if (user_authed() == true) {
		return " logged_in";
	}
}

function get_site_logo() {
	$logo = site_meta('logo');
	if (empty($logo)) {
		return '<a href="' . base_url() . '" class="text">' . site_name() . '</a>';
	} else {
		return '<a href="' . base_url() . '" class="image"><img src="' . $logo . '" alt="' . site_name() . '"></a>';
	}
}

function has_commeting_system() {
	$sys = site_meta('commenting_system');
	if (!empty($sys)) {
		return true;
	} else {
		return false;
	}
}

function get_commenting_system() {
	echo site_meta('commenting_system');
}

function get_commet_count() {

}

function get_snap($type = 'article', $class = '') {
	$image = '';
	switch ($type) {
		case 'page' :
			$image = page_custom_field(91);
			break;
		default :
			$image = article_custom_field(90);
			break;
	}
	if (!empty($image)) :
		return '<img class=' . $class . ' src=' . $image . '>';
	endif;
}

function google_analytics() {
	return trim(site_meta('google_analytics', ''));
}

function footer_text() {
	$meta = trim(site_meta('footer_text'));
	if (empty($meta)) {
		return '';
	} else {
		return $meta;
	}
}

function count_words($str) {
	return count(preg_split('/\s+/', strip_tags($str), null, PREG_SPLIT_NO_EMPTY));
}

function article_word_count() {
	return count_words(article_markdown());
}

function pluralise($amount, $str, $alt = '') {
	return intval($amount) === 1 ? $str : $str . ($alt !== '' ? $alt : 's');
}

function relative_time($date) {
	if (is_numeric($date))
		$date = '@' . $date;
	$user_timezone = new DateTimeZone(Config::app('timezone'));
	$date = new DateTime($date, $user_timezone);
	// get current date in user timezone
	$now = new DateTime('now', $user_timezone);
	$elapsed = $now -> format('U') - $date -> format('U');
	if ($elapsed <= 1) {
		return 'Just now';
	}
	$times = array(31104000 => 'year', 2592000 => 'month', 604800 => 'week', 86400 => 'day', 3600 => 'hour', 60 => 'minute', 1 => 'second');
	foreach ($times as $seconds => $title) {
		$rounded = $elapsed / $seconds;
		if ($rounded > 1) {
			$rounded = round($rounded);
			return $rounded . ' ' . pluralise($rounded, $title) . ' ago';
		}
	}
}

function iwrite_excerpt($string, $word_limit = 75) {
	$words = explode(" ", $string);
	return implode(" ", array_splice($words, 0, $word_limit));
}
