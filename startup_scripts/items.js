// Listen to item registry event
onEvent('item.registry', event => {


 
    event.create('wild_food').displayName('Wild Food').food(foodBuilder => {
        foodBuilder.hunger(6).saturation(5.0).fastToEat(true)
    })

    event.create('silicium_dust').displayName('Silicium Dust')
    event.create('silicium_ingot').displayName('Silicium Ingot')
    event.create('silicium_plate').displayName('Silicium Plate')



    // You can chain builder methods as much as you like
    //event.create('test_item_2').maxStackSize(16).glow(true)
    
    // You can specify item type as 2nd argument in create(), some types have different available methods
    //event.create('custom_sword', 'sword').tier('diamond').attackDamageBaseline(10.0)
  })