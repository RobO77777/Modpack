/********************************Unification*********************************/

onEvent('item.tags', event => {
    
    //retirer les tags aux items de copper non voulu
    event.removeAllTagsFrom([
    'immersiveengineering:dust_copper', 
    'immersiveengineering:dust_steel', 
    'iceandfire:copper_ingot', 
    'immersiveengineering:ingot_copper',
    'mekanism:ingot_copper',
    'iceandfire:copper_nugget',
    'immersiveengineering:nugget_copper',
    'mekanism:nugget_copper'


    ])

    //ores
    //steel
    event.add('forge:plates/steel', 'kubejs:steel_sheet')
    event.add('forge:plates', 'kubejs:silicium_sheet')
    event.add('forge:wires/steel', 'kubejs:steel_wire')
    event.add('forge:rods/steel', 'kubejs:steel_rod')

    //silicium

    event.add('forge:plates', 'kubejs:silicium_sheet')
    event.add('forge:ingots', 'kubejs:silicium_ingot')
    event.add('forge:dusts', 'kubejs:silicium_dust')
    event.add('forge:plates/silicium', 'kubejs:silicium_sheet')
    event.add('forge:ingots/silicium', 'kubejs:silicium_ingot')
    event.add('forge:dusts/silicium', 'kubejs:silicium_dust')

    //copper

    event.add('forge:plates', 'create:copper_sheet')
    event.add('forge:plates/copper', 'create:copper_sheet')

    //zinc

    event.add('forge:dusts/zinc', 'kubejs:dust_zinc')

    //retirer les tags items au blocks de minerais de copper non voulu
    event.removeAllTagsFrom('mekanism:copper_ore')
    event.removeAllTagsFrom('iceandfire:copper_ore')
    event.removeAllTagsFrom(['tconstruct:copper_ore',
    'tconstruct:tinkers_bronze_nugget',
    'tconstruct:tinkers_bronze_ingot',
    'tconstruct:tinkers_bronze_block',
    'tconstruct:copper_nugget',
    'tconstruct:copper_block',
    'tconstruct:copper_ingot'])

    //zinc
   
    event.add('forge:dusts', 'kubejs:dust_zinc')
})

onEvent('block.tags', event => {
    
    //retirer les tags blocks au blocks de minerais de copper non voulu
    event.removeAllTagsFrom([
        'iceandfire:copper_block',
        'mekanism:block_copper',
        'immersiveengineering:storage_copper',
        'immersiveengineering:ore_copper',
        'iceandfire:copper_ore',
        'mekanism:copper_ore'




    ])
    //retirer les tags blocks au blocks de minerais de copper non voulu
    event.removeAllTagsFrom('mekanism:copper_ore')
    event.removeAllTagsFrom('iceandfire:copper_ore')
})

