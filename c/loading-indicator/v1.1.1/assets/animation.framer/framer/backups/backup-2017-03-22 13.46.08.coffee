# Project Info
# This info is presented in a widget when you share.
# http://framerjs.com/docs/#info.info

Framer.Info =
	title: ""
	author: "Malenke, Parker B"
	twitter: ""
	description: ""

Canvas.backgroundColor = '#252525'

scale = (val, min, max, min2, max2) ->
	(((val - min) * (max2 - min2)) / (max - min)) + min2

toRad = (val, min, max) ->
	scale val, min, max, 0, Math.PI * 2

dotNum = 8
dotSize = 4
time = 0.2
circSize = 14
growScale = 1.4
layers = [1..dotNum].map (_, i) ->
	new Layer
		x: Math.cos(toRad(i, 0, dotNum)) * circSize + 100
		y: Math.sin(toRad(i, 0, dotNum)) * circSize + 100
		width: dotSize
		height: dotSize
		borderRadius: 4
		backgroundColor: '#19A5A3'

# grow = layers[0].animate
# 	properties:
# 		scale: 1.4
# 	time: 0.2
# 
# shrink = layers[0].animate
# 	properties:
# 		scale: 1
# 	time: 0.2

# grow.on 'end', -> shrink.start()
# 
# shrink.on 'end', -> grow.start()
		
layers.map (layer, i) ->
	grow1 = layer.animate
		properties:
			scale: growScale
		time: time
		delay: i * time
	
	grow2 = new Animation
		layer: layer
		properties:
			scale: growScale
		time: time
		delay: layers.length * time - (time * 2)

	
	shrink1 = layer.animate
		properties:
			scale: 1
		time: time
	
	shrink2 = new Animation
		layer: layer
		properties:
			scale: 1
		time: time
	
	grow1.on 'end', -> shrink1.start()
	shrink1.on 'end', -> grow2.start()
	grow2.on 'end', -> shrink2.start()
	shrink2.on 'end', -> grow2.start()
		
	
# 	grow.on 'end', ->
# 		shrink.options.delay = 1
# 		shrink.start()
# 	shrink.on 'end', ->
# 		shrink.options.delay = 1
# 		grow.start()


# sequentiallyAnimate = (things, _anim, offset = 0, reverse = false, repeat = false) ->
# # 	debugger
# 	things.map (thing, i) ->
# 		anim = Object.assign {}, _anim
# 		anim.delay = (anim.time + offset) * i
# 		thing.animate anim
# 		
# 		if reverse
# 			thing.once Events.AnimationEnd, (a) ->
# 				b = a.reverse()
# 				b.options.delay = 0
# 				console.log b
# 				b.start()
# 
# 			if i == (things.length - 1) and repeat
# 				console.log "gey", b
# 				b.once Events.AnimationEnd, () ->
# 					sequentiallyAnimate things, _anim, 0, reverse, repeat

# sequentiallyAnimate layers,
# 	{time: 0.2, easing: 'ease-in-out', properties: scale: 1.4}, 0, true, true
	

