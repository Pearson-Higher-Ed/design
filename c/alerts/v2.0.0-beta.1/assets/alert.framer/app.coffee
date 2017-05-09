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

sketch.Group.states.add "hidden",
	maxY: 0
	minX: 20

sketch.Group.states.add "shown",
	minY: 40

sketch.Group.states.add "dismissed",
	maxX: 0

sketch.Group.states.remove "default"

sketch.Group.states.switchInstant "hidden"

sketch.static_error.on Events.Click, ->
	sketch.Group.states.switch "shown",
		curve: "ease-in-out"
		time: 0.3


sketch.close.on Events.Click, (e) ->
	e.stopPropagation()
	sketch.Group.states.switch "dismissed",
		curve: "ease-in"
		time: 0.2

sketch.Group.on Events.StateDidSwitch, (from, to) ->
	if to == "dismissed"
		sketch.Group.states.switchInstant "hidden"