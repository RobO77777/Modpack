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
			  "count": 12
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
				"item": "create:brass_ingot",
				"count": 4
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
			  "item": 'cgm:basic_bullet',
			  "count": 20
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
				"item": "create:brass_ingot",
				"count": 6
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
				"item": "create:brass_ingot",
				"count": 6
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
				"item": "create:brass_ingot",
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
				"item": "create:brass_ingot",
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
				"item": "create:brass_ingot",
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
				"item": "create:brass_ingot",
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
				"item": "create:brass_ingot",
				"count": 3
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
				"item": "create:brass_ingot",
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
				"item": "create:brass_ingot",
				"count": 8
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
				"item": "create:brass_ingot",
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
				"item": "create:brass_ingot",
				"count": 4
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
			  "count": 14
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
				"item": "create:brass_ingot",
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
				"item": "create:brass_ingot",
				"count": 4
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
				"item": "create:brass_ingot",
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
				"item": "create:brass_ingot",
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
				"item": "create:brass_ingot",
				"count": 1
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
				"item": "create:brass_ingot",
				"count": 1
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



//create

	event.remove({id: 'quark:building/crafting/rope'})
	event.remove({id: 'create:crafting/kinetics/rope_pulley'})
	event.remove({id: 'create:crafting/materials/andesite_alloy'})	
	event.remove({id: 'create:crafting/materials/andesite_alloy_from_zinc'})	
	event.remove({id: 'create:mixing/andesite_alloy'})	
	event.remove({id: 'create:mixing/andesite_alloy_from_zinc'})	
	event.remove({id: 'create:crafting/materials/andesite_casing'})	
	


	event.recipes.createMixing('create:andesite_alloy', ['kubejs:cement', 'minecraft:andesite']).heated()
	event.recipes.createMixing('create:andesite_alloy', ['kubejs:cement', 'minecraft:andesite', Fluid.of("minecraft:lava", 100)])
	event.recipes.createMixing('2x kubejs:cement', ['minecraft:sand', 'minecraft:gravel', Fluid.of("minecraft:water", 500)])
	
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
    	R: 'createaddition:copper_spool',
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
	
	event.custom({
		"type":"createaddition:rolling",
		"input": {
			  "item": 'kubejs:steel_sheet'
		},
		"result": {
			"item": 'kubejs:steel_wire',
			"count": 2
		}
	})
		//craft 5x5
		event.custom({
			"type": "extendedcrafting:shaped_table",
			"pattern": [
			  "     ",
			  "  A  ",
			  " BSB ",
			  "BSRSB",
			  " BCB "
			],
			"key": {
			  "B": {
				"item": 'create:brass_sheet'
			  },
			  "S": {
				"item": 'createaddition:copper_spool'
			  },
			  "C": {
				"item": 'createaddition:capacitor'
			  },
			  "A": {
				"item": 'create:andesite_alloy'
			  },
			  "R": {
				"item": 'createaddition:iron_rod'
			  }
	
			},
			"result": {
			  "item": 'createaddition:electric_motor',
			  "count": 1
			}
		  }) 
	
		event.custom({
			"type": "extendedcrafting:shaped_table",
			"pattern": [
			  "     ",
			  "  A  ",
			  " BSB ",
			  "BSRSB",
			  " BCB "
			],
			"key": {
			  "B": {
				"item": 'create:iron_sheet'
			  },
			  "S": {
				"item": 'createaddition:copper_spool'
			  },
			  "C": {
				"item": 'createaddition:capacitor'
			  },
			  "A": {
				"item": 'create:andesite_alloy'
			  },
			  "R": {
				"item": 'createaddition:iron_rod'
			  }
	
			},
			"result": {
			  "item": 'createaddition:alternator',
			  "count": 1
			}
		  }) 
	
		event.custom({
			"type": "extendedcrafting:shaped_table",
			"pattern": [
			  "     ",
			  " N N ",
			  "BCSCB",
			  "BCACB",
			  "BCSCB"
			],
			"key": {
			  "B": {
				"item": 'create:brass_sheet'
			  },
			  "S": {
				"item": 'createaddition:gold_spool'
			  },
			  "C": {
				"item": 'createaddition:capacitor'
			  },
			  "A": {
				"item": 'create:brass_casing'
			  },
			  "N": {
				"item": 'createaddition:connector'
			  }
	
			},
			"result": {
			  "item": 'createaddition:accumulator',
			  "count": 1
			}
		  }) 
	
		event.custom({
			"type": "extendedcrafting:shaped_table",
			"pattern": [
			  "     ",
			  " SSS ",
			  "  A  ",
			  " CEC ",
			  " BTB "
			],
			"key": {
			  "B": {
				"item": 'create:brass_sheet'
			  },
			  "S": {
				"item": 'createaddition:copper_spool'
			  },
			  "C": {
				"item": 'createaddition:capacitor'
			  },
			  "E": {
				"item": 'create:brass_casing'
			  },
			  "A": {
				"item": 'create:andesite_alloy'
			  },
			  "T": {
				"item": 'create:electron_tube'
			  },

	
			},
			"result": {
			  "item": 'createaddition:tesla_coil',
			  "count": 1
			}
		  }) 
	
		event.custom({
			"type": "extendedcrafting:shaped_table",
			"pattern": [
			  "     ",
			  "     ",
			  "AMPPP",
			  "CC   ",
			  "     "
			],
			"key": {
			  "C": {
				"item": 'create:copper_ingot'
			  },
			  "M": {
				"item": 'create:precision_mechanism'
			  },
			  "P": {
				"item": 'create:fluid_pipe'
			  },
			  "A": {
				"item": 'create:andesite_alloy'
			  }
	
			},
			"result": {
			  "item": 'create:potato_cannon',
			  "count": 1
			}
		  }) 
	
		event.custom({
			"type": "extendedcrafting:shaped_table",
			"pattern": [
			  "     ",
			  " ANA ",
			  " ANA ",
			  "  O  ",
			  "  O  "
			],
			"key": {
			  "O": {
				"item": 'minecraft:obsidian'
			  },
			  "A": {
				"item": 'createaddition:overcharged_alloy'
			  },
			  "N": {
				"item": 'minecraft:netherite_ingot'
			  }
	
			},
			"result": {
			  "item": 'createaddition:overcharged_hammer',
			  "count": 1
			}
		  }) 
	
		event.custom({
			"type": "extendedcrafting:shaped_table",
			"pattern": [
			  " AAA ",
			  "AAPAA",
			  "APSPA",
			  "AAPAA",
			  " AAA "
			],
			"key": {
			  "P": {
				"tag": 'minecraft:planks'
			  },
			  "A": {
				"item": 'create:andesite_alloy'
			  },
			  "S": {
				"tag": 'forge:stone'
			  }
	
			},
			"result": {
			  "item": 'create:crushing_wheel',
			  "count": 2
			}
		  }) 
	
		event.custom({
			"type": "extendedcrafting:shaped_table",
			"pattern": [
			  "  I  ",
			  "  M  ",
			  " SSS ",
			  " SSS ",
			  "  H  "
			],
			"key": {
			  "H": {
				"item": 'create:brass_hand'
			  },
			  "I": {
				"item": 'create:brass_ingot'
			  },
			  "S": {
				"item": 'minecraft:stick'
			  },
			  "M": {
				"item": 'create:precision_mechanism'
			  }
	
			},
			"result": {
			  "item": 'create:extendo_grip',
			  "count": 1
			}
		  }) 

		event.custom({
			"type": "extendedcrafting:shaped_table",
			"pattern": [
			  "     ",
			  " III ",
			  "CI I ",
			  " III ",
			  "     "
			],
			"key": {
			  "C": {
				"item": 'create:brass_casing'
			  },
			  "I": {
				"item": 'create:brass_ingot'
			  }
	
			},
			"result": {
			  "item": 'create:flywheel',
			  "count": 1
			}
		  }) 
	
		event.custom({
			"type": "extendedcrafting:shaped_table",
			"pattern": [
			  "     ",
			  " SSI ",
			  " SCP ",
			  " SSI ",
			  "     "
			],
			"key": {
			  "C": {
				"item": 'create:brass_casing'
			  },
			  "S": {
				"item": 'create:brass_sheet'
			  },
			  "P": {
				"item": 'minecraft:piston'
			  },
			  "I": {
				"item": 'create:brass_ingot'
			  }
	
			},
			"result": {
			  "item": 'create:furnace_engine',
			  "count": 1
			}
		  }) 
		event.custom({
			"type": "extendedcrafting:shaped_table",
			"pattern": [
			  "     ",
			  " SSI ",
			  " SCP ",
			  " SSI ",
			  "     "
			],
			"key": {
			  "C": {
				"item": 'create:brass_casing'
			  },
			  "S": {
				"item": 'create:brass_sheet'
			  },
			  "P": {
				"item": 'minecraft:sticky_piston'
			  },
			  "I": {
				"item": 'create:brass_ingot'
			  }
	
			},
			"result": {
			  "item": 'create:furnace_engine',
			  "count": 1
			}
		  }) 
	
	
	
