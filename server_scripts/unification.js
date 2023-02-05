onEvent('item.tags', event => {
    
    //retirer les tags aux items de copper non voulu
    event.removeAllTagsFrom([
    'createaddition:copper_wire', 
    'create:copper_sheet',
    'immersiveengineering:dust_copper', 
    'immersiveengineering:dust_steel', 
    'iceandfire:copper_ingot', 
    'immersiveengineering:ingot_copper',
    'mekanism:ingot_copper',
    'iceandfire:copper_nugget',
    'immersiveengineering:nugget_copper',
    'mekanism:nugget_copper'


    ])
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





})