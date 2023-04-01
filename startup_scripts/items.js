// Listen to item registry event
onEvent('item.registry', event => {


 
    event.create('wild_food').displayName('Wild Food').food(foodBuilder => {
        foodBuilder.hunger(6).saturation(5.0).fastToEat(true)
    })

    event.create('silicium_dust').displayName('Silicium Dust').glow(true)
    event.create('silicium_ingot').displayName('Silicium Ingot').glow(true)
    event.create('silicium_sheet').displayName('Silicium sheet').glow(true)
    event.create('motor').displayName('Small electric motor')
    event.create('magnetite').displayName('Magnetite')


    event.create('steel_sheet').displayName('Steel sheet')
    event.create('steel_wire').displayName('Steel wire')
    event.create('steel_rod').displayName('Steel rod')

    event.create('dust_zinc').displayName('Zinc Dust')
    event.create('cement').displayName('Cement')

    //items ordi
    //event.create('ram').displayName('Basic Ram')
    //event.create('electronic_card').displayName('Basic Electronic Card')
    //event.create('hard_disk').displayName('Basic Hard Disk')
    event.create('processor').displayName('Basic Processor')
    event.create('transistor').displayName('Basic Transistor')
    //event.create('video_card').displayName('Basic Video Card')
    
    //event.create('ram_advanced').displayName('Advanced Ram')
    //event.create('electronic_card_advanced').displayName('Advanced Electronic Card')
    //event.create('hard_disk_advanced').displayName('Advanced Hard Disk')
    event.create('processor_advanced').displayName('Advanced Processor')
    event.create('transistor_advanced').displayName('Advanced Transistor')
    //event.create('video_card_advanced').displayName('Advanced Video Card')
    
    //event.create('ram_elite').displayName('Elite Ram')
    //event.create('electronic_card_elite').displayName('Elite Electronic Card')
    //event.create('hard_disk_elite').displayName('Elite Hard Disk')
    event.create('processor_elite').displayName('Elite Processor')
    event.create('transistor_elite').displayName('Elite Transistor')
    //event.create('video_card_elite').displayName('Elite Video Card')
    
    //event.create('ram_ultimate').displayName('Ultimate Ram')
    //event.create('electronic_card_ultimate').displayName('Ultimate Electronic Card')
    //event.create('hard_disk_ultimate').displayName('Ultimate Hard Disk')
    event.create('processor_ultimate').displayName('Ultimate Processor')
    event.create('transistor_ultimate').displayName('Ultimate Transistor')
    //event.create('video_card_ultimate').displayName('Ultimate Video Card')
    
    //event.create('crushed_steel_ore').displayName('Crushed steel ore')


  })