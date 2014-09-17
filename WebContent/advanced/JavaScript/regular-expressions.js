/**
 * Regular Expressions
 */

(function() {
	var init = function(event) {
		var clickTest = document.getElementById('test');
		var clickReplace = document.getElementById('replace');

		var testClicked = function() {
			var regex = $("#regex").RegExp;
			var testString = $("#string").val();
			
			if (regex == '') {
				alert("Please regular expression");
			} else if (string == '') {
				alert("Please enter test string");
			} else {
				if (testString.match(regex)) {
					alert('Yes, it\'s a match!');
				} else {
					alert("No match, try again " + regex);
				}
			}
		}
		clickTest.addEventListener('click', testClicked, false);
		
		// TODO This is not working
		var replaceClicked = function () {
			var regex = RegExp($("#rregex").val());
			var string = $("#rstring").val();
			var replace = $("#replacement").val();
			
			if (regex == '') {
				alert("Please regular expression");
			} else if (string == '') {
				alert("Please enter replace string");
			} else {
				string = string.replace(regex, replace);
				alert(string);
			}
		}
		clickReplace.addEventListener('click', replaceClicked, false);

	};
	$(window).load(init);
})();
