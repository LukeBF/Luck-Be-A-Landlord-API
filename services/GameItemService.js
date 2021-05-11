//Import model
const gameItemModel = require("../model/GameItemModel.js")

exports.viewGameItems = (req,res)=>{
    res.json({
        message: "A list of items in the game",
        data: gameItemModel.viewAllItems(),
        total: gameItemModel.viewAllItems().length
    })
};

exports.viewSingleItem = (req,res)=>{
    
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
};

exports.createItem = (req,res)=>{
    
    gameItemModel.createItem(req.body)

    res.json({
        message: "The item was added successfully",
        data: req.body
    })
};