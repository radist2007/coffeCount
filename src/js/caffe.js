class Caffe {

	constructor(data) {
		this._name = data.name;
		this._coffeeCount = 0;
		this._goods = {
			espresso: 0,
			americano: 0,
			milk: 0,
			cream: 0,
		};
		this._baristas = {};
		set barista(name) {
			this._baristas.name = name;
		}

		get barista(name) {
			return this._baristas.name;
		};
	}





}
