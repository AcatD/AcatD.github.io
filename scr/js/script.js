$(document).ready(function(){

//Carousel Feedback
$('.clients__feedback').slick({
	dots: false, 
	infinite: true,
	speed: 300,
	fade: true,
	cssEase: 'ease-in',
	autoplay: true,
	autoplayspeed: 10000,
	prevArrow: $('.clients__feedback_arrowleft'),
	nextArrow: $('.clients__feedback_arrowright'),
	accessibility: false
});

function toggleSlide(item) {
	$(item).each(function(i) {
		$(this).on('click', function(e) {
			e.preventDefault();
			$('.catalog-item__content').eq(i).toggleClass('catalog-item__content_active');
			$('.catalog-item__list').eq(i).toggleClass('catalog-item__list_active');
		});
	});
}; //jshint ignore: line

//page up button
$(window).scroll(function() {
	if ($(this).scrollTop() > 1600) {
		$('.iconup').fadeIn();
	} else {
		$('.iconup').fadeOut();
	}
});

$("a[href=#up]").click(function(){
	const _href = $(this).attr("href");
	$("html, body").animate({scrollTop: $(_href).offset().top+"px"});
	return false;
});

new WOW().init();




//Modal
$('[data-modal=modal]').on('click', function() {
	$('.overlay, #details').fadeIn('slow');
});

$('.modal__close').on('click', function() {
	$('.overlay, #details, #policy').fadeOut('slow');
});

$('.footer__wrapper_policy').on('click', function(){
	$('.overlay, #policy').fadeIn('slow');
});



});