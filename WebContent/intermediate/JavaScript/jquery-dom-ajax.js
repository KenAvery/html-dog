/**
 * JQuery and DOM
 */

$(function() {
	$('.note').css('background', 'red').height(100);

	var currentHeight = $('.note').height(), currentColor = $('.note').css(
			'color');

	var $header = $('header'), $headerBoxes = $('.note', $header);

	console.log("Current Color: " + currentColor);
	console.log("Header Boxes: " + $headerBoxes);

	$.ajax({
		url : 'http://httpbin.org/get',
		method : 'GET',
		dataType: 'text',
		success : function(data) {
			console.log(data);
		}
	});

	$.get('http://httpbin.org/get', function(data) {
		console.log(data);
	}).fail(function() {
		console.log("FAILED GET");
	}, 'text');
	
	var jsonString = JSON.stringify({
	    make: "McLaren",
	    model: "MP4-12C",
	    miles: 5023
	})
	
	var person = {
		name : 'John',
		address : 'USA',
		phone : '555-5555'
	}

	$.post('http://httpbin.org/post', jsonString, function(data) {
		console.log(data);
	}).fail(function() {
		console.log("FAILED POST");
	}, 'text');

	$.ajax({
		url : 'http://httpbin.org/post',
		method : 'POST',
		dataType: 'text',
		data : JSON.stringify({
		    make: 'McLaren',
		    model: 'MP4-12C',
		    miles: '5023'
		}),
		success : function(data) {
			console.log(data);
		},
		error : function() {
			console.log("FAILED POST");
		}
	});

});
