/**
 * Variables JS
 */

(function() {
	var init = function() {
		var surname = prompt('Greetings friend, may I enquire as to your surname?');
		var age = prompt('Greetings friend, may I enquire as to your age?');
		
		document.getElementById("name").innerHTML = surname;
		document.getElementById("age").innerHTML = age;
	};
	window.addEventListener('load', init, false);
})();
