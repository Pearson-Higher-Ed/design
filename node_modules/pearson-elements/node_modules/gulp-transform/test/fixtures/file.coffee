{File} = require 'gulp-util'
{readArray} = require 'event-stream'
{string, buffer, array} = require './content'

exports.buffered = () ->
  new File
    cwd: '/dir'
    path: '/dir/file.txt'
    contents: new Buffer string

exports.streaming = () ->
  new File
    cwd: '/dir'
    path: '/dir/file.txt'
    contents: readArray array
