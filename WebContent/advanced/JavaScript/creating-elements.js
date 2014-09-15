/**
 * Creating Elements
 */

(function() {
	var init = function(event) {
		var clickOne = document.getElementById('one');
		var clickTwo = document.getElementById('two');

		var oneClicked = function() {
			var div = document.createElement('div');
			div.textContent = "Sup, y'all?";
			div.setAttribute('id', 'note');
			document.body.appendChild(div);

			var span = document.createElement('span');
			span.textContent = " Hello!";
			div.appendChild(span);
		}
		clickOne.addEventListener('click', oneClicked, false);

		var twoClicked = function() {
			var div = document.getElementById('note');
			div.parentNode.removeChild(div);
			
			var divNew = $('<div/>').text("What happened, y'all?").appendTo(document.body);
			$('<span/>').text(' Howdy!').appendTo(divNew);
			document.body.appendChild(divNew);
		}
		clickTwo.addEventListener('click', twoClicked, false);

	};
	$(window).load(init);
})();