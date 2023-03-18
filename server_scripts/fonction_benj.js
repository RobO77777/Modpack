//fonction milling
onEvent('recipes', event => {

    function milling(type, ingredients_item, results_item,processingTime, results_chance){

        event.custom({
            "type": type,
            "ingredients": [
              {
                "item": ingredients_item
              }
            ],
            "results": [
              {
                "item": results_item,
                "chance": results_chance
              }
            ],
            "processingTime": processingTime
        })
    }



    



})