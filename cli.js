#!/usr/bin/env node
'use strict';
const meow = require('meow');
const yesNoWords = require('.');

const cli = meow([
	'Examples',
	'  $ yes-no-i18n',
	'  Éwè',
	'',
	'  $ yes-no --all --type yes',
	'  Zee',
	'  हाँ',
	'  ...',
	'',
	'  $ yes-no --type no --which',
	'  neen - that\'s in Luxembourgish',
	'',
	'Options',
	'  --all   Get all words instead of a random word',
	'  --type  Type of word: yes|no|all  Default: all',
	'  --which Include the language of the word'
]);

const type = cli.flags.type || 'all';
const which = cli.flags.which ? 'WithLang' : '';
console.log(cli.flags.all ? yesNoWords[type].join('\n').replace(',', ': ') : yesNoWords[type + 'Random' + which]());