//mekanism

	event.remove({output: 'mekanismgenerators:wind_generator'})

	event.recipes.createCrushing('mekanism:dust_copper', ['create:copper_ingot'])
	
	event.recipes.createMixing('kubejs:crushed_bronze_ore', ['create:crushed_copper_ore', 'create:crushed_tin_ore']).superheated()
	event.recipes.createMixing('kubejs:crushed_steel_ore', ['create:crushed_iron_ore', 'minecraft:coal']).superheated()
	
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
		//bio fuel

	event.custom({"type":"mekanism:crushing","input":{"ingredient":{"tag":'forge:vegetables'}},"output":{"item":"mekanism:bio_fuel","count":5}})
	event.custom({"type":"mekanism:crushing","input":{"ingredient":{"tag":'forge:seeds'}},"output":{"item":"mekanism:bio_fuel","count":2}})
		
		//mekanism pipe

//Industrial foregoing

//Spartan

	event.remove({id: 'spartanweaponry:throwing_knife_gold'})
	event.remove({id: 'spartanweaponry:throwing_knife_netherite'})
	event.remove({id: 'spartanweaponry:throwing_knife_diamond'})
	event.remove({id: 'spartanweaponry:throwing_knife_iron'})
	
//Extended crafting

	event.remove({id: /extendedcrafting:/})
		
		//craft tables
	const tableTypes = ['basic', 'advanced', 'elite', 'ultimate'];
	const controlCircuits = ['basic_control_circuit', 'advanced_control_circuit', 'elite_control_circuit', 'ultimate_control_circuit'];
	const alloys = ['steel_casing', 'alloy_infused', 'alloy_reinforced', 'alloy_atomic'];

	for (let i = 0; i < tableTypes.length; i++) {
		let centerItem = i === 0 ? 'minecraft:crafting_table' : `extendedcrafting:${tableTypes[i - 1]}_table`;

		event.shaped(`extendedcrafting:${tableTypes[i]}_table`, [
			'IBI',
			'BCB',
			'ISI'
		], {
			C: centerItem,
			B: `mekanism:${controlCircuits[i]}`,
			S: `mekanism:${alloys[i]}`,
			I: 'mekanism:ingot_steel'
		});
	}

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

	const ids = ['gem_helmet', 'gem_chestplate', 'gem_boots', 'gem_leggings', 'collector_mk1', 'collector_mk2', 'collector_mk3', 'transmutation_table']
	ids.forEach(id => {
	event.remove({id: `projecte:${id}`})
	})

