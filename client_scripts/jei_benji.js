onEvent('jei.hide.items', event => {

    event.hide(/extendedcrafting/)
    event.hide(/patchouli/)

}) 




onEvent('jei.add.items', event => {

	event.add([
		
    'extendedcrafting:basic_auto_table',
    'extendedcrafting:advanced_auto_table',
    'extendedcrafting:elite_auto_table',
    'extendedcrafting:ultimate_auto_table',
    'extendedcrafting:elite_table',
    'extendedcrafting:basic_table',
    'extendedcrafting:advanced_table',
    'extendedcrafting:elite_table',
    'extendedcrafting:ultimate_table',

	])
  })