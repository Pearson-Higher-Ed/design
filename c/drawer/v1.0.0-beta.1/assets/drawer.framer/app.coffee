# Remove framer cursor
document.body.style.cursor = "auto"

# Import file "drawer" (sizes and positions are scaled 1:2)
sk = Framer.Importer.load("imported/drawer@2x")
Framer.Device.contentScale = 0.5

header = sk.header
drawer = sk.drawer
help   = sk.help
close  = sk.close

help.style.cursor = 'pointer'
close.style.cursor = 'pointer'

drawer.states.remove 'default'
drawer.states.add
	closed:
		minX: header.maxX + 40
		shadowX: -1
		shadowBlur: 8
		shadowColor: 'rgba(0, 0, 0, 0.3)'
	open:
		maxX: header.maxX

drawer.states.animationOptions =
	curve: 'ease-in-out'
	time: 0.5
	
drawer.states.switchInstant 'closed'

help.on Events.Click, (event, layer) -> drawer.states.next()

close.on Events.Click, (e, l) -> drawer.states.next()