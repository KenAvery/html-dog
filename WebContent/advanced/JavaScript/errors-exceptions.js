/**
 * Errors and Exceptions
 */

(function() {
	var init = function(event) {
		var clickError = document.getElementById('error');
		var clickThrow = document.getElementById('throw');

		var errorClicked = function() {
			try {
			    JSON.parse("a"); // Produces a SyntaxError
			} catch (error) {
			    // Handle the error
			    alert(error.message);
			}
		}
		clickError.addEventListener('click', errorClicked, false);

		var throwClicked = function() {
			try {
				throwError("I hungry. Fridge empty.");
			} catch (error) {
				alert (error);
			}
		}
		clickThrow.addEventListener('click', throwClicked, false);
		
		var throwError = function (error) {
			throw new Error("I hungry. Fridge empty.");
		}
	
	};
	$(window).load(init);
})();
