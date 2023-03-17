// Listen to item registry event
onEvent('item.registry', event => {


 
    event.create('wild_food').displayName('Wild Food').food(foodBuilder => {
        foodBuilder.hunger(6).saturation(5.0).fastToEat(true)
    })

    event.create('silicium_dust').displayName('Silicium Dust')
    event.create('silicium_ingot').displayName('Silicium Ingot')
    event.create('silicium_sheet').displayName('Silicium sheet')
    event.create('motor').displayName('Small electric motor')
    event.create('magnetite').displayName('Magnetite')


    event.create('steel_sheet').displayName('Steel sheet')
    event.create('steel_wire').displayName('Steel wire')
    event.create('steel_rod').displayName('Steel rod')

    event.create('dust_zinc').displayName('Zinc Dust')
    event.create('cement').displayName('Cement')
    //event.create('crushed_steel_ore').displayName('Crushed steel ore')


  })