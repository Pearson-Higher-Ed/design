# Import file "for_framer" (sizes and positions are scaled 1:2)
sketch = Framer.Importer.load("imported/for_framer@2x")

sketch[name].visible = true for name, layer of sketch
sketch.sortable_table_positions.visible = true
sketch.sortable_table_positions.minX = -500
sketch.sortable_table_positions.minY = 0
layer.visible = true for layer in sketch.sortable_table_positions.subLayers

origPos = sketch.age.minX

unsort = ->
	sketch.age.animate
		properties:
			midX: sketch.container.midX
		time: 0.1
		curve: 'ease-in-out'
	sketch.icon.animate
		properties:
			opacity: 0
		time: 0.1

sort = ->
	sketch.age.animate
		properties:
			minX: origPos
		time: 0.1
		curve: 'ease-in-out'
	sketch.icon.animate
		properties:
			opacity: 1
		time: 0.1
		delay: 0.16

sorted = false
unsort()


sketch.container.on Events.Click, ->
	if not sorted
		sort()
		sketch.other_icon.visible = false
		sorted = true
	else
		sketch.icon.animate
			properties: 
				rotation: if sketch.icon.rotation is 0 then 180 else 0
			time: 0.3
			curve: 'ease-in-out'

sketch.other_container.on Events.Click, ->
	unsort()
	sorted = false
	sketch.other_icon.visible = true
	
# 	sketch.icon.animate
# 		properties: 
# 			rotation: if sketch.icon.rotation is 0 then 180 else 0
# 		time: 0.2