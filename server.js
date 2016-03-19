var CharacterCard = require('./classes/CharacterCard.js');
var LocationCard = require('./classes/LocationCard.js');

var express = require('express');
var app = express();

app.get('/', function (req, res) {
	var char1 = new CharacterCard('Bob', 'r','r','r','r');
	var loc1 = new LocationCard('Home', 'r','r','r','r');

	res.send('<html><body><span>Rolled:</span>' + cardToDisplay(char1) + cardToDisplay(loc1) + '</body></html>');
});

app.listen(3000, function () {
	console.log('Example app listening on port 3000!');
});

function cardToDisplay(card) {
	return '<div class="card">' + JSON.stringify(card.toJson()) + '</div>';
}

var charNameList = [
	"Alice", "Anne",
	"Cindy", "Candice",
	"Deborah", "Daisy",
	"Julie",
	"Lisa", "Linda", "Laura", "Louise",
	"Michelle"];
	
var locNameList = [
	"Bank",
	"Church",
	"Farm",
	"Hospital",
	"Library",
	"Park",
	"School"
];
