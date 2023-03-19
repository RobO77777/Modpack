//fonction milling
onEvent('recipes', event => {


    // Fonction milling
    function milling(ingredients_item, results_item,processingTime, results_chance){

        event.custom({
            "type": "create:milling",
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
    // milling('minecraft:stripped_jungle_log', 'minecraft:andesite',2.0, 10.0)

    



})