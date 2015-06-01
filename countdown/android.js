$(document).ready(function( $ ) {
	var now = new Date();
	var countTo = new Date('2015-09-01T12:00:00.000Z');
	$('.timer').countdown(countTo, function(event) {
		$(this).find('.days').text(event.offset.totalDays);
		$(this).find('.hours').text(event.offset.hours);
		$(this).find('.minutes').text(event.offset.minutes);
		$(this).find('.seconds').text(event.offset.seconds);
	});
});	