# yes-no-i18n [![Build Status](https://travis-ci.org/NewAlexandria/yes-no-words.svg?branch=master)](https://travis-ci.org/NewAlexandria/yes-no-words)

> Get yes/no words from the World

![](https://user-images.githubusercontent.com/87758/45258500-c791a280-b386-11e8-8030-7f1c12936491.png)

*The lists are just JSON files and can be used wherever.*


## Install

```
$ npm install --save yes-no-i18n
```


## Usage

```js
const yesNoWords = require('yes-no-i18n');

yesNoWords.yesRandom();
//=> 'Yisss'
```


## API

### .yes

Type: `array`

Yes words.

### .no

Type: `array`

No words.

### .all

Type: `array`

Both yes and no words.

### .yesRandom()

Type: `function`

Random yes words.

### .noRandom()

Type: `function`

Random no words.

### .yesRandomWithLang()

Type: `function`

Random yes words, with a suffix of what language it's in.

```
Так - that's in Belarusian
```

### .noRandomWithLang()

Type: `function`

Random no words, with a suffix of what language it's in.

```
dili - that's in Cebuano
```

### .allRandom()

Type: `function`

Random yes or no words.


## CLI

```
$ npm install --global yes-no-i18n
```

```
$ yes-no --help

  Examples
    $ yes-no
    Éwè

    $ yes-no --all --type yes
    Zee
    हाँ
    ...

  Options
    --all   Get all words instead of a random word
    --type  Type of word: yes|no|all  Default: all
```


## Related

- [yes-no](https://github.com/sindresorhus/yes-no-words) - Get yes/no like words.  (our parent!)
- [cat-names](https://github.com/sindresorhus/cat-names) - Get popular cat names
- [dog-names](https://github.com/sindresorhus/dog-names) - Get popular dog names
- [pokemon](https://github.com/sindresorhus/pokemon) - Get Pokémon names
- [superheroes](https://github.com/sindresorhus/superheroes) - Get superhero names
- [supervillains](https://github.com/sindresorhus/supervillains) - Get supervillain names
- [superb](https://github.com/sindresorhus/superb) - Get superb like words


## License

MIT © [NewAlexandria](http://www.newalexandria.org)
