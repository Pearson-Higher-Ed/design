{spy} = require 'sinon'

re = /one|two|three/g

dict =
  one:   'un'
  two:   'deux'
  three: 'trois'

exports.stringFn = ->
  spy (content) ->
    content.replace re, (match) ->
      dict[match]

exports.bufferFn = ->
  spy (content) ->
    Buffer.concat([content, content])
