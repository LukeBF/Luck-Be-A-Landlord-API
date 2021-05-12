// Import Express
const express = require('express')
//Create the router object
const router = express.Router()
//Import service
const gameItemService = require("../services/GameItemService.js")
//Import validation middleware
const validateMiddleware = require("../middleware/Validate.js")

//ROUTE 1-View a list of game items
router.get("/",gameItemService.viewGameItems);

//ROUTE 2-View an item by rarity
router.get("/:item_name",gameItemService.viewSingleItem);

//ROUTE 3-Add a new item
router.post("/",validateMiddleware.validateItems,gameItemService.createItem);
    

// Export the "router" variable 
module.exports=router;