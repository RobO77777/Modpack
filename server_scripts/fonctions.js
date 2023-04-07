//fonction multi smelt
onEvent('recipes', event => {

    function multiSmelt(output, input, valeur, xp){


        if(valeur == 4){
            event.smelting(output, input).xp(xp)
            event.blasting(output, input).xp(xp)
            event.smoking(output, input).xp(xp)
            event.campfireCooking(output, input)
        }
        
       if(valeur == 3){
        event.smelting(output, input).xp(xp)
        event.blasting(output, input).xp(xp)
        event.smoking(output, input).xp(xp)
       }
        
        if(valeur == 2){
            event.smelting(output, input).xp(xp)
            event.blasting(output, input).xp(xp)
        }
       
        if(valeur == 1){
            event.smelting(output, input).xp(xp)
        }
        
    }

	//multiSmelt('minecraft:oak_planks', 'minecraft:stone', 2.0 , 1.0 )

    function tinkerCasting(input, qte, output, cast, consume, time) {
        e.custom({ "type": "tconstruct:casting_table", "cast": { "tag": cast }, "cast_consumed": consume, "fluid": { "name": input, "amount": qte }, "result": output, "cooling_time": time })
    }

    function tinkerCastingBasin(input, qte, output, time) {
        e.custom({ "type": "tconstruct:casting_basin", "fluid": { "name": input, "amount": qte }, "result": { "item": output }, "cooling_time": time })


    }

    function multiTiers(event) {
        const circuitTypes = ['basic', 'advanced', 'elite', 'ultimate'];
        const ingredients = ['minecraft:redstone', 'minecraft:iron_ingot', 'minecraft:gold_ingot', 'minecraft:diamond'];
    
        for (let i = 0; i < circuitTypes.length; i++) {
            
            event.shaped(`my_mod:circuit_${circuitTypes[i]}`, [
                'III',
                'IRI',
                'III'
            ], {
                I: ingredients[i],
                R: 'minecraft:redstone'
            });
        }
    }
})