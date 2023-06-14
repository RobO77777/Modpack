/********************************Unification*********************************/

onEvent('item.tags', event => {
    
    //retirer les tags aux items de copper non voulu
    event.removeAllTagsFrom([
    'iceandfire:copper_ingot', 
    'mekanism:ingot_copper',
    'iceandfire:copper_nugget',
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
        'iceandfire:copper_ore',
        'mekanism:copper_ore'




    ])
	//marbre
    event.removeAllTagsFrom([
		/quark:marble/,
		/quark:polished_marble/,



    ])
    //retirer les tags blocks au blocks de minerais de copper non voulu
    event.removeAllTagsFrom('mekanism:copper_ore')
    event.removeAllTagsFrom('iceandfire:copper_ore')
})

onEvent('recipes', event => {

//ingots
	
	//iron

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

	event.smelting('minecraft:iron_nugget', 'minecraft:iron_ore')
	event.blasting('minecraft:iron_nugget', 'minecraft:iron_ore')


	//gold

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
	event.smelting('minecraft:gold_nugget', 'minecraft:gold_ore')
	event.blasting('minecraft:gold_nugget', 'minecraft:gold_ore')
	event.smelting('minecraft:gold_nugget', 'mythicbotany:gold_ore')
	event.blasting('minecraft:gold_nugget', 'mythicbotany:gold_ore')

	//copper

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

	event.smelting('create:copper_nugget', 'create:copper_ore')
	event.blasting('create:copper_nugget', 'create:copper_ore')
	
	//améthyste

	event.remove({id: 'iceandfire:amythest_ore'})
	event.remove({id: 'iceandfire:amythest_block'})	
	event.remove({id: 'iceandfire:amythest_block_to_gems'})
	event.remove({id: 'iceandfire:furnace/amythest_blasting'})
	event.remove({id: 'iceandfire:furnace/amythest'})	

	//uranium
	
	event.remove({id: 'mekanism:processing/uranium/ingot/from_ore_blasting'})
	event.remove({id: 'mekanism:processing/uranium/ingot/from_ore_smelting'})

	event.smelting('mekanism:nugget_uranium', 'mekanism:uranium_ore')
	event.blasting('mekanism:nugget_uranium', 'mekanism:uranium_ore')
	
	//osmium

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

	event.smelting('mekanism:nugget_osmium', 'mekanism:osmium_ore')
	event.blasting('mekanism:nugget_osmium', 'mekanism:osmium_ore')

	//zinc
	
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

	
	event.custom({"type":"mekanism:enriching","input":{"ingredient":{"tag":"forge:ores/zinc"}},"output":{"item":"kubejs:dust_zinc","count":2}})
	
	event.smelting('create:zinc_nugget', 'create:zinc_ore')
	event.blasting('create:zinc_nugget', 'create:zinc_ore')

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
			  "fluid": "mod_modpack:moltensilicium",
			  "amount": 144
			},
			"temperature": 950,
			"time": 65
		  }
	)
	event.custom(
		{
			"type": "tconstruct:melting",
			"conditions": [
			  {
				"value": {
				  "tag": "forge:dusts/silicium",
				  "type": "forge:tag_empty"
				},
				"type": "forge:not"
			  }
			],
			"ingredient": {
			  "tag": "forge:dusts/silicium"
			},
			"result": {
			  "fluid": "mod_modpack:moltensilicium",
			  "amount": 144
			},
			"temperature": 950,
			"time": 65
		  }
	)

	event.custom(
		{
			"type": "tconstruct:melting",
			"conditions": [
			  {
				"value": {
				  "tag": "forge:plates/silicium",
				  "type": "forge:tag_empty"
				},
				"type": "forge:not"
			  }
			],
			"ingredient": {
			  "tag": "forge:plates/silicium"
			},
			"result": {
			  "fluid": "mod_modpack:moltensilicium",
			  "amount": 144
			},
			"temperature": 950,
			"time": 65
		  }
	)
	
	
	event.custom({
		"type": "tconstruct:casting_table",
		"conditions": [
		  {
			"value": {
			  "tag": "forge:ingots/silicium",
			  "type": "forge:tag_empty"
			},
			"type": "forge:not"
		  }
		],
		"cast": {
		  "tag": "tconstruct:casts/multi_use/ingot"
		},
		"fluid": {
		  "tag": "forge:molten_silicium",
		  "amount": 144
		},
		"result": {
		  "item": "kubejs:silicium_ingot"
		},
		"cooling_time": 43
	  })

	event.custom({
		"type": "tconstruct:casting_table",
		"conditions": [
		  {
			"value": {
			  "tag": "forge:plates/silicium",
			  "type": "forge:tag_empty"
			},
			"type": "forge:not"
		  }
		],
		"cast": {
		  "tag": "tconstruct:casts/multi_use/plate"
		},
		"fluid": {
		  "tag": "forge:molten_silicium",
		  "amount": 144
		},
		"result": {
		  "item": "kubejs:silicium_sheet"
		},
		"cooling_time": 43
	  })
	//steel

	event.recipes.createPressing('kubejs:steel_sheet', '#forge:ingots/steel')
	event.smelting('mekanism:ingot_steel', 'kubejs:crushed_steel_ore')
	event.blasting('mekanism:ingot_steel', 'kubejs:crushed_steel_ore')
	
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
	


	//bronze
	event.smelting('mekanism:ingot_bronze', 'kubejs:crushed_bronze_ore')
	event.blasting('mekanism:ingot_bronze', 'kubejs:crushed_bronze_ore')

	//tin
	event.remove({id: 'mekanism:processing/tin/ingot/from_ore_smelting'})
	event.remove({id: 'mekanism:processing/tin/ingot/from_ore_blasting'})

	event.recipes.createCrushing('mekanism:dust_tin', ['create:crushed_tin_ore'])
	event.custom({
		"type": "create:milling",
		"ingredients": [
		  {
			"item": 'create:crushed_tin_ore'
		  }
		],
		"results": [
		  {
			"item": 'mekanism:dust_tin',
			"chance": 1
		  }
		],
		"processingTime": 50
	})

	event.smelting('mekanism:nugget_tin', 'mekanism:tin_ore')
	event.blasting('mekanism:nugget_tin', 'mekanism:tin_ore')

	//lead
	event.remove({id: 'mekanism:processing/lead/ingot/from_ore_smelting'})
	event.remove({id: 'mekanism:processing/lead/ingot/from_ore_blasting'})

	event.recipes.createCrushing('mekanism:dust_lead', ['create:crushed_lead_ore'])
	event.custom({
		"type": "create:milling",
		"ingredients": [
		  {
			"item": 'create:crushed_lead_ore'
		  }
		],
		"results": [
		  {
			"item": 'mekanism:dust_lead',
			"chance": 1
		  }
		],
		"processingTime": 50
	})
	event.smelting('mekanism:nugget_lead', 'mekanism:lead_ore')
	event.blasting('mekanism:nugget_lead', 'mekanism:lead_ore')

	//silver

	event.remove({id: 'iceandfire:furnace/silver_ingot'})
	event.remove({id: 'iceandfire:furnace/silver_ingot_blasting'})
	event.recipes.createCrushing('kubejs:dust_silver', ['create:crushed_silver_ore'])
	event.custom({
		"type": "create:milling",
		"ingredients": [
		  {
			"item": 'create:crushed_silver_ore'
		  }
		],
		"results": [
		  {
			"item": 'kubejs:dust_silver',
			"chance": 1
		  }
		],
		"processingTime": 50
	})
	event.smelting('iceandfire:silver_ingot', 'kubejs:dust_silver')
	event.blasting('iceandfire:silver_ingot', 'kubejs:dust_silver')
	
	event.custom({"type":"mekanism:enriching","input":{"ingredient":{"tag":"forge:ores/silver"}},"output":{"item":"kubejs:dust_silver","count":2}})
		
	event.smelting('iceandfire:silver_nugget', 'iceandfire:silver_ore')
	event.blasting('iceandfire:silver_nugget', 'iceandfire:silver_ore')

	//thallasium
	
	event.remove({id: 'betterendforge:thallasium_ingot_from_blasting'})
	event.remove({id: 'betterendforge:thallasium_ingot_from_smelting'})
	
	event.recipes.createCrushing('kubejs:crushed_thallasium_ore', ['betterendforge:thallasium_ore'])
	event.custom({
		"type": "create:milling",
		"ingredients": [
		  {
			"item": 'betterendforge:thallasium_ore'
		  }
		],
		"results": [
		  {
			"item": 'kubejs:crushed_thallasium_ore',
			"chance": 1
		  }
		],
		"processingTime": 50
	})
	event.recipes.createCrushing('kubejs:dust_thallasium', ['kubejs:crushed_thallasium_ore'])
	event.custom({
		"type": "create:milling",
		"ingredients": [
		  {
			"item": 'kubejs:crushed_thallasium_ore'
		  }
		],
		"results": [
		  {
			"item": 'kubejs:dust_thallasium',
			"chance": 1
		  }
		],
		"processingTime": 50
	})

	event.custom({"type":"mekanism:enriching","input":{"ingredient":{"tag":"forge:ores/thallasium"}},"output":{"item":"kubejs:dust_thallasium","count":2}})
	
	event.smelting('betterendforge:thallasium_ingot', 'kubejs:dust_thallasium')
	event.blasting('betterendforge:thallasium_ingot', 'kubejs:dust_thallasium')
	event.smelting('betterendforge:thallasium_ingot', 'kubejs:crushed_thallasium_ore')
	event.blasting('betterendforge:thallasium_ingot', 'kubejs:crushed_thallasium_ore')
	event.smelting('betterendforge:thallasium_nugget', 'betterendforge:thallasium_ore')
	event.blasting('betterendforge:thallasium_nugget', 'betterendforge:thallasium_ore')

	event.custom(
		{
			"type": "tconstruct:melting",
			"conditions": [
			  {
				"value": {
				  "tag": "forge:ingots/thallasium",
				  "type": "forge:tag_empty"
				},
				"type": "forge:not"
			  }
			],
			"ingredient": {
			  "tag": "forge:ingots/thallasium"
			},
			"result": {
			  "fluid": "mod_modpack:moltenthallasium",
			  "amount": 144
			},
			"temperature": 950,
			"time": 65
		  }
	)
	event.custom(
		{
			"type": "tconstruct:melting",
			"conditions": [
			  {
				"value": {
				  "tag": "forge:dusts/thallasium",
				  "type": "forge:tag_empty"
				},
				"type": "forge:not"
			  }
			],
			"ingredient": {
			  "tag": "forge:dusts/thallasium"
			},
			"result": {
			  "fluid": "mod_modpack:moltenthallasium",
			  "amount": 144
			},
			"temperature": 950,
			"time": 65
		  }
	)
	event.custom(
		{
			"type": "tconstruct:melting",
			"conditions": [
			  {
				"value": {
				  "tag": "forge:crushed_ores/thallasium",
				  "type": "forge:tag_empty"
				},
				"type": "forge:not"
			  }
			],
			"ingredient": {
			  "tag": "forge:crushed_ores/thallasium"
			},
			"result": {
			  "fluid": "mod_modpack:moltenthallasium",
			  "amount": 144
			},
			"temperature": 950,
			"time": 65
		  }
	)
	event.custom(
		{
			"type": "tconstruct:melting",
			"conditions": [
			  {
				"value": {
				  "tag": "forge:nuggets/thallasium",
				  "type": "forge:tag_empty"
				},
				"type": "forge:not"
			  }
			],
			"ingredient": {
			  "tag": "forge:nuggets/thallasium"
			},
			"result": {
			  "fluid": "mod_modpack:moltenthallasium",
			  "amount": 16
			},
			"temperature": 700,
			"time": 65
		  }
	)

	event.custom(
		{
			"type": "tconstruct:melting",
			"conditions": [
			  {
				"value": {
				  "tag": "forge:ores/thallasium",
				  "type": "forge:tag_empty"
				},
				"type": "forge:not"
			  }
			],
			"ingredient": {
			  "tag": "forge:ores/thallasium"
			},
			"result": {
			  "fluid": "mod_modpack:moltenthallasium",
			  "amount": 144
			},
			"temperature": 1450,
			"time": 194
		  }
	)
	event.custom({
		"type": "tconstruct:casting_table",
		"conditions": [
		  {
			"value": {
			  "tag": "forge:ingots/thallasium",
			  "type": "forge:tag_empty"
			},
			"type": "forge:not"
		  }
		],
		"cast": {
		  "tag": "tconstruct:casts/multi_use/ingot"
		},
		"fluid": {
		  "tag": "forge:molten_thallasium",
		  "amount": 144
		},
		"result": {
		  "item": "betterendforge:thallasium_ingot"
		},
		"cooling_time": 43
	  })

	event.custom({
		"type": "tconstruct:casting_table",
		"conditions": [
		  {
			"value": {
			  "tag": "forge:nuggets/thallasium",
			  "type": "forge:tag_empty"
			},
			"type": "forge:not"
		  }
		],
		"cast": {
		  "tag": "tconstruct:casts/multi_use/nugget"
		},
		"fluid": {
		  "tag": "forge:molten_thallasium",
		  "amount": 16
		},
		"result": {
		  "item": "betterendforge:thallasium_nugget"
		},
		"cooling_time": 22
	  })

	  event.custom({
		"type": "tconstruct:casting_basin",
		"conditions": [
		  {
			"value": {
			  "item": "betterendforge:thallasium_block",
			  "type": "forge:tag_empty"
			},
			"type": "forge:not"
		  }
		],
		"fluid": {
		  "tag": "forge:molten_thallasium",
		  "amount": 1296
		},
		"result": {
		  "item": 'betterendforge:thallasium_block'
		},
		"cooling_time": 194
	  })
	
   //draconium
   event.custom(
	{
		"type": "tconstruct:melting",
		"conditions": [
		  {
			"value": {
			  "tag": "forge:ingots/draconium",
			  "type": "forge:tag_empty"
			},
			"type": "forge:not"
		  }
		],
		"ingredient": {
		  "tag": "forge:ingots/draconium"
		},
		"result": {
		  "fluid": "mod_modpack:moltendraconium",
		  "amount": 144
		},
		"temperature": 950,
		"time": 65
	  }
)
	event.custom({
		"type": "tconstruct:casting_table",
		"conditions": [
		  {
			"value": {
			  "tag": "forge:ingots/draconium",
			  "type": "forge:tag_empty"
			},
			"type": "forge:not"
		  }
		],
		"cast": {
		  "tag": "tconstruct:casts/multi_use/ingot"
		},
		"fluid": {
		  "tag": "forge:molten_draconium",
		  "amount": 144
		},
		"result": {
		  "item": "draconicevolution:draconium_ingot"
		},
		"cooling_time": 43
	  })
	  event.custom({
		"type": "tconstruct:casting_basin",
		"conditions": [
		  {
			"value": {
			  "tag": "forge:storage_blocks/draconium",
			  "type": "forge:tag_empty"
			},
			"type": "forge:not"
		  }
		],
		"fluid": {
		  "tag": "forge:molten_draconium",
		  "amount": 1296
		},
		"result": {
		  "tag": "forge:storage_blocks/draconium"
		},
		"cooling_time": 194
	  })
})