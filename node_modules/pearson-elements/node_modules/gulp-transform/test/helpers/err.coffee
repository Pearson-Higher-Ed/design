{PluginError} = require 'gulp-util'

module.exports = (fn, msg) ->
  fn.should.throw PluginError, msg
