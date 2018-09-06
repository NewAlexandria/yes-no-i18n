'use strict';
var uniqueRandomArray = require('unique-random-array');
var yes = require('./yes.json');
var no = require('./no.json');

var all = yes.concat(no).sort();

exports.yes = yes;
exports.no = no;
exports.all = all;

exports.yesRandom = uniqueRandomArray(yes).split("\t")[1];
exports.yesRandomWithLang = uniqueRandomArray(yes).split("\t").reverse().join(" - that's in ");

exports.noRandom = uniqueRandomArray(no).split("\t")[1];
exports.noRandomWithLang = uniqueRandomArray(no).split("\t").reverse().join(" - that's in ");

exports.allRandom = uniqueRandomArray(all).split("\t")[1];
