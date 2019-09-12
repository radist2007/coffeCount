import { createElement, EventEmitter } from './helpers.js';

class View extends EventEmitter {

	constructor() {
		super();

		console.log("View.js");

		this._count;
		this._totalAmount;
		this._days;
		this._avrDay;
		this._avrTea;

		this._countElem       = document.getElementById('count');
		this._totalAmountElem = document.getElementById('totalAmount');
		this._daysElem   = document.getElementById('days');
		this._avrDayElem = document.getElementById('avrDay');
		this._avrTeaElem = document.getElementById('avrTea');

		this.addCoffBtn  = document.getElementById('addBtn');
		this.delCoffBtn  = document.getElementById('delBtn');

		this.addCoffBtn.addEventListener('click', this.handleAddCoff.bind(this));
		this.delCoffBtn.addEventListener('click', this.handleDelCoff.bind(this));


	}

	handleAddCoff(){
		console.log("add");
		this.emit('add', 1);
		
	}
	handleDelCoff(){
		console.log("del");
		this.emit('del', 1);
		
	}

	set setViewCoffe(val){
		this._count = val;
		this._countElem.innerHTML = this._count;
		this.setTotalAmount();
	}

	set setViewDays(val) {
		this._days = val;
		this._daysElem.innerHTML = this._days;
	}

	setAvrDay() {
		this._avrDay = this._count / this._days;
		this._avrDay = Math.round(this._avrDay * 100) / 100;
		this._avrDayElem.innerHTML = this._avrDay;
	}

	setAvrTea() {
		this._avrTea = (10 * (this._avrDay)*20) / 100 ;
		this._avrTea = Math.round(this._avrTea * 100) / 100;
		this._avrTeaElem.innerHTML = this._avrTea;
	}

	setTotalAmount() {
		this._totalAmount = this._count * 20;
		this._totalAmountElem.innerHTML = this._totalAmount;
	}

	addCoffee(){
		this._count++;
		this._countElem.innerHTML = this._count;
		this.setAvrDay();
		this.setAvrTea();
		this.setTotalAmount();
	}

	delCoffee(){
		this._count--;
		this._countElem.innerHTML = this._count;
		this.setAvrDay();
		this.setAvrTea();
		this.setTotalAmount();
	}

}

export default View;
