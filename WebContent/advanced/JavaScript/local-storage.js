/**
 * Object Oriented Code
 */

(function() {
	var init = function(event) {
		var clickSet = document.getElementById('set');
		var clickGet = document.getElementById('get');
		var clickClr = document.getElementById('clr');

		var setClicked = function() {
			var firstName = $("#fname").val();
			var lastName = $("#lname").val();
			
			if (firstName == '') {
				alert("Please enter first name");
			} else if (lastName == '') {
				alert("Please enter last name");
			} else {
				localStorage.setItem('user', JSON.stringify({
				    firstName: firstName,
				    lastName: lastName
				}));
				clrClicked();
			}
		}
		clickSet.addEventListener('click', setClicked, false);

		var getClicked = function() {
			var user = JSON.parse(localStorage.getItem('user'));
			$("#fname").val(user.firstName);
			$("#lname").val(user.lastName);
		}
		clickGet.addEventListener('click', getClicked, false);
		
		var clrClicked = function() {
				$("#fname").val('');
				$("#lname").val('');
		}
		clickClr.addEventListener('click', clrClicked, false);
	};
	$(window).load(init);
})();
