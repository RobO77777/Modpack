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
 

    //TK
    event.add('forge:wires', ['minecraft:string', 'kubejs:steel_wire'])
    event.add('forge:wither_bones', 'iceandfire:witherbone')

    //kubejs

    event.add('minecraft:planks', 'kubejs:wood_casing')
    event.add('tconstruct:planklike', 'kubejs:wood_casing')

    //crushed ore

    event.add('forge:crushed_ores/iron', 'create:crushed_iron_ore')

    //thallasium

    event.add('forge:dusts/thallasium', 'kubejs:dust_thallasium')
    event.add('forge:crushed_ores/thallasium', 'kubejs:crushed_thallasium_ore')

    //draconium

})

//blocks tags
onEvent('block.tags', event => {





})

//fluid tags
onEvent('fluid.tags', event => {

    event.add('forge:molten_draconium', 'mod_modpack:moltendraconium')
    event.add('forge:molten_thallasium', 'mod_modpack:moltenthallasium')
    event.add('forge:molten_silicium', 'mod_modpack:moltensilicium')



})