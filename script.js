console.log("Hello from Coffe-Count!");

var countView    = document.getElementById('countView');
var btnAddCoffe  = document.getElementById('btnAddCoffe');
var localStorage = localStorage.getItem('coffe');

countView.innerHTML = localStorage.coffe;

function addCoffe(count = 0) {

	let coffeCount = localStorage.getItem('coffe');
	console.log("coffe in localStorage: " + coffeCount);

	if(coffeCount) {
		coffeCount ++ ;
		console.log(coffeCount);
		localStorage.setItem('coffe', coffeCount)
		countView.innerHTML = coffeCount;
	}

	console.log(count + " coffe was added");
}

btnAddCoffe.addEventListener('click', function(){

	addCoffe(1);

});

function minusCoffe(count = 0) {

	let coffeCount = localStorage.getItem('coffe');
	console.log("coffe in localStorage: " + coffeCount);

	if(coffeCount) {
		coffeCount --  ;
		console.log(coffeCount);
		localStorage.setItem('coffe', coffeCount)
		countView.innerHTML = coffeCount;
	}

	console.log(count + " coffe was minused");
}

btnMinusCoffe.addEventListener('click', function(){

	minusCoffe(1);

});
