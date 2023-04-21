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

    
    event.create('cement').displayName('Cement')

    //items ordi
    event.create('processor').displayName('Basic Processor')
    event.create('transistor').displayName('Basic Transistor')

    event.create('processor_advanced').displayName('Advanced Processor')
    event.create('transistor_advanced').displayName('Advanced Transistor')

    event.create('processor_elite').displayName('Elite Processor')
    event.create('transistor_elite').displayName('Elite Transistor')

    event.create('processor_ultimate').displayName('Ultimate Processor')
    event.create('transistor_ultimate').displayName('Ultimate Transistor')

    //molten ore
   
    event.create('crushed_bronze_ore').displayName('Crushed Bronze Ore')
    event.create('crushed_steel_ore').displayName('Crushed Steel Ore')
    event.create('crushed_thallasium_ore').displayName('Crushed Thallasium Ore')

    //dust

    
    event.create('dust_zinc').displayName('Zinc Dust')
    event.create('dust_silver').displayName('Silver Dust')
    event.create('dust_thallasium').displayName('Thallasium Dust')
  })