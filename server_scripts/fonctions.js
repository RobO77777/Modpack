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



    



})