$(document).ready(function() {
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



	(function(d, s, id) {
		var js, fjs = d.getElementsByTagName(s)[0];
		if (d.getElementById(id)) return;
		js = d.createElement(s); js.id = id;
		js.src = "//connect.facebook.net/en_US/all.js#xfbml=1&appId=351107928267280";
		fjs.parentNode.insertBefore(js, fjs);
	}(document, 'script', 'facebook-jssdk'));

	!function(d,s,id){var js,fjs=d.getElementsByTagName(s)[0];if(!d.getElementById(id)){js=d.createElement(s);js.id=id;js.src="//platform.twitter.com/widgets.js";fjs.parentNode.insertBefore(js,fjs);}}(document,"script","twitter-wjs");

	(function() {
		var po = document.createElement('script'); po.type = 'text/javascript'; po.async = true;
		po.src = 'https://apis.google.com/js/plusone.js';
		var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(po, s);
	})();
});