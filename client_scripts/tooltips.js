onEvent('item.tooltip', tooltip => {
    // Add tooltip to all of these items
    //tooltip.add(['quark:backpack', 'quark:magnet', 'quark:crate'], 'Added by Quark Oddities')
    // You can also use any ingredient except #tag (due to tags loading much later than client scripts)
    //tooltip.add(/refinedstorage:red_/, 'Can be any color')
    // Multiple lines with an array []. You can also escape ' by using other type of quotation marks
    //tooltip.add('thermal:latex_bucket', ["Not equivalent to Industrial Foregoing's Latex", 'Line 2 text would go here'])
    // Use some data from the client to decorate this tooltip. name returns a component so we just append that.
    //tooltip.add('minecraft:skeleton_skull', Text.of('This used to be ').append(Client.player.name).append("'s head"))
    
    //tooltip.addAdvanced('thermal:latex_bucket', (item, advanced, text) => {
      //text.add(0, Text.of('Hello')) // Adds text in first line, pushing the items name down a line. If you want the line below the item name, the index must be 1
    
    //tooltip.add('minecraft:bedrock', 'This is Bedrock')

    
    
    
    
})