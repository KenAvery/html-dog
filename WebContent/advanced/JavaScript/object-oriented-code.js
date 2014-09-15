/**
 * Object Oriented Code
 */

(function() {
	var init = function(event) {
		var clickOne = document.getElementById('one');
		var clickTwo = document.getElementById('two');

		var Person = function (name) {
		    this.name = name;
		};
		
		Person.prototype.say = function (words) {
		    alert(this.name + ' says "' + words + '"');
		};

		var oneClicked = function() {
			var tom = new Person('Tom');
			tom.say("Hello");
		}
		clickOne.addEventListener('click', oneClicked, false);

		var twoClicked = function() {
			var teddy = new Person('Teddy');
			teddy.say("Bear");
		}
		clickTwo.addEventListener('click', twoClicked, false);
	};
	$(window).load(init);
})();
