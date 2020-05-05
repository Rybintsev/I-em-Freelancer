$(document).ready(function() {
	$('.menu__burger').on('click', function() {
		$('.menu__list,.menu__burger').toggleClass('active');
	}),
	$('a').on('click', function() {
		var elementClick = $(this).attr('href');
		var destination = $(elementClick).offset().top;

		$('html,body').animate({ scrollTop: $(elementClick).offset().top}, 900);
	}),
	$('.bot-arrow').on('click', function() {
		$('html,body').animate({scrollTop: 0}, 900);
	});
});

$(window).on('scroll', function() {
	if($(window).scrollTop() >= 500) {
		$('.bot-arrow').fadeIn();
	} else {
		$('.bot-arrow').fadeOut();
	}
});