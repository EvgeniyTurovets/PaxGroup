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
		$('.slider-wrap').slick();
	}
	
	if($('.s1').lenth){
		
	}
})

$(document).ready(function () {
	$('.preload').fadeOut();
})