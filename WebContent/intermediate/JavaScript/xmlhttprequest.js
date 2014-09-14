/**
 * XMLHTTRequest JS
 */

(function() {
	var init = function() {
		var clickGet = document.getElementById('get');
		var clickPost = document.getElementById('post');

		var getClicked = function() {
			var xmlhttp = new XMLHttpRequest();

			xmlhttp.open("GET", "http://httpbin.org/get", true);
			xmlhttp.send();
			
			xmlhttp.onreadystatechange = function() {
				if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
					document.getElementById("myDiv").innerHTML = xmlhttp.responseText;
				}
			}
		}
		clickGet.addEventListener('click', getClicked, false);
		
		var postClicked = function() {
			var xmlhttp = new XMLHttpRequest();
			var jsonString = JSON.stringify({
			    make: "McLaren",
			    model: "MP4-12C",
			    miles: 5023
			});

			xmlhttp.open("POST", "http://httpbin.org/post", true);
			xmlhttp.send(jsonString);
			
			xmlhttp.onreadystatechange = function() {
				if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
					document.getElementById("myDiv").innerHTML = xmlhttp.responseText;
				}
			}
		}
		clickPost.addEventListener('click', postClicked, false);
	};
	window.addEventListener('load', init, false);
})();
