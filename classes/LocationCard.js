"use strict";
var Card = require('./Card.js');

var LocationCard = class LocationCard extends Card {
	constructor(name, str, int, sta, luk) {
		super(name, 'Location')

		// check for random
		if (str.toLowerCase() == 'r') {
			str = Card.randomStat();
		}
		if (int.toLowerCase() == 'r') {
			int = Card.randomStat();
		}
		if (sta.toLowerCase() == 'r') {
			sta = Card.randomStat();
		}
		if (luk.toLowerCase() == 'r') {
			luk = Card.randomStat();
		}

		this.stats = {
			'STR': parseInt(str),
			'INT': parseInt(int),
			'STA': parseInt(sta),
			'LUK': parseInt(luk)
		}
		if (name != 'undefined') {
			this.name = name;
		}
	}
}

module.exports = LocationCard;
