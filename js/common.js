$(document).ready(function() {
	$('nav').delay(800).slideDown(400, function() {
		$('header').delay(300).fadeIn(600, function() {
			$('.upcoming-event').slideDown(600, function() {
				$('.main').fadeIn(800, function() {
					$('.section-container').each(function(i) {
						var position = $(this).position();
						$(this).scrollspy({
							min: position.top,
							max: position.top + $(this).height(),
							onEnter: function(element, position) {
								$('nav li a').removeClass('current');
								$('nav li.nav-'+element.id+' a').addClass('current');
							},
							onLeave: function(element, position) {
								$('nav li.nav-'+element.id+' a').removeClass('current');
							}
						});
					});
				});
				$('footer').fadeIn(600);
			});
		});
	});

	// Facebook
	(function(d, s, id) {
		var js, fjs = d.getElementsByTagName(s)[0];
		if (d.getElementById(id)) return;
		js = d.createElement(s); js.id = id;
		js.src = "//connect.facebook.net/en_US/all.js#xfbml=1&appId=351107928267280";
		fjs.parentNode.insertBefore(js, fjs);
	}(document, 'script', 'facebook-jssdk'));

	// Twitter
	!function(d,s,id){var js,fjs=d.getElementsByTagName(s)[0];if(!d.getElementById(id)){js=d.createElement(s);js.id=id;js.src="//platform.twitter.com/widgets.js";fjs.parentNode.insertBefore(js,fjs);}}(document,"script","twitter-wjs");

	// Google+
	window.___gcfg = {lang: 'en'};
	(function() {
		var po = document.createElement("script");
		po.type = "text/javascript"; po.async = true; po.src = "https://apis.google.com/js/plusone.js";
		var s = document.getElementsByTagName("script")[0]; s.parentNode.insertBefore(po, s);
	})();
});