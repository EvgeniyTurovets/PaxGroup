$(function () {
	
	let myFullpage = new fullpage('#full',{
		responsiveWidth: 992,
		scrollingSpeed: 1200,
	});

	function destroyFullpage(){
		if($(window).width() < 992){
			myFullpage.destroy('all');
		}
	}
	
	$(window).resize(function(){
		destroyFullpage()
	})
	destroyFullpage()

	$('.arr-d').click(function () {
		myFullpage.moveSectionDown();
		myFullpage.fitToSection();

	})
	$('.arr-up').click(function () {
		myFullpage.moveSectionUp();
	})
	
	$('#main').scroll(function() {

		var target = $(this).scrollTop();

		if($(window).width() < 992){
			if(target == 0) {

				$('#menu').removeClass('white')
	
			} else {
	
				$('#menu').addClass('white')
	
			}
		}
	
	});

	$('.burger').click(function(){
		$('#menu').toggleClass('open')
		$('html').toggleClass('hidden')
	})

	if($('.slider').length){
		$('.slider-wrap').slick({
			arrows: false,
			dots: true,
			fade: true
		});
	}
	
	
	$('ul.tabs__caption').on('click', 'li:not(.active)', function() {
	    $(this)
	    .addClass('active').siblings().removeClass('active')
	    .closest('div.tabs').find('div.tabs__content').hide().eq($(this).index()).fadeIn();
	});

	$('.change-tabs').on('click', 'li:not(.active)', function() {
	    $(this)
	    .addClass('active').siblings().removeClass('active')
	    .closest('.double-tabs').find('div.tabs').hide().eq($(this).index()).fadeIn();
	});
	
})

$(document).ready(function () {
	$('.preload').fadeOut();
})