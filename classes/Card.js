"use strict";
const MAX_STAT = 5;

var Card = class Card {
	constructor(name, type) {
		this.name = '';
		this.type = 'Generic';
		if (name != 'undefined') {
			this.name = name;
		}
		if (type != 'undefined') {
			this.type = type;
		}
	}

	static randomStat() {
		// generate a value between 1 to MAX_STAT
		return Math.round(Math.random() * (MAX_STAT - 1) + 1);
	}

	toJson() {
		return JSON.parse(JSON.stringify(this));
	}
}

module.exports = Card;
