// Import Express
const express = require('express')
//Create the router object
const router = express.Router()
//Import service
const gameItemService = require("../services/GameItemService.js")
//Import validation middleware
const validateMiddleware = require("../middleware/Validate.js");
const { updateOne } = require('../model/GameItemModel.js');

//ROUTE 1-View a list of game items
router.get("/",gameItemService.viewGameItems);
//router.get("/",gameItemService,viewFilteredItems);

//ROUTE 2-View an item by rarity
router.get("/:item_name",gameItemService.viewSingleItem);

//ROUTE 3-Add a new item
router.post("/",validateMiddleware.validateItems,gameItemService.createItem);

//Route 4-Update an item
router.put("/:item_name",gameItemService.updateItem)

//Route 5-Delete an item
router.delete("/:item_name",gameItemService.deleteItem)

// Export the "router" variable 
module.exports=router;