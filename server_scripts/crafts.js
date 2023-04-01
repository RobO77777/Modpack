onEvent('recipes', event => {

//mods

	//CGM
		
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
				"item": "create:cogwheel",
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
				"item": "create:cogwheel",
				"count": 2
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
				"item": "create:cogwheel",
				"count": 1
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
				"item": "create:cogwheel",
				"count": 1
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
				"item": "create:cogwheel",
				"count": 1
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
				"item": "create:cogwheel",
				"count": 1
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
				"item": "create:cogwheel",
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



	//projectE

	event.remove({id: 'projecte:gem_helmet'})
	event.remove({id: 'projecte:gem_chestplate'})
	event.remove({id: 'projecte:gem_boots'})
	event.remove({id: 'projecte:gem_leggings'})
	event.remove({id: 'projecte:collector_mk1'})
	event.remove({id: 'projecte:collector_mk2'})
	event.remove({id: 'projecte:collector_mk3'})
	event.remove({id: 'projecte:transmutation_table'})

	//create

	event.remove({id: 'quark:building/crafting/rope'})
	event.remove({id: 'create:crafting/kinetics/rope_pulley'})
	event.remove({id: 'create:crafting/materials/andesite_alloy'})	
	event.remove({id: 'create:crafting/materials/andesite_alloy_from_zinc'})	
	event.remove({id: 'create:mixing/andesite_alloy'})	
	event.remove({id: 'create:mixing/andesite_alloy_from_zinc'})	
	event.remove({id: 'create:crafting/materials/andesite_casing'})	
	

	event.smelting('minecraft:iron_nugget', 'minecraft:iron_ore')
	event.blasting('minecraft:iron_nugget', 'minecraft:iron_ore')
	event.smelting('create:copper_nugget', 'create:copper_ore')
	event.blasting('create:copper_nugget', 'create:copper_ore')

	event.recipes.createMixing('create:andesite_alloy', ['kubejs:cement', 'minecraft:andesite']).heated()
	event.recipes.createMixing('create:andesite_alloy', ['kubejs:cement', 'minecraft:andesite', Fluid.of("minecraft:lava", 100)])
	event.recipes.createMixing('2x kubejs:cement', ['2x minecraft:sand', '2x minecraft:gravel', Fluid.of("minecraft:water", 1000)])
	
	event.stonecutting('create:cogwheel', 'create:large_cogwheel')
	event.stonecutting('4x create:shaft', 'create:andesite_alloy')
	event.stonecutting('create:large_cogwheel', 'create:water_wheel')
	
	event.shapeless('create:andesite_alloy', ['kubejs:cement', 'minecraft:andesite', 'minecraft:lava_bucket'])
	event.shapeless('kubejs:cement', ['minecraft:sand', 'minecraft:gravel', 'minecraft:water_bucket'])
	event.shapeless('create:andesite_alloy', ['kubejs:cement', 'minecraft:andesite', Item.of('ceramicbucket:filled_ceramic_bucket', '{Fluid:{FluidName:"minecraft:lava",Amount:1000}}')])
	event.shapeless('kubejs:cement', ['minecraft:sand', 'minecraft:gravel', Item.of('ceramicbucket:filled_ceramic_bucket', '{Fluid:{FluidName:"minecraft:water",Amount:1000}}')])

	event.shaped('create:rope_pulley', [
    	' C ',
   		'SRS',
  		' I '
  	], {
    	C: 'create:andesite_casing',
    	S: 'create:shaft',
    	R: 'farmersdelight:rope',
    	I: 'create:iron_sheet',


  	})
	event.shaped('create:andesite_casing', [
    	'PPP',
   		'ALA',
  		'PPP'
  	], {
    	P: '#minecraft:planks',
    	L: '#minecraft:logs',
    	A: 'create:andesite_alloy',



  	})

	//mekanism

	event.remove({output: 'mekanismgenerators:wind_generator'})

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
	

	
	//Spartan

	event.remove({id: 'spartanweaponry:throwing_knife_gold'})
	event.remove({id: 'spartanweaponry:throwing_knife_netherite'})
	event.remove({id: 'spartanweaponry:throwing_knife_diamond'})
	event.remove({id: 'spartanweaponry:throwing_knife_iron'})
	
	//Extended crafting

	event.remove({id: /extendedcrafting:/})
	event.shaped('extendedcrafting:basic_table', [
    	'IBI',
   		'BCB',
  		'ISI'
  	], {
    	C: 'minecraft:crafting_table',
    	B: 'mekanism:basic_control_circuit',
		S: 'mekanism:steel_casing',
		I: 'mekanism:ingot_steel',

  	})
	event.shaped('extendedcrafting:advanced_table', [
    	'IBI',
   		'BCB',
  		'ISI'
  	], {
    	C: 'extendedcrafting:basic_table',
    	B: 'mekanism:advanced_control_circuit',
		S: 'mekanism:alloy_infused',
		I: 'mekanism:ingot_steel',

  	})
	event.shaped('extendedcrafting:elite_table', [
    	'IBI',
   		'BCB',
  		'ISI'
  	], {
    	C: 'extendedcrafting:advanced_table',
    	B: 'mekanism:elite_control_circuit',
		S: 'mekanism:alloy_reinforced',
		I: 'mekanism:ingot_steel',

  	})
	event.shaped('extendedcrafting:ultimate_table', [
    	'IBI',
   		'BCB',
  		'ISI'
  	], {
    	C: 'extendedcrafting:elite_table',
    	B: 'mekanism:ultimate_control_circuit',
		S: 'mekanism:alloy_atomic',
		I: 'mekanism:ingot_steel',

  	})
	  
	event.shapeless('extendedcrafting:basic_auto_table', ['mekanism:dictionary', 'mekanism:basic_energy_cube', 'extendedcrafting:basic_table'])
	event.shapeless('extendedcrafting:advanced_auto_table', ['mekanism:dictionary', 'mekanism:advanced_energy_cube', 'extendedcrafting:advanced_table'])
	event.shapeless('extendedcrafting:elite_auto_table', ['mekanism:dictionary', 'mekanism:elite_energy_cube', 'extendedcrafting:elite_table'])
	event.shapeless('extendedcrafting:ultimate_auto_table', ['mekanism:dictionary', 'mekanism:ultimate_energy_cube', 'extendedcrafting:ultimate_table'])
	
	//ice and fire

	event.remove({id: 'iceandfire:bestiary'})

	//projectE
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
	
	//Vanilla

	event.shapeless('4x minecraft:cobblestone', ['minecraft:stone', '#forge:dusts/glowstone'])
	event.smelting('mekanism:dust_charcoal', '#minecraft:planks')

	//Kubejs

		//electric motor

	event.shaped('kubejs:motor', [
    	'PRP',
   		'PWP',
  		'PMP'
  	], {
    	M: 'twilightforest:ore_magnet',
    	P: '#forge:plates/steel',
    	R: '#forge:rods/iron',
    	W: 'createaddition:copper_spool'

  	})
		//craft magnet
	event.shaped('twilightforest:ore_magnet', [
    	'M M',
   		'I I',
  		'IRI'
  	], {
		I: 'minecraft:iron_ingot',
    	M: 'kubejs:magnetite',
    	R: 'minecraft:redstone',

  	})


		//craft magnetite
	event.recipes.createMixing('kubejs:magnetite', ['mekanism:dust_iron', 'create:zinc_nugget']).superheated()
	




	//Autres crafts
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

	//crafts transistors
	event.shaped('kubejs:transistor', [
    	' P ',
   		' S ',
  		' C '
  	], {
    	P: 'mekanism:hdpe_pellet',
    	S: 'kubejs:silicium_dust',
    	C: 'createaddition:copper_wire',


  	})

	event.custom({
		"type": "extendedcrafting:shaped_table",
		"pattern": [
		  " PPP ",
		  " SSS ",
		  "  A  ",
		  " C C ",
		  " C C "
		],
		"key": {
		  "A": {
			"item": 'mekanism:alloy_infused' 
		  },
		  "P": {
			"item": 'mekanism:hdpe_pellet'
		  },
		  "S": {
			"item": 'kubejs:silicium_dust'
		  },
		  "C": {
			"item": 'createaddition:copper_wire'
		  }
		},
		"result": {
		  "item": "kubejs:transistor_advanced",
		  "count": 1
		}
	  }) 
	event.custom({
		"type": "extendedcrafting:shaped_table",
		"pattern": [
		  " PPPPP ",
		  " PSSSP ",
		  " PSSSP ",
		  " PAAAP ",
		  "  C C  ",
		  "  C C  ",
		  "  C C  "
		],
		"key": {
		  "A": {
			"item": 'mekanism:alloy_reinforced'
		  },
		  "P": {
			"item": 'mekanism:hdpe_pellet'
		  },
		  "S": {
			"item": 'kubejs:silicium_dust'
		  },
		  "C": {
			"item": 'createaddition:copper_wire'
		  }
		},
		"result": {
		  "item": "kubejs:transistor_elite",
		  "count": 1
		}
	  }) 
	event.custom({
		"type": "extendedcrafting:shaped_table",
		"pattern": [
		  " PPPPPPP ",
		  " PSSSSSP ",
		  " PSSSSSP ",
		  " PSAAASP ",
		  " PSAAASP ",
		  "  C   C  ",
		  "  C   C  ",
		  "  C   C  ",
		  "  C   C  "
		],
		"key": {
		  "A": {
			"item": 'mekanism:alloy_atomic'
		  },
		  "P": {
			"item": 'mekanism:hdpe_pellet'
		  },
		  "S": {
			"item": 'kubejs:silicium_dust'
		  },
		  "C": {
			"item": 'createaddition:copper_wire'
		  }
		},
		"result": {
		  "item": 'kubejs:transistor_ultimate',
		  "count": 1
		}
	  }) 




	//Items filters
	event.remove({id: /itemfilters/})


/*	event.custom({
		"type": "extendedcrafting:shaped_table",
		"pattern": [
		  "DLLLLLD",
		  "DGINIGD",
		  "DGINIGD",
		  "DLLLLLD"
		],
		"key": {
		  "D": {
			"tag": "forge:gems/diamond"
		  },
		  "L": {
			"tag": "forge:gems/lapis"
		  },
		  "N": {
			"item": "minecraft:nether_star"
		  },
		  "I": {
			"tag": "forge:ingots/iron"
		  },
		  "G": {
			"tag": "forge:ingots/gold"
		  }
		},
		"result": {
		  "item": "extendedcrafting:crystaltine_ingot",
		  "count": 4
		}
	  }) */


})
























onEvent('item.tags', event => {
	// Get the #forge:cobblestone tag collection and add Diamond Ore to it
	// event.get('forge:cobblestone').add('minecraft:diamond_ore')

	// Get the #forge:cobblestone tag collection and remove Mossy Cobblestone from it
	// event.get('forge:cobblestone').remove('minecraft:mossy_cobblestone')
})