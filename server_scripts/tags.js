// Listen to item tag event
onEvent('item.tags', event => {
    
    // Get the #forge:cobblestone tag collection and add Diamond Ore to it
    //event.add('forge:cobblestone', 'minecraft:diamond_ore')
    
    // Get the #forge:cobblestone tag collection and remove Mossy Cobblestone from it
    //event.remove('forge:cobblestone', 'minecraft:mossy_cobblestone')
    
    // Get #forge:ingots/copper tag and remove all entries from it
    //event.removeAll('forge:ingots/copper')
    
    // Required for FTB Quests to check item NBT
    //event.add('itemfilters:check_nbt', 'some_item:that_has_nbt_types')
    
    // You can create new tags the same way you add to existing, just give it a name
    //event.add('forge:completely_new_tag', 'minecraft:clay_ball')
    
    // Removes all tags from this entry
    //event.removeAllTagsFrom('minecraft:stick')

    //tag des items sans texture
    event.add('notexture', ['twilightforest:twilight_oak_door', 'twilightforest:canopy_door', 'twilightforest:mangrove_door', 'twilightforest:trans_door', 'twilightforest:sort_door', 'twilightforest:trans_trapdoor', 'twilightforest:mine_door', 'twilightforest:time_door', 'twilightforest:dark_door']);


    //tag magic dust


    event.add('magic_dust', ['minecraft:glowstone_dust', 'botania:pixie_dust']);
 
    //minerais
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

    //retirer les tags items au blocks de minerais de copper non voulu
    event.removeAllTagsFrom('mekanism:copper_ore')
    event.removeAllTagsFrom('iceandfire:copper_ore')




})

//blocks tags
onEvent('block.tags', event => {
    
    //retirer les tags blocks au blocks de minerais de copper non voulu
    event.removeAllTagsFrom('mekanism:copper_ore')
    event.removeAllTagsFrom('iceandfire:copper_ore')




})