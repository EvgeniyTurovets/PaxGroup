$(function () {

	let myFullpage = new fullpage('#full',{
		responsiveWidth: 992,
	});

	function destroyFullpage(){
		if($(window).width() < 992){
			myFullpage.destroy('all');
			console.log('1')
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
	
	$(window).scroll(function() {

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

	$('.slider-wrap').slick();

})

$(document).ready(function () {
	$('.preload').fadeOut();
})