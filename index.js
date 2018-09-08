'use strict';
const uniqueRandomArray = require('unique-random-array');
const yes = require('./yes.json');
const no = require('./no.json');

const all = yes.concat(no).sort();

exports.yes = yes;
exports.no = no;
exports.all = all;

exports.yesRandom = function () {
	return uniqueRandomArray(yes).call().split(',')[1];
};
exports.yesRandomWithLang = function () {
	return uniqueRandomArray(yes).call().split(',').reverse().join(' - that\'s in ');
};

exports.noRandom = function () {
	return uniqueRandomArray(no).call().split(',')[1];
};
exports.noRandomWithLang = function () {
	return uniqueRandomArray(no).call().split(',').reverse().join(' - that\'s in ');
};

exports.allRandom = function () {
	return uniqueRandomArray(all).call().split(',')[1];
};