//Vanilla

	event.shapeless('4x minecraft:cobblestone', ['minecraft:stone', '#forge:dusts/glowstone'])
	event.smelting('mekanism:dust_charcoal', '#minecraft:planks')
	event.remove({id: 'create:milling/granite'})
	event.custom({
		"type": "create:crushing",
		"ingredients": [
		  {
			"item": "minecraft:granite"
		  }
		],
		"results": [
		  {
			"item": "minecraft:gravel"
		  },
		  {
			"item": "minecraft:flint",
			"chance": 0.1
		  },
		  {
			"item": "minecraft:quartz",
			"chance": 0.2
		  }
		],
		"processingTime": 250
	  })

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
	
		//crafts transistors
	event.shaped('kubejs:transistor', [
    	' S ',
   		' A ',
  		' C '
  	], {
    	A: 'create:andesite_alloy',
    	S: 'kubejs:silicium_dust',
    	C: 'createaddition:copper_wire',


  	})
	event.shaped('kubejs:transistor_advanced', [
    	' S ',
   		' A ',
  		' C '
  	], {
    	A: 'mekanism:alloy_infused',
    	S: 'kubejs:silicium_dust',
    	C: 'createaddition:copper_wire',


  	})
	event.shaped('kubejs:transistor_elite', [
    	' S ',
   		' A ',
  		' C '
  	], {
    	A: 'mekanism:alloy_reinforced',
    	S: 'kubejs:silicium_dust',
    	C: 'createaddition:copper_wire',


  	})
	event.shaped('kubejs:transistor_ultimate', [
    	' S ',
   		' A ',
  		' C '
  	], {
    	A: 'mekanism:alloy_atomic',
    	S: 'kubejs:silicium_dust',
    	C: 'createaddition:copper_wire',


  	})

	  event.shaped('kubejs:processor', [
		'TST',
		'SSS',
		'TST'
	  ], {
		T: 'kubejs:transistor',
		S: 'kubejs:steel_sheet'



	  })

	event.custom({
		"type": "extendedcrafting:shaped_table",
		"pattern": [
		  " TTT ",
		  "TSSST",
		  "TSDST",
		  "TSSST",
		  " TTT "
		],
		"key": {
		  "T": {
			"item": 'kubejs:transistor_advanced'
		  },
		  "S": {
			"item": 'kubejs:steel_sheet'
		  },
		  "D": {
			"item": 'kubejs:silicium_dust'
		  }

		},
		"result": {
		  "item": "kubejs:processor_advanced",
		  "count": 1
		}
	  }) 


	event.custom({
		"type": "extendedcrafting:shaped_table",
		"pattern": [
		  " TTTTT ",
		  "TSSSSST",
		  "TSSDSST",
		  "TSDDDST",
		  "TSSDSST",
		  "TSSSSST",
		  " TTTTT "
		],
		"key": {
			"T": {
			  "item": 'kubejs:transistor_elite'
			},
			"S": {
			  "item": 'kubejs:steel_sheet'
			},
			"D": {
			  "item": 'kubejs:silicium_dust'
			}
		},
		"result": {
		  "item": "kubejs:processor_elite",
		  "count": 1
		}
	  }) 


	event.custom({
		"type": "extendedcrafting:shaped_table",
		"pattern": [
		  " TTTTTTT ",
		  "TSSSSSSST",
		  "TSSSDSSST",
		  "TSSDDDSST",
		  "TSDDDDDST",
		  "TSSDDDSST",
		  "TSSSDSSST",
		  "TSSSSSSST",
		  " TTTTTTT "
		],
		"key": {
			"T": {
			  "item": 'kubejs:transistor_ultimate'
			},
			"S": {
			  "item": 'kubejs:steel_sheet'
			},
			"D": {
			  "item": 'kubejs:silicium_dust'
			}
		},
		"result": {
		  "item": 'kubejs:processor_ultimate',
		  "count": 1
		}
	  }) 


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
		//crafts wood
		event.shaped('minecraft:chest', [
			'PPP',
			   'P P',
			  'PPP'
		  ], {
			P: 'biomesoplenty:mahogany_planks'
	
		  })
		event.shaped('minecraft:chest', [
			'PPP',
			   'P P',
			  'PPP'
		  ], {
			P: 'biomesoplenty:willow_planks'
	
		  })
		event.shaped('minecraft:chest', [
			'PPP',
			'P P',
			'PPP'
		  ], {
			P: 'kubejs:wood_casing'
	
		  })
		event.shaped('kubejs:wood_casing', [
			'PPP',
			'P P',
			'PPP'
		  ], {
			P: 'minecraft:stick'
	
		  })

