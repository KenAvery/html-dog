/**
 * Do the Math
 */

(function() {
	var init = function() {
		var calcBtn = document.getElementById('calculate');

		var calculate = function() {

			var a = document.getElementById("a").value;
			var b = document.getElementById("b").value;
			
			var c = Number(a) + Number(b);
			
			document.getElementById("c").innerHTML = a + " + " + b + " = " + (Number(a) + Number(b));
			document.getElementById("d").innerHTML = a + " * " + b + " = " + (Number(a) * Number(b));
			document.getElementById("e").innerHTML = a + " / " + b + " = " + (Number(a) / Number(b));
		};
		calcBtn.addEventListener('click', calculate, false);

	};
	window.addEventListener('load', init, false);
})();
