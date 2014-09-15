/**
 * Object Oriented Code
 */

(function() {
	var init = function(event) {
		var clickOne = document.getElementById('one');
		var clickTwo = document.getElementById('two');
		
		var canvas = document.querySelector('canvas');
		var ctx = canvas.getContext('2d');
		
		var oneClicked = function() {
			ctx.fillRect(10, 10, 10, 10);
		}
		clickOne.addEventListener('click', oneClicked, false);

		var twoClicked = function() {

			resize();

			var pos, vel;
			pos = {
				x : 10,
				y : 10
			};
			vel = {
				x : 1,
				y : 1
			};

			var loop = function() {
				ctx.clearRect(0, 0, canvas.width, canvas.height);
				pos.x += vel.x;
				pos.y += vel.y;
				if (pos.x < 5 || pos.x > canvas.width - 5) {
					vel.x *= -1;
				}
				if (pos.y < 5 || pos.y > canvas.height - 5) {
					vel.y *= -1;
				}
				ctx.fillRect(pos.x - 5, pos.y - 5, 10, 10);
			};

			setInterval(loop, 1000 / 60);
		}
		clickTwo.addEventListener('click', twoClicked, false);

		var resize = function() {
			canvas.width = window.innerWidth;
			canvas.height = window.innerHeight;
		};
		window.addEventListener('resize', resize);

	};
	$(window).load(init);
})();
