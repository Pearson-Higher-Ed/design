# Project Info
# This info is presented in a widget when you share.
# http://framerjs.com/docs/#info.info

Framer.Info =
	title: ""
	author: "Malenke, Parker B"
	twitter: ""
	description: ""


# Import file "framer"
sketch = Framer.Importer.load("imported/framer@1x")

sketch.mobile_menu.clip = true
sketch.menu.minY = sketch.mobile_menu.maxY

sketch.trigger.on Events.Click, ->
	sketch.menu.animate
		properties: 
			minY: sketch.mobile_menu.minY
		curve: 'bezier-curve(0.77, 0, 0.175, 1)'
		time: 0.3

sketch.close.on Events.Click, ->
	sketch.menu.animate
		properties: 
			minY: sketch.mobile_menu.maxY
		curve: 'bezier-curve(0.77, 0, 0.175, 1)'
		time: 0.3