onEvent('recipes', event => {

//ingots
	
	//iron

	event.remove({id: 'create:smelting/iron_ingot_from_crushed'})
	event.remove({id: 'create:blasting/iron_ingot_from_crushed'})
	event.remove({id: 'minecraft:iron_ingot_from_blasting'})
	event.remove({id: 'minecraft:iron_ingot'})

	event.custom({
		"type": "create:milling",
		"ingredients": [
		  {
			"item": "create:crushed_iron_ore"
		  }
		],
		"results": [
		  {
			"item": "mekanism:dust_iron",
			"chance": 1
		  }
		],
		"processingTime": 50
	})

	//gold
	event.remove({id: 'create:smelting/gold_ingot_from_crushed'})
	event.remove({id: 'create:blasting/gold_ingot_from_crushed'})
	event.remove({id: 'minecraft:gold_ingot_from_blasting'})
	event.remove({id: 'minecraft:gold_ingot'})

	event.custom({
		"type": "create:milling",
		"ingredients": [
		  {
			"item": "create:crushed_gold_ore"
		  }
		],
		"results": [
		  {
			"item": "mekanism:dust_gold",
			"chance": 1
		  }
		],
		"processingTime": 50
	})

	//copper
	event.remove({id: 'create:smelting/copper_ingot_from_crushed'})
	event.remove({id: 'create:blasting/copper_ingot_from_crushed'})
	event.remove({id: 'create:smelting/copper_ingot_from_ore'})
	event.remove({id: 'create:blasting/copper_ingot_from_ore'})

	event.smelting('create:copper_ingot', 'mekanism:dust_copper')
	event.blasting('create:copper_ingot', 'mekanism:dust_copper')

	event.custom({
		"type": "create:milling",
		"ingredients": [
		  {
			"item": "create:crushed_copper_ore"
		  }
		],
		"results": [
		  {
			"item": "mekanism:dust_copper",
			"chance": 1
		  }
		],
		"processingTime": 50
	})
	
	event.remove({id: 'iceandfire:copper_ingot'})
	event.remove({id: 'iceandfire:copper_nugget'})
	event.remove({id: 'iceandfire:copper_ore'})	
	event.remove({id: 'iceandfire:copper_block'})
	event.remove({id: 'mekanism:ingot_copper'})
	event.remove({id: 'mekanism:nugget_copper'})
	event.remove({id: 'mekanism:ore_copper'})
	event.remove({id: 'mekanism:block_copper'})


	event.remove({output: 'mekanism:ingot_copper'})
	event.remove({output: 'iceandfire:copper_ingot'})
	event.remove({output: 'mekanism:nugget_copper'})
	event.remove({output: 'iceandfire:copper_nugget'})
	event.remove({output: 'mekanism:block_copper'})
	event.remove({output: 'iceandfire:copper_block'})
	event.remove({output: 'mekanism:ore_copper'})
	event.remove({output: 'iceandfire:copper_ore'})	

	//améthyste

	event.remove({id: 'iceandfire:amythest_ore'})
	event.remove({id: 'iceandfire:amythest_block'})	
	event.remove({id: 'iceandfire:amythest_block_to_gems'})
	event.remove({id: 'iceandfire:furnace/amythest_blasting'})
	event.remove({id: 'iceandfire:furnace/amythest'})	

	//uranium

	//osmium
	event.remove({id: 'create:smelting/ingot_osmium_compat_mekanism'})
	event.remove({id: 'create:blasting/ingot_osmium_compat_mekanism'})
	event.remove({id: 'mekanism:processing/osmium/ingot/from_ore_smelting'})
	event.remove({id: 'mekanism:processing/osmium/ingot/from_ore_blasting'})

	event.custom({
		"type": "create:milling",
		"ingredients": [
		  {
			"item": "create:crushed_osmium_ore"
		  }
		],
		"results": [
		  {
			"item": "mekanism:dust_osmium",
			"chance": 1
		  }
		],
		"processingTime": 50
	})

	//zinc
	
	event.remove({id: 'create:smelting/zinc_ingot_from_crushed'})
	event.remove({id: 'create:blasting/zinc_ingot_from_crushed'})
	event.remove({id: 'create:smelting/zinc_ingot_from_ore'})
	event.remove({id: 'create:blasting/zinc_ingot_from_ore'})
	
	event.smelting('create:zinc_ingot', 'kubejs:dust_zinc')
	event.blasting('create:zinc_ingot', 'kubejs:dust_zinc')

	event.custom({
		"type": "create:milling",
		"ingredients": [
		  {
			"item": "create:crushed_zinc_ore"
		  }
		],
		"results": [
		  {
			"item": "kubejs:dust_zinc",
			"chance": 1
		  }
		],
		"processingTime": 50
	})




	//silicium

	event.recipes.mekanismMetallurgicInfusing('kubejs:silicium_dust', '#forge:gems/quartz', 'mekanism:carbon', 50)
	event.smelting('kubejs:silicium_ingot', 'kubejs:silicium_dust')
	event.recipes.createPressing('kubejs:silicium_sheet', 'kubejs:silicium_ingot')
	
	event.custom(
		{
			"type": "tconstruct:melting",
			"conditions": [
			  {
				"value": {
				  "tag": "forge:ingots/silicium",
				  "type": "forge:tag_empty"
				},
				"type": "forge:not"
			  }
			],
			"ingredient": {
			  "tag": "forge:ingots/silicium"
			},
			"result": {
			  "fluid": "tconstruct:molten_silicium",
			  "amount": 144
			},
			"temperature": 950,
			"time": 65
		  }
	)
	
	//steel

	event.recipes.createPressing('kubejs:steel_sheet', '#forge:ingots/steel')
	
	event.custom(
		{
			"type":"createaddition:rolling",
			"input": {
				  "tag": "forge:ingots/steel"
			},
			"result": {
				"item": "kubejs:steel_rod",
				"count": 2
			}
		}
	)
	






})