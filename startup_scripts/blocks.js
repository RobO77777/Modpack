// priority: 0

console.info('Hello, World! (You will only see this line once in console, during startup)')

/*
onEvent('block.registry', event => {
	event.create('osmium_casing')
	.material('stone')
	.hardness(5)
	.harvestTool('pickaxe', 1)
	.requiresTool(true)

})
*/
onEvent('block.registry', event => {
	event.create('silicium_ore')
	.material('stone')
	.hardness(4)
	.harvestTool('pickaxe', 1)
	.requiresTool(true)

})