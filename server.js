//FAKE DATABASE OF ITEMS
const itemsDB=
[
    {
        name:"Shiny Pebble",
        rarity:"common",
        description:"You are 1.1x more likely to find Uncommon, Rare, and Very Rare symbols.",
        goldPerTurn:0
    },
    {
        name:"Magpie",
        rarity:"common",
        description:"Gives 9 gold every 4 spins",
        goldPerTurn:-1
    },
    {
        name:"Bowling Ball",
        rarity:"rare",
        description:"Gives 3 gold for every spin",
        goldPerTurn:3
    },
    {
        name:"Black Pepper",
        rarity:"common",
        description:"Gives 1 gold whenever a symbol is destroyed",
        goldPerTurn:1
    },
    {
        name:"Goldilocks",
        rarity:"uncommon",
        description:"Destroyed and gives 50 gold if you have at least 3 bears",
        goldPerTurn:50
    },
    {
        name:"Horseshoe",
        rarity:"uncommon",
        description:"Gives 2 gold for every spin",
        goldPerTurn:2
    },
    {
        name:"Four Leav Clover",
        rarity:"very rare",
        description:"Gives 4 gold for every spin",
        goldPerTurn:4
    }
]

// Import Express and assign to a variable
const express = require("express");

// Create an express app object
const app = express();

//Create instruction to tell Express how to parse incoming JSON data from the client
app.use(express.json());

/**
 * Create an app.use for each of the controllers imported
 */
//app.use("/items",gameItemsController)

//ROUTE 1-View a list of game items
app.get("/items",(req,res)=>{
    res.json({
        message: "A list of items in the game",
        data: itemsDB,
        total: itemsDB.length
    })
})

//ROUTE 2-View an item by rarity
app.get("/items/:item_name",(req,res)=>{
    
    const itemName = req.params.item_name;
    
    const itemFound = itemsDB.find(item=>item.name===itemName)
 
    if(itemFound != undefined)
    {
        res.json({
            message: `These items were found with the name: ${itemFound.item_name}`,
            data: itemFound
        })
    }
    else
    {
        res.status(404).json({
            message: "The requested item could not be found"
        })
    }
})

//ROUTE 3-Add a new item
app.post("/items",(req,res)=>{
    itemsDB.push(req.body)

    res.json({
        message: "The item was added successfully",
        data: req.body
    })
})


/**
 * Create the web server that listens on a specific port from the "app" variable
 * created above
 */
const PORT = 3000;
app.listen(PORT,()=>{
    console.log(`The server is LIVE on PORT ${PORT}`)
})
