# gulp-transform

[![Version][Version badge]][NPM link]
[![License][License badge]][License link]
[![Build][Build badge]][Build link]
[![Coverage][Coverage badge]][Coverage link]
[![Dependencies][Dependencies badge]][Dependencies link]


[Gulp][Gulp link] plugin for applying arbitrary transformations to
the contents of files.

* **Simple**. Just pass a callback function that takes the current file
contents and returns the desired contents.
* **Flexible**. Receive file contents as a Buffer or a string. Compatible with
pipelines in both buffer mode and streaming mode.
* **Economical**. Reduce the need for gulp-specific plugins by pairing
gulp-transform with ordinary node packages and functions.

## Install

Install via [npm][NPM link]:

```sh
npm install --save-dev gulp-transform
```

## Examples

#### Simple transformation

Source file:

```
I am constant as the northern star.
```

Transform task:

```js
const gulp = require('gulp');
const transform = require('gulp-transform');

gulp.task('quadruple', function() {
  return gulp.src('src/*.txt')
    .pipe(transform(contents => Array(4).fill(contents).join('\n')))
    .pipe(gulp.dest('dest'));
});
```

Destination file:

```
I am constant as the northern star.
I am constant as the northern star.
I am constant as the northern star.
I am constant as the northern star.
```

#### Pairing with non-gulp packages

We can pair gulp-transform with vanilla node packages to reduce our dependence
on gulp-specific plugins. In this example, we use gulp-transform with
[cheerio][Cheerio link] to add a `role="main"` attribute to all `<main>`
elements, thus ensuring accessibility in older versions of Internet Explorer.

```js
const gulp = require('gulp');
const transform = require('gulp-transform');
const cheerio = require('cheerio');


function transformFn(contents) {
  var $ = cheerio.load(contents);
  $('main').attr('role', 'main');
  return $.html();
}

gulp.task('cheerio', function() {
  return gulp.src('src/**/*.html')
    .pipe(transform(transformFn, {encoding: 'utf8'}))
    .pipe(gulp.dest('dest'));
});
```

## API

#### `transform(transformFn, [options])`

##### transformFn `function`

The callback responsible for the transformation. The return value must be a
string or a Buffer, which will replace the file's contents. The callback
is invoked once per file with the following arguments:

* **contents** `Buffer` | `string` <br>
The initial contents of the file. Contents are passed as a Buffer unless the
`encoding` option is set, in which case they are passed as a string.
Contents are normalized to ensure a consistent API regardless of whether
files are in streaming or buffer mode.

* **file** `File` <br>
The [Vinyl file][Vinyl link] object to which the contents belong. Useful for
getting metadata about the file, such as its path. Making changes to
`file.contents` is not recommended, however, as these contents are not
normalized and will in any case be replaced by the return value of the callback.

##### options `object` (optional)

An object for configuring the behavior of the plugin. The following keys are
accepted as options:

* **encoding** `string` <br>
Casts contents to a string with the specified
[encoding][Encoding link] before it is passed to transformFn. If no encoding is
specified, contents will be passed as a Buffer.

* **thisArg** `*` <br>
Determines the value of `this` within transformFn. If omitted,
`this` will be undefined.

## License

Copyright &copy; 2016 Akim McMath. Licensed under the [MIT License][License link].

[Gulp link]: http://gulpjs.com/
[NPM link]: https://npmjs.org/package/gulp-transform
[Version badge]: https://img.shields.io/npm/v/gulp-transform.svg?style=flat-square
[License badge]: https://img.shields.io/npm/l/gulp-transform.svg?style=flat-square
[License link]: LICENSE
[Build badge]: https://img.shields.io/travis/akim-mcmath/gulp-transform/master.svg?style=flat-square
[Build link]: https://travis-ci.org/akim-mcmath/gulp-transform
[Coverage badge]: https://img.shields.io/coveralls/akim-mcmath/gulp-transform/master.svg?style=flat-square&service=github
[Coverage link]: https://coveralls.io/github/akim-mcmath/gulp-transform?branch=master
[Dependencies badge]: https://img.shields.io/gemnasium/akim-mcmath/gulp-transform.svg?style=flat-square
[Dependencies link]: https://gemnasium.com/akim-mcmath/gulp-transform
[Cheerio link]: https://www.npmjs.com/package/cheerio
[Vinyl link]: https://github.com/gulpjs/vinyl
[Encoding link]: https://nodejs.org/docs/latest/api/buffer.html#buffer_buffers_and_character_encodings
