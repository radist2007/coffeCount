import Main from './js/main.js';

window.addEventListener("load", function() {
	setTimeout(function(){
		window.scrollTo(0, 1);
		console.log("YEP!");
	}, 0);
});
document.addEventListener('DOMContentLoaded', function() {
	console.log("Materialcss");
	var el    = document.querySelector('#tabs');
	var elems = document.querySelectorAll('.sidenav');
	var instances = M.Sidenav.init(elems, { });
    var instance = M.Tabs.init(el, {});
	var instance = M.Carousel.init({
		fullWidth: true,
		indicators: true
	});

	var elems = document.querySelectorAll('.fixed-action-btn');
	var instances = M.FloatingActionButton.init(elems, {});

	var elems = document.querySelectorAll('.collapsible');
	var instances = M.Collapsible.init(elems, {});
});

  document.addEventListener('DOMContentLoaded', function() {
			    });

  // Or with jQuery
  //
  //   $(document).ready(function(){
  //       $('.fixed-action-btn').floatingActionButton();
  //         });

  // Or with jQuery
  //
  //   $('.carousel.carousel-slider').carousel({
  //       fullWidth: true,
  //           indicators: true
  //             });

  // Or with jQuery
  //
  //   $(document).ready(function(){
  //       $('.sidenav').sidenav();
  //         });
  //


    // Or with jQuery
	//
	//   $(document).ready(function(){
	//       $('.tabs').tabs();
	//         });
	//               
console.log("index.js");

var main = new Main("hm...");


import './css/style.css';
