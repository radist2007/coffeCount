class Model {
	constructor() {
		console.log("Model.js");
		
		let coffeCount = localStorage.getItem('coffe');

		let startDate = new Date("Septemper 1 2019");
		let today = new Date();
	    let Difference_In_Time = today.getTime() - startDate.getTime(); 
		let Difference_In_Days = Difference_In_Time / (1000 * 3600 * 24);
		let days = Math.floor(Difference_In_Days)

		this._state = {
			'days': days,	
			'count': localStorage.getItem('coffe'),
		};	
		console.log(this._state);
	}

	getCoffeeFromCookie() {
		let coffeCount = localStorage.getItem('coffe');
		console.log("coffe in localStorage: " + coffeCount);
		this._state.count = coffeCount;
		return this._state._count;
	}

	addCoffee() {
		let coffeCount = localStorage.getItem('coffe');
		console.log(coffeCount);
		coffeCount ++ ;
		console.log(coffeCount);
		localStorage.setItem('coffe', coffeCount)
	}

	delCoffee() {
		let coffeCount = localStorage.getItem('coffe');
		console.log(coffeCount);
		coffeCount -- ;
		console.log(coffeCount);
		localStorage.setItem('coffe', coffeCount)
	}

}

export default Model;
