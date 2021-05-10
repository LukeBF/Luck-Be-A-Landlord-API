// Import Express
const express = require("express");
// Call the .Router() method on the "express" variable
const router = express.Router(); 
//Import models
const itemModel = require("../model/GameItemModel.js")

//ROUTES AND ENDPOINTS FOR THE API
router.get("/",(req,res)=>{
    res.json({
        message:"A list of all the game items",
        data: itemModel.viewAllItems(),
        total: itemModel.viewAllItems().length
    })
});



// Export the "router" variable 
module.exports=router;