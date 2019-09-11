'use strict';

import Model      from './model.js';
import View       from './view.js';
import Controller from './controller.js';

class Main {
	
	constructor(word) {
		console.log("Main.js");

		this._model = new Model();
		this._view = new View();
		this._controller = new Controller(this._model, this._view);
	}
	
}

export default Main;

