# jimp-appicon

[![NPM version][npm-image]][npm-url]
[![Build Status][travis-image]][travis-url]
[![Coveralls Status][coveralls-image]][coveralls-url]
[![Dependency Status][depstat-image]][depstat-url]
[![Downloads][download-badge]][npm-url]

> A module for creating AppIcons for  applications. This command line program uses native JavaScript image processing (Jimp), so it does not require any native extensions.

## Install

```sh
npm i -g jimp-appicon
```

## Usage

```sh
appicon -s MyAppIcon.png
```
If you do not specify a source, Appicon will will default to a file named 'Appicon.png' in the same directory this ommand is run. Appicon will save a directory
called Appicon.iconset into the directory where this command is run.

## License

MIT © [David Fekke](https://fek.io)

[npm-url]: https://npmjs.org/package/jimp-appicon
[npm-image]: https://img.shields.io/npm/v/jimp-appicon.svg?style=flat-square

[travis-url]: https://travis-ci.org/davidfekke/jimp-appicon
[travis-image]: https://img.shields.io/travis/davidfekke/jimp-appicon.svg?style=flat-square

[coveralls-url]: https://coveralls.io/r/davidfekke/jimp-appicon
[coveralls-image]: https://img.shields.io/coveralls/davidfekke/jimp-appicon.svg?style=flat-square

[depstat-url]: https://david-dm.org/davidfekke/jimp-appicon
[depstat-image]: https://david-dm.org/davidfekke/jimp-appicon.svg?style=flat-square

[download-badge]: http://img.shields.io/npm/dm/jimp-appicon.svg?style=flat-square
