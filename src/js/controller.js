import { EventEmitter } from './helpers.js';

class Controller {
	
	constructor(model, view) {
		console.log("Controller.js");
		this._model = model;
		this._view  = view;

		this._view.setViewCoffe = this._model._state.count;
		this._view.setViewDays = this._model._state.days;
		this._view.setAvrDay();
		this._view.setAvrTea();

		view.on('add', this.addCoffee.bind(this));
		view.on('del', this.delCoffee.bind(this));

	}

	addCoffee() {
		console.log("Controller.addCoffee");
		this._model.addCoffee();
		this._view.addCoffee();
	}

	delCoffee() {
		console.log("Controller.delCoffee");
		this._model.delCoffee();
		this._view.delCoffee();
	}
	
}

export default Controller;
