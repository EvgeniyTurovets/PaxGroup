$(function () {
	var slideIndexBis = 1;
	var sliding = false;
	let myFullpage = new fullpage('#full')

	$('.arr-d').click(function () {
		myFullpage.moveSectionDown();
	})
	$('.arr-up').click(function () {
		myFullpage.moveSectionUp();
	})
})
$(document).ready(function () {
	$('.preload').fadeOut();
})