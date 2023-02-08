onEvent('recipes', event => {




	//craft retirés :
	
	//projectE
	event.remove({id: 'projecte:gem_helmet'})
	event.remove({id: 'projecte:gem_chestplate'})
	event.remove({id: 'projecte:gem_boots'})
	event.remove({id: 'projecte:gem_leggings'})
	event.remove({id: 'projecte:collector_mk1'})
	event.remove({id: 'projecte:collector_mk2'})
	event.remove({id: 'projecte:collector_mk3'})
	event.remove({id: 'projecte:transmutation_table'})
		
	//mekanism

	event.remove({output: 'mekanismgenerators:wind_generator'})
	

	//ingot
	//iron
	event.remove({id: 'immersiveengineering:dust_iron'})
	event.remove({output: 'immersiveengineering:dust_iron'})


	event.remove({id: 'immersiveengineering:crafting/iron_ingot_from_dust'})
	event.remove({id: 'create:smelting/iron_ingot_from_crushed'})
	event.remove({id: 'immersiveengineering:crafting/iron_ingot_from_dust_from_blasting'})
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
	event.remove({id: 'immersiveengineering:dust_gold'})
	event.remove({output: 'immersiveengineering:dust_gold'})


	event.remove({id: 'immersiveengineering:crafting/gold_ingot_from_dust'})
	event.remove({id: 'create:smelting/gold_ingot_from_crushed'})
	event.remove({id: 'immersiveengineering:crafting/gold_ingot_from_dust_from_blasting'})
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
	
	//améthyste

	event.remove({id: 'iceandfire:amythest_ore'})
	event.remove({id: 'iceandfire:amythest_block'})	
	event.remove({id: 'iceandfire:amythest_block_to_gems'})
	event.remove({id: 'iceandfire:furnace/amythest_blasting'})
	event.remove({id: 'iceandfire:furnace/amythest'})	

	//uranium

	event.remove({output: 
		['immersiveengineering:ingot_uranium',
		'immersiveengineering:storage_uranium',
		'immersiveengineering:slab_storage_uranium',
		'immersiveengineering:dust_uranium',
		'immersiveengineering:ore_uranium',
		'immersiveengineering:nugget_uranium',


		]
	})
	event.remove({id: 
		['immersiveengineering:ingot_uranium',
		'immersiveengineering:storage_uranium',
		'immersiveengineering:slab_storage_uranium',
		'immersiveengineering:dust_uranium',
		'immersiveengineering:ore_uranium',
		'immersiveengineering:nugget_uranium',


		]
	})

	//copper
	event.remove({id: 'iceandfire:copper_ingot'})
	event.remove({id: 'iceandfire:copper_nugget'})
	event.remove({id: 'iceandfire:copper_ore'})	
	event.remove({id: 'iceandfire:copper_block'})
	event.remove({id: 'mekanism:ingot_copper'})
	event.remove({id: 'mekanism:nugget_copper'})
	event.remove({id: 'mekanism:ore_copper'})
	event.remove({id: 'mekanism:block_copper'})
	event.remove({id: 'immersiveengineering:ingot_copper'})
	event.remove({id: 'immersiveengineering:nugget_copper'})
	event.remove({id: 'immersiveengineering:ore_copper'})
	event.remove({id: 'immersiveengineering:storage_copper'})

	event.remove({output: 'mekanism:ingot_copper'})
	event.remove({output: 'iceandfire:copper_ingot'})
	event.remove({output: 'mekanism:nugget_copper'})
	event.remove({output: 'iceandfire:copper_nugget'})
	event.remove({output: 'mekanism:block_copper'})
	event.remove({output: 'iceandfire:copper_block'})
	event.remove({output: 'mekanism:ore_copper'})
	event.remove({output: 'iceandfire:copper_ore'})	
	event.remove({output: 'immersiveengineering:ingot_copper'})
	event.remove({output: 'immersiveengineering:nugget_copper'})
	event.remove({output: 'immersiveengineering:ore_copper'})
	event.remove({output: 'immersiveengineering:storage_copper'})







	//craft shapless
	event.shapeless('4x minecraft:cobblestone', ['minecraft:stone', '#forge:dusts/glowstone'])

	
	//crafts projectE
	event.shaped('projecte:collector_mk1', [
    	'SGS',
   		'SNS',
  		'SFS'
  	], {
    	S: 'minecraft:glowstone',
    	F: 'projecte:dm_furnace',
		N: 'minecraft:netherite_block',
		G: 'minecraft:glass'
  	})
	
	event.shaped('projecte:collector_mk2', [
    	'BMB',
   		'BCB',
  		'BBB'
  	], {
    	B: 'projecte:dark_matter_block',
    	C: 'projecte:collector_mk1',
		M: 'projecte:dark_matter'
  	})

	event.shaped('projecte:collector_mk3', [
    	'BRB',
   		'BCB',
  		'BBB'
  	], {
    	B: 'projecte:red_matter_block',
    	C: 'projecte:collector_mk2',
		R: 'projecte:red_matter'
  	})

	event.shaped('projecte:transmutation_table', [
    	'ONO',
   		'NSN',
  		'ONO'
  	], {
    	O: 'minecraft:obsidian',
    	N: 'minecraft:netherite_ingot',
		S: 'projecte:philosophers_stone'
  	})

	event.shaped('minecraft:charcoal', [
    	'SWW',
   		'WWW',
  		'WWW'
  	], {
    	S: 'projecte:philosophers_stone',
    	W: '#minecraft:logs'
  	})
	
	//craft create

	event.stonecutting('create:cogwheel', 'create:large_cogwheel')
	event.stonecutting('4x create:shaft', 'create:andesite_alloy')
	event.stonecutting('create:large_cogwheel', 'create:water_wheel')
	

	//crafts mekanism

	event.recipes.createCrushing('mekanism:dust_copper', ['create:copper_ingot'])
	event.recipes.createMixing('mekanism:dust_bronze', ['mekanism:dust_copper', 'mekanism:dust_tin']).superheated()
	event.recipes.createMixing('mekanism:dust_steel', ['mekanism:dust_coal', 'mekanism:dust_iron']).superheated()
	event.shaped('mekanismgenerators:wind_generator', [
    	' P ',
   		'OAO',
  		'TCT'
  	], {
    	P: 'create:propeller',
    	O: 'mekanism:ingot_osmium',
    	T: 'mekanism:energy_tablet',
    	C: 'mekanism:basic_control_circuit',
    	A: 'mekanism:alloy_infused'

  	})


	//silicium

	event.recipes.mekanismMetallurgicInfusing('kubejs:silicium_dust', '#forge:gems/quartz', 'mekanism:carbon', 50)
	event.smelting('kubejs:silicium_ingot', 'kubejs:silicium_dust')


	//autres crafts

	event.shapeless('minecraft:blaze_rod', ['#forge:rods/all_metal', 'minecraft:blaze_powder', '#magic_dust'])
	event.recipes.createMixing('minecraft:blaze_rod', ['#forge:rods/all_metal', 'minecraft:blaze_powder', '#magic_dust'])
	event.shaped('minecraft:charcoal', [
    	'CCC',
   		'CCC',
  		'CCC'
  	], {
    	C: 'mekanism:dust_charcoal'
  	})

	event.shaped('mowziesmobs:earthbore_gauntlet', [
    	'DJD',
   		'DRD',
  		'DGD'
  	], {
    	D: 'minecraft:dirt',
    	G: 'bountifulbaubles:gloves_dexterity',
    	R: 'botania:rune_earth',
    	J: 'explorercraft:jade'

  	})

	  event.shaped('mowziesmobs:earth_talisman', [
    	'JE ',
   		'ESE',
  		' ET'
  	], {
    	S: 'minecraft:stick',
    	T: 'botania:terrasteel_ingot',
    	E: 'botania:life_essence',
    	J: 'explorercraft:jade'

  	})



	event.custom(
		{
			"type": "botania:runic_altar",
			"output": {
			  "item": "bountifulbaubles:bezoar",
			  "count": 2
			},
			"mana": 5200,
			"ingredients": [
			  {
				"item": "create:dough"
			  },
			  {
				"item": 'mowziesmobs:naga_fang'
			  },
			  {
				"item": "botania:mana_diamond"
			  },
			  {
				"item": "minecraft:glowstone_dust"
			  }
			]
		}

	)
	//crafts fours

	event.smelting('mekanism:dust_charcoal', '#minecraft:planks')


	//immersive
	//convoyeur
	event.remove({id: 'immersiveengineering:crafting/conveyor_basic'})
	event.shaped('8x immersiveengineering:conveyor_basic', [
    	'   ',
   		'CCC',
  		'SMS'
  	], {
    	M: 'calemiutils:motor',
    	C: 'create:belt_connector',
    	S: '#forge:ingots/steel',

  	})


	
	
	
	
	//advanced bullet
	event.remove({id: 'cgm:advanced_bullet'})
	event.custom(

		{
			"type": "cgm:workbench",
			"materials": [
			  {
				"tag": "forge:nuggets/lead",
				"count": 4
			  },
			  {
				"tag": "forge:gunpowder",
				"count": 2
			  }
			],
			"result": {
			  "item": "cgm:advanced_bullet",
			  "count": 16
			}
		  }
	)


	//assault_rifle
	event.remove({id: 'cgm:assault_rifle'})
	event.custom(

		{
			"type": "cgm:workbench",
			"materials": [
			  {
				"tag": "forge:ingots/steel",
				"count": 28
			  },
			  {
				"tag": "forge:plates/steel",
				"count": 2
			  },
			  {
				"tag": "forge:wires/steel",
				"count": 1
			  },
			  {
				"tag": "forge:ingots/iron",
				"count": 6
			  }
			],
			"result": {
			  "item": "cgm:assault_rifle"
			}
		  }
		)

	//basic bullet
	event.remove({id: 'cgm:basic_bullet'})
	event.custom(

		{
			"type": "cgm:workbench",
			"materials": [
			  {
				"tag": "forge:nuggets/lead",
				"count": 4
			  },
			  {
				"tag": "forge:gunpowder",
				"count": 1
			  }
			],
			"result": {
			  "item": 'cgm:basic_bullet'
			}
		  }
		)
	//bazooka
	event.remove({id: 'cgm:bazooka'})
	event.custom(

		{
			"type": "cgm:workbench",
			"materials": [
			  {
				"tag": "forge:ingots/steel",
				"count": 44
			  },
			  {
				"tag": "forge:plates/steel",
				"count": 4
			  },
			  {
				"tag": "forge:wires/steel",
				"count": 2
			  },
			  {
				"item": "minecraft:redstone",
				"count": 4
			  },
			  {
				"tag": "forge:dyes/red",
				"count": 1
			  }
			],
			"result": {
			  "item": "cgm:bazooka"
			}
		  }
		)
	//grenade
	event.remove({id: 'cgm:grenade'})
	event.custom(

		{
			"type": "cgm:workbench",
			"materials": [
			  {
				"tag": "forge:nuggets/steel",
				"count": 5
			  },
			  {
				"tag": "forge:plates/steel",
				"count": 2
			  },
			  {
				"tag": "forge:wires/steel",
				"count": 1
			  },
			  {
				"tag": "forge:gunpowder",
				"count": 4
			  }
			],
			"result": {
			  "item": "cgm:grenade"
			}
		  }
		)
	//grenade launcher
	event.remove({id: 'cgm:grenade_launcher'})
	event.custom(

		{
			"type": "cgm:workbench",
			"materials": [
			  {
				"tag": "forge:ingots/steel",
				"count": 32
			  },
			  {
				"tag": "forge:plates/steel",
				"count": 4
			  },
			  {
				"tag": "forge:wires/steel",
				"count": 2
			  }
			],
			"result": {
			  "item": "cgm:grenade_launcher"
			}
		  }
		)
	//heavy rifle
	event.remove({id: 'cgm:heavy_rifle'})
	event.custom(

		{
			"type": "cgm:workbench",
			"materials": [
			  {
				"tag": "forge:ingots/steel",
				"count": 36
			  },
			  {
				"tag": "forge:plates/steel",
				"count": 4
			  },
			  {
				"tag": "forge:wires/steel",
				"count": 2
			  }
			],
			"result": {
			  "item": "cgm:heavy_rifle"
			}
		  }
		)
	//light grip
	event.remove({id: 'cgm:light_grip'})
	event.custom(
		{
			"type": "cgm:workbench",
			"materials": [
			  {
				"item": "minecraft:gray_wool",
				"count": 1
			  },
			  {
				"tag": "forge:rods/steel",
				"count": 1
			  },
			  {
				"tag": "forge:nuggets/steel",
				"count": 5
			  }
			],
			"result": {
			  "item": "cgm:light_grip"
			}
		  }
		)
	//light stock
	event.remove({id: 'cgm:light_stock'})
	event.custom(
		{
			"type": "cgm:workbench",
			"materials": [
			  {
				"tag": "forge:ingots/steel",
				"count": 1
			  },
			  {
				"tag": "forge:rods/steel",
				"count": 1
			  },
			  {
				"item": "minecraft:gray_wool",
				"count": 1
			  }
			],
			"result": {
			  "item": "cgm:light_stock"
			}
		  }
		)
	//long scope
	event.remove({id: "cgm:long_scope"})
	event.custom(
		{
			"type": "cgm:workbench",
			"materials": [
			  {
				"tag": "forge:nuggets/steel",
				"count": 6
			  },
			  {
				"tag": "forge:plates/steel",
				"count": 1
			  },
			  {
				"tag": "forge:glass_panes",
				"count": 2
			  },
			  {
				"tag": "forge:dyes/black",
				"count": 1
			  }
			],
			"result": {
			  "item": "cgm:long_scope"
			}
		  }
		)
	//machine pistol
	event.remove({id: "cgm:machine_pistol"})
	event.custom(
		{
			"type": "cgm:workbench",
			"materials": [
			  {
				"tag": "forge:ingots/steel",
				"count": 20
			  },
			  {
				"tag": "forge:plates/steel",
				"count": 2
			  },
			  {
				"tag": "forge:wires/steel",
				"count": 1
			  },
			],
			"result": {
			  "item": "cgm:machine_pistol"
			}
		  }
		)
	//medium scope
	event.remove({id: "cgm:medium_scope"})
	event.custom(
		{
			"type": "cgm:workbench",
			"materials": [
			  {
				"tag": "forge:nuggets/steel",
				"count": 4
			  },
			  {
				"tag": "forge:glass_panes",
				"count": 1
			  },
			  {
				"tag": "forge:plates/steel",
				"count": 1
			  },
			  {
				"tag": "forge:dusts/redstone",
				"count": 4
			  }
			],
			"result": {
			  "item": "cgm:medium_scope"
			}
		  }
		)
	//mini gun
	event.remove({id: "cgm:mini_gun"})
	event.custom(
		{
			"type": "cgm:workbench",
			"materials": [
			  {
				"tag": "forge:ingots/steel",
				"count": 38
			  },
			  {
				"tag": "forge:rods/steel",
				"count": 4
			  },
			  {
				"tag": "forge:wires/steel",
				"count": 3
			  },
			  {
				"tag": "forge:plates/steel",
				"count": 5
			  }
			],
			"result": {
			  "item": "cgm:mini_gun"
			}
		  }
		)
	//missile
	event.remove({id: "cgm:missile"})
	event.custom(
		{
			"type": "cgm:workbench",
			"materials": [
			  {
				"tag": "forge:nuggets/lead",
				"count": 5
			  },
			  {
				"tag": "forge:nuggets/steel",
				"count": 4
			  },
			  {
				"tag": "forge:gunpowder",
				"count": 4
			  }
			],
			"result": {
			  "item": "cgm:missile"
			}
		  }
		)
	//pistol
	event.remove({id: "cgm:pistol"})
	event.custom(
		{
			"type": "cgm:workbench",
			"materials": [
			  {
				"tag": "forge:ingots/steel",
				"count": 14
			  },
			  {
				"tag": "forge:wires/steel",
				"count": 1
			  },
			  {
				"tag": "forge:plates/steel",
				"count": 1
			  }
			],
			"result": {
			  "item": "cgm:pistol"
			}
		  }
		)
	//rifle
	event.remove({id: "cgm:rifle"})
	event.custom(
		{
			"type": "cgm:workbench",
			"materials": [
			  {
				"tag": "forge:ingots/steel",
				"count": 24
			  },
			  {
				"tag": "forge:wires/steel",
				"count": 2
			  },
			  {
				"tag": "forge:plates/steel",
				"count": 2
			  }
			],
			"result": {
			  "item": "cgm:rifle"
			}
		  }
		)
	//shell
	event.remove({id: "cgm:shell"})
	event.custom(
		{
			"type": "cgm:workbench",
			"materials": [
			  {
				"tag": "forge:nuggets/lead",
				"count": 6
			  },
			  {
				"tag": "forge:nuggets/gold",
				"count": 2
			  },
			  {
				"tag": "forge:gunpowder",
				"count": 1
			  }
			],
			"result": {
			  "item": "cgm:shell",
			  "count": 24
			}
		  }
		)
	//short scope
	event.remove({id: "cgm:short_scope"})
	event.custom(
		{
			"type": "cgm:workbench",
			"materials": [
			  {
				"tag": "forge:nuggets/steel",
				"count": 2
			  },
			  {
				"tag": "forge:plates/steel",
				"count": 1
			  },
			  {
				"tag": "forge:glass_panes",
				"count": 1
			  },
			  {
				"tag": "forge:dusts/redstone",
				"count": 2
			  }
			],
			"result": {
			  "item": "cgm:short_scope"
			}
		  }
		)
	//shotgun
	event.remove({id: "cgm:shotgun"})
	event.custom(
		{
			"type": "cgm:workbench",
			"materials": [
			  {
				"tag": "forge:ingots/steel",
				"count": 22
			  },
			  {
				"tag": "forge:wires/steel",
				"count": 1
			  },
			  {
				"tag": "forge:rods/steel",
				"count": 1
			  },
			  {
				"tag": "forge:plates/steel",
				"count": 2
			  }
			],
			"result": {
			  "item": "cgm:shotgun"
			}
		  }
		)
	//silencer
	event.remove({id: "cgm:silencer"})
	event.custom(
		{
			"type": "cgm:workbench",
			"materials": [
			  {
				"tag": "forge:nuggets/steel",
				"count": 4
			  },
			  {
				"tag": "forge:plates/steel",
				"count": 1
			  },
			  {
				"tag": "forge:wool",
				"count": 2
			  }
			],
			"result": {
			  "item": "cgm:silencer"
			}
		  }
		)
	//spe grip
	event.remove({id: "cgm:specialised_grip"})
	event.custom(
		{
			"type": "cgm:workbench",
			"materials": [
			  {
				"tag": "forge:nuggets/steel",
				"count": 8
			  },
			  {
				"tag": "forge:rods/steel",
				"count": 1
			  },
			  {
				"item": "minecraft:gray_wool",
				"count": 1
			  }
			],
			"result": {
			  "item": "cgm:specialised_grip"
			}
		  }
		)
	//stun grenade
	event.remove({id: "cgm:stun_grenade"})
	event.custom(
		{
			"type": "cgm:workbench",
			"materials": [
			  {
				"tag": "forge:nuggets/iron",
				"count": 1
			  },
			  {
				"tag": "forge:plates/iron",
				"count": 1
			  },
			  {
				"tag": "forge:wires/steel",
				"count": 1
			  },
			  {
				"tag": "forge:gunpowder",
				"count": 2
			  },
			  {
				"item": "create:wheat_flour",
				"count": 4
			  }
			],
			"result": {
			  "item": "cgm:stun_grenade",
			  "count": 2
			}
		  }
		)
	//tactical stock
	event.remove({id: "cgm:tactical_stock"})
	event.custom(
		{
			"type": "cgm:workbench",
			"materials": [
			  {
				"tag": "forge:nuggets/steel",
				"count": 8
			  },
			  {
				"tag": "forge:rods/steel",
				"count": 2
			  },
			  {
				"item": "minecraft:gray_wool",
				"count": 1
			  }
			],
			"result": {
			  "item": "cgm:tactical_stock"
			}
		  }
		)
	//weighted stock
	event.remove({id: "cgm:weighted_stock"})
	event.custom(
		{
			"type": "cgm:workbench",
			"materials": [
			  {
				"tag": "forge:nuggets/steel",
				"count": 12
			  },
			  {
				"tag": "forge:rods/steel",
				"count": 3
			  },
			  {
				"item": "minecraft:gray_wool",
				"count": 1
			  }
			],
			"result": {
			  "item": "cgm:weighted_stock"
			}
		  }
		)
	//workbench
	event.remove({id: "cgm:workbench"})
	event.custom(
		{
			"type": "minecraft:crafting_shaped",
			"pattern": [
			  "CCC",
			  "III",
			  "I I"
			],
			"key": {
			  "C": {
				"item": "minecraft:light_gray_concrete"
			  },
			  "I": {
				"tag": "forge:ingots/steel"
			  }
			},
			"result": {
			  "item": "cgm:workbench"
			}
		  }
		)








})
























onEvent('item.tags', event => {
	// Get the #forge:cobblestone tag collection and add Diamond Ore to it
	// event.get('forge:cobblestone').add('minecraft:diamond_ore')

	// Get the #forge:cobblestone tag collection and remove Mossy Cobblestone from it
	// event.get('forge:cobblestone').remove('minecraft:mossy_cobblestone')
})