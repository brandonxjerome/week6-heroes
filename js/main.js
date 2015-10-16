$(document).ready(function(){

	$('img[alt="Batman"]').addClass('shown');
	$('.name').text('batman');


});

$('.next').click(function(){

	$('img[alt="Batman"]').removeClass('shown');
	$('img[alt="Batman"]').next().addClass('shown');
	$('.name').text('captain america');

});

