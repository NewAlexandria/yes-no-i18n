'use strict';
var uniqueRandomArray = require('unique-random-array');
var yes = require('./yes.json');
var no = require('./no.json');

var all = yes.concat(no).sort();

exports.yes = yes;
exports.no = no;
exports.all = all;

exports.yesRandom = function() { return uniqueRandomArray(yes).call().split(",")[1]; }
exports.yesRandomWithLang = function() { return uniqueRandomArray(yes).split(",").reverse().join(" - that's in "); }

exports.noRandom = function() { return uniqueRandomArray(no).split(",")[1]; }
exports.noRandomWithLang = function() { return uniqueRandomArray(no).split(",").reverse().join(" - that's in "); }

exports.allRandom = function() { return uniqueRandomArray(all).split(",")[1]; }
