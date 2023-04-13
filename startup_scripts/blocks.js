// priority: 0

console.info('Hello, World! (You will only see this line once in console, during startup)')


onEvent('block.registry', event => {
	
	event.create('wood_casing')
	.material('wood')
	.hardness(2.5)
	.harvestTool('axe', 1)
	.requiresTool(true)
	.displayName('Wood Casing')

})


