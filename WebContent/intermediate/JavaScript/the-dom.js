/**
 * The DOM JS
 */

(function() {
	var init = function() {
		var clickMe = document.getElementById('click-me');
		
		var clicked = function () {
			var pageHeader = document.getElementById('page-header');
			pageHeader.innerHTML = "This is the new Header!"
				
			var liTag = document.getElementsByTagName("li");
			var numItems = liTag.length;
			liTag[0].innerHTML = "List item 1";
			
			buttonClass = document.getElementsByClassName("btn");
			buttonClass[0].innerHTML = "Clicked!";
			
			var outputText = document.querySelectorAll(".output-text");
			outputText[0].innerHTML = "Here is something new!";
			
		}
		clickMe.addEventListener('click', clicked, false);

	};
	window.addEventListener('load', init, false);
})();
