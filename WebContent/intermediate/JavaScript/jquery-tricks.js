/**
 * JQuery Tricks
 */

(function() {
	var init = function(event) {
		var clickOne = document.getElementById('one');
		var clickTwo = document.getElementById('two');
		
		var array = [1, 2, 3];
		var number = 10;
		var plainObject = {name: 'Tom'};

		var oneClicked = function() {
			document.getElementById("myDiv1").innerHTML = "Is " + array.toString() + " an array? " + $.isArray(array);
			document.getElementById("myDiv2").innerHTML = "Is oneClick a function? " + $.isFunction(oneClicked);
		}
		clickOne.addEventListener('click', oneClicked, false);

		var twoClicked = function() {
			document.getElementById("myDiv1").innerHTML = "Is " + number + " a number? " + $.isNumeric(number);
			document.getElementById("myDiv2").innerHTML = "Is " + JSON.stringify(plainObject) + " a plain object? " + $.isPlainObject(plainObject);
		}
		clickTwo.addEventListener('click', twoClicked, false);
	};

	$(window).load(init);
})();
