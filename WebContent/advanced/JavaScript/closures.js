/**
 * Closures
 */

(function (){
	var init = function(event){
		var clickTest = document.getElementById("test");
		var clickAdd = document.getElementById("add");
		var clickAppend = document.getElementById("append");
		
		var testClicked = function () {
			var value = $("#value").val();
			var retriever = saver(value);
			
			$("#rtn").val(retriever());
			
		}
		clickTest.addEventListener('click', testClicked, false);
		
		var saver = function (value) {
			return function () {
				return value;
			}
		}
		
		var addClicked = function () {
			var init = $("#init").val();
			
			var addInit = add(Number(init));
			
			$("#result").val(addInit(Number(init)));
		}
		clickAdd.addEventListener('click', addClicked, false);
		
		var add = function (a) {
		    return function (b) {
		        return a + b;
		    };
		};
		
		
		var appendClicked = function () {
			var init = $("#string").val();
			var app = $("#app").val();
			
			var addInit = add(init);
			
			$("#appended").val(addInit(app));
		}
		clickAppend.addEventListener('click', appendClicked, false);
		
	};
	$(window).load(init);
})();