//Items filters
	event.remove({id: /itemfilters/})


//mood reborn addon

	  event.shapeless('mod_modpack:minerdimension', ['minecraft:flint_and_steel', '#forge:ores', '#magic_dust'])
	  event.shaped('mod_modpack:walkman', [
		'PPP',
		'PJP',
		'PPP'
	  ], {
		P: 'mekanism:ingot_steel',
		J: 'minecraft:jukebox'

	  })

//draconic evo
	event.remove({id: 'draconicevolution:components/draconium_ingot'})
	event.remove({id: 'draconicevolution:draconium_ingot'})
	event.recipes.createMixing('2x draconicevolution:draconium_ingot', ['2x draconicevolution:draconium_dust', 'mekanism:dust_lithium']).superheated()
	event.recipes.createMixing('2x draconicevolution:draconium_ingot', ['2x draconicevolution:draconium_dust', 'mekanism:dust_lithium', Fluid.of("minecraft:lava", 500)])


//rftools
	event.remove({id: 'rftoolsbase:machine_frame'})
//tinker TK
	event.remove({id: 'tconstruct:common/flint'})

//farmers delight

	event.remove({id: 'explorercraft:rice_straw'})
	event.remove({id: 'explorercraft:rice_straw_block'})
	event.remove({id: 'explorercraft:rice_bowl'})

})
























onEvent('item.tags', event => {
	// Get the #forge:cobblestone tag collection and add Diamond Ore to it
	// event.get('forge:cobblestone').add('minecraft:diamond_ore')

	// Get the #forge:cobblestone tag collection and remove Mossy Cobblestone from it
	// event.get('forge:cobblestone').remove('minecraft:mossy_cobblestone')
})