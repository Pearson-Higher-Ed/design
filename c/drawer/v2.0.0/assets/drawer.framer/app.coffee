# Remove framer cursor
document.body.style.cursor = "auto"

# Import file "framer" (sizes and positions are scaled 1:2)
sk = Framer.Importer.load("imported/framer@2x")
Framer.Device.contentScale = 0.5

header  = sk.header1
drawer  = sk.drawer1
help    = sk.help1
close   = sk.close1
article = sk.article1
tl      = sk.top_level1
tlc     = sk.tlcontent1
sl      = sk.second_level1
slc     = sk.slcontent1
back    = sk.back1
tltitle = sk.tltitle1

help.style.cursor = 'pointer'
close.style.cursor = 'pointer'
article.style.cursor = 'pointer'
back.style.cursor = 'pointer'

header.bringToFront()

drawer.states.remove 'default'
drawer.states.add
	closed:
		minX: header.maxX + 40
		shadowX: -1
		shadowBlur: 8
		shadowColor: 'rgba(0, 0, 0, 0.3)'
		clip: true
	open:
		maxX: header.maxX

drawer.states.animationOptions =
	curve: 'ease-in-out'
	time: 0.5
	
drawer.states.switchInstant 'closed'

help.on Events.Click, (event, layer) -> drawer.states.next()

close.on Events.Click, (e, l) -> drawer.states.next()

hideTitle = ->
	tltitle.animate
		properties: 
			maxX: -40
			opacity: 0
		time: 0.3
		curve: 'ease-in-out'

showTitle = ->
	tltitle.animate
		properties:
			minX: 0
			opacity: 1
		time: 0.4
		curve: 'ease-in-out'

back.midX = sl.maxX * 0.6
back.opacity = 0
	
showBack = ->
	back.midX = sl.maxX * 0.6
	back.animate
		properties:
			minX: 0
			opacity: 1
		time: 0.3
		curve: 'ease-in-out'

hideBack = ->
	back.animate
		properties: 
			midX: sl.maxX * 0.5
		time: 0.4
		curve: 'ease-in-out'
	
	back.animate
		properties:
			opacity: 0
		time: 0.3
		curve: 'ease-in-out'
	
# tltitle.states.add
# 	hidden:
# 		maxX: -40
# 		opacity: 0
# 	shown:
# 		minX: 0
# 		opacity: 1
# tltitle.states.animationOptions =
# 	time: 0.4
# 	curve: 'ease-in-out'

# back.states.add
# 	hidden:
# 		midX: sl.maxX * 0.6
# 		opacity: 0
# 	shown:
# 		minX: 0
# 		opacity: 1
# back.states.switchInstant 'hidden'
# back.states.animationOptions =
# 	time: 0.4
# 	curve: 'ease-in-out'

slc.states.add
	away:
		minX: drawer.width
		opacity: 0
slc.states.switchInstant 'away'
slc.states.animationOptions = 
	time: 0.3
	curve: 'ease-in-out'

tlc.states.add
	away:
		opacity: 0
		maxX: -40
tlc.states.animationOptions =
	time: 0.3
	curve: 'ease-in-out'

article.on Events.Click, (e, l) ->
	tlc.states.next()
	slc.states.next()
	showBack()
	hideTitle()
	
back.on Events.Click, (e, l) ->
	tlc.states.next()
	slc.states.next()
	hideBack()
	showTitle()
	
	
	
# Import file "framer" (sizes and positions are scaled 1:2)
# sk = Framer.Importer.load("imported/framer@2x")
# Framer.Device.contentScale = 0.5
# 
# header  = sk.header
# drawer  = sk.drawer
# help    = sk.help
# close   = sk.close
# article = sk.article
# tl      = sk.top_level
# tlc     = sk.tlcontent
# sl      = sk.second_level
# slc     = sk.slcontent
# back    = sk.back
# tltitle = sk.tltitle
# 
# help.style.cursor = 'pointer'
# close.style.cursor = 'pointer'
# article.style.cursor = 'pointer'
# back.style.cursor = 'pointer'
# 
# drawer.states.remove 'default'
# drawer.states.add
# 	closed:
# 		minX: header.maxX + 40
# 		shadowX: -1
# 		shadowBlur: 8
# 		shadowColor: 'rgba(0, 0, 0, 0.3)'
# 		clip: true
# 	open:
# 		maxX: header.maxX
# 
# drawer.states.animationOptions =
# 	curve: 'ease-in-out'
# 	time: 0.5
# 	
# drawer.states.switchInstant 'closed'
# 
# help.on Events.Click, (event, layer) -> drawer.states.next()
# 
# close.on Events.Click, (e, l) -> drawer.states.next()
# 
# tltitle.states.add
# 	hidden:
# 		maxX: -40
# 		opacity: 0
# 	shown:
# 		minX: 0
# 		opacity: 1
# tltitle.states.animationOptions =
# 	time: 0.4
# 	curve: 'ease-in-out'
# 
# back.states.add
# 	hidden:
# 		midX: sl.maxX * 0.6
# 		opacity: 0
# 	shown:
# 		minX: 0
# 		opacity: 1
# back.states.switchInstant 'hidden'
# back.states.animationOptions =
# 	time: 0.4
# 	curve: 'ease-in-out'
# 
# slc.states.add
# 	away:
# 		minX: drawer.width
# 		opacity: 0
# slc.states.switchInstant 'away'
# slc.states.animationOptions = 
# 	time: 0.3
# 	curve: 'ease-in-out'
# 
# tlc.states.add
# 	away:
# 		opacity: 0
# 		maxX: -40
# tlc.states.animationOptions =
# 	time: 0.3
# 	curve: 'ease-in-out'
# 
# article.on Events.Click, (e, l) ->
# 	tlc.states.next()
# 	slc.states.next()
# 	back.states.next()
# 	tltitle.states.switch "hidden"
# 	
# back.on Events.Click, (e, l) ->
# 	tlc.states.next()
# 	slc.states.next()
# 	back.states.switch "hidden"
# 	tltitle.states.switch "shown"