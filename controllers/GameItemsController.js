// Import Express
const express = require('express')
//Create the router object
const router = express.Router()
//Import models
const gameItemModel = require("../model/GameItemModel.js")

// const gameItemModel = require("../model/GameItemModel.js");
// // Call the .Router() method on the "express" variable
// const router = express.Router(); 
// //Import models
// const itemModel = require("../model/GameItemModel.js")

//ROUTE 1-View a list of game items
router.get("/",(req,res)=>{
    res.json({
        message: "A list of items in the game",
        data: gameItemModel.viewAllItems(),
        total: gameItemModel.viewAllItems().length
    })
})

//ROUTE 2-View an item by rarity
router.get("/:item_name",(req,res)=>{
    
    const itemName = req.params.item_name;
    
    const itemFound = gameItemModel.viewSingleItem(itemName)
 
    if(itemFound != undefined)
    {
        res.json({
            message: `These items were found with the name: ${itemName}`,
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
router.post("/",(req,res)=>{
    
    gameItemModel.createItem(req.body)

    res.json({
        message: "The item was added successfully",
        data: req.body
    })
})
    

// Export the "router" variable 
module.exports=router;