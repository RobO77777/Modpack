onEvent('jei.hide.items', event => {
	//tag cachés
	event.hide([
		'#minecraft:notexture',
		'#forge:chests',
		'#spartanweaponry:arrows',
		'#spartanweaponry:bolts',
		'#spartanweaponry:heads'
	
	])

	//regex
	//items cachés
	event.hide(/buildersinvislights:invisilight/)
	event.hide(/apotheosis:potion_charm/)
	event.hide(/iceandfire:spawn_egg/)
	event.hide(/spawn_egg/)
	event.hide(/mekanism:creative_fluid_tank/)
	event.hide(/mekanism:creative_chemical_tank/)
	event.hide(/alchemical_bag/)
	event.hide(/securitycraft:reinforced/)
	event.hide(/explorercraft:sleeping_bag/)
	event.hide(/chiselsandbits:block_*/)
	event.hide(/nickel/)
	event.hide(/platinum/)
	event.hide(/invar/)
	event.hide(/creative/)
	event.hide(/electrum/)
	event.hide(/ceramic/)

	event.hide([
		'lucky:lucky_sword',
		'lucky:lucky_bow',
		'lucky:lucky_potion',
		'iceandfire:copper_ingot',
		'iceandfire:copper_nugget',
		'mekanism:ingot_copper',
		'mekanism:nugget_copper',
		'mekanism:copper_ore',
		'iceandfire:copper_ore',
		'mekanism:block_copper',
		'iceandfire:copper_block',
		'iceandfire:amythest_ore',
		'iceandfire:amythest_block',
		'iceandfire:amythest_gem',
		'tconstruct:copper_ore',
		'tconstruct:tinkers_bronze_nugget',
		'tconstruct:tinkers_bronze_ingot',
		'tconstruct:tinkers_bronze_block',
		'tconstruct:copper_nugget', 
		'tconstruct:copper_block',
		'tconstruct:copper_ingot',
		'quark:rope',
		'spartanweaponry:throwing_knife_gold',
		'spartanweaponry:throwing_knife_netherite',
		'spartanweaponry:throwing_knife_diamond',
		'spartanweaponry:throwing_knife_iron',
		'tconstruct:necrotic_bone',
	])





})

//ajouter des items a jei
onEvent('jei.add.items', event => {

	event.add('buildersinvislights:invisilight1')
	event.add('minecraft:chest')
	event.add(Item.of('chiselsandbits:block_bit', '{blockState:{Name:"minecraft:stone"}}'))
	event.add(Item.of('apotheosis:potion_charm', '{Damage:0,Potion:"minecraft:night_vision"}'))
	event.add('projecte:white_alchemical_bag')
	event.add('explorercraft:sleeping_bag_white')
	event.add('spartanweaponry:arrow_wood')
	event.add('spartanweaponry:arrow_diamond')
	event.add('spartanweaponry:bolt')
	event.add('spartanweaponry:bolt_spectral')
	event.add('spartanweaponry:bolt_diamond')
	event.add('calemiutils:coin_platinum')
	event.add('ceramicbucket:ceramic_bucket')
	event.add(Item.of('ceramicbucket:filled_ceramic_bucket', '{Fluid:{FluidName:"minecraft:lava",Amount:1000}}'))
	event.add(Item.of('ceramicbucket:filled_ceramic_bucket', '{Fluid:{FluidName:"minecraft:water",Amount:1000}}'))
	event.add('ceramicbucket:unfired_clay_bucket')

  })


//ajouter des infos
onEvent('jei.information', event => {
	
	
	event.add('projecte:relay_mk1', [
		'Surrounds the core of the flower at EMC. There are several versions of this block.'
	])
	event.add('projecte:relay_mk2', [
		'Surrounds the core of the flower at EMC. There are several versions of this block.'
	])
	event.add('projecte:relay_mk3', [
		'Surrounds the core of the flower at EMC. There are several versions of this block.'
	])
	event.add('projecte:condenser_mk1', [
		'Heart of the flower at EMC, stores the generated items. There are several versions of this block.'
	])
	event.add('projecte:condenser_mk2', [
		'Heart of the flower at EMC, stores the generated items. There are several versions of this block.'
	])
	event.add('projecte:collector_mk1', [
		'External part of the flower at EMC, generates EMC to the machine to duplicate items. There are several versions of this block.'
	])
	event.add('projecte:collector_mk2', [
		'External part of the flower at EMC, generates EMC to the machine to duplicate items. There are several versions of this block.'
	])
	event.add('projecte:collector_mk3', [
		'External part of the flower at EMC, generates EMC to the machine to duplicate items. There are several versions of this block.'
	])
	event.add('projecte:transmutation_table', [
		'Converts items to EMC to convert EMC into other items.'
	])
	event.add('projecte:dark_matter', [
		'Basic manufacturing item for Project:E.'
	])
	event.add('projecte:aeternalis_fuel', [
		'The ultimate item for fuel.'
	])
	event.add('projecte:watch_of_flowing_time', [
		'Changes the time. Can be used on a pedestal.'
	])



	//infos wire
	//event.add(['immersiveengineering:connector_lv', 'immersiveengineering:connector_lv_relay', 'immersiveengineering:connector_mv', 'immersiveengineering:connector_mv_relay', 'immersiveengineering:connector_hv', 'immersiveengineering:connector_hv_relay'], [
	//	'Transmits energy over long distances.'
	//])
	event.add(['mekanism:basic_universal_cable', 'mekanism:advanced_universal_cable', 'mekanism:elite_universal_cable', 'mekanism:ultimate_universal_cable'], [
		'Transmits energy over short distances.'
	])
	event.add(['mekanism:basic_mechanical_pipe', 'mekanism:advanced_mechanical_pipe', 'mekanism:elite_mechanical_pipe', 'mekanism:ultimate_mechanical_pipe'], [
		'Transmits fluid in large quantities.'
	])
	event.add(['mekanism:basic_pressurized_tube', 'mekanism:advanced_pressurized_tube', 'mekanism:elite_pressurized_tube', 'mekanism:ultimate_pressurized_tube'], [
		'Transmits gases in large quantities.'
	])
	event.add(['mekanism:basic_logistical_transporter', 'mekanism:advanced_logistical_transporter', 'mekanism:elite_logistical_transporter', 'mekanism:ultimate_logistical_transporter'], [
		'Transmits items in large quantities.'
	])


})