// priority: 0

console.info('Hello, World! (You will only see this line once in console, during startup)')


onEvent('block.registry', event => {
	
	event.create('wood_casing')
	.material('wood')
	.hardness(1)
	.harvestTool('axe', 1)
	.displayName('Wood Casing')

})


