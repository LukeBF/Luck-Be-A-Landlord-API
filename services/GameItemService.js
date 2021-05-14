//Import model
const itemModel = require("../model/GameItemModel.js");

exports.viewGameItems = (req,res)=>{
    
        //Get an array of documents
        itemModel.find() //.find() returns a promise (asynchronous code)

        .then((items)=>{
            res.json({
                message: "A list of items in the game",
                data:items,
                total:items.length
            })

        })
        .catch((err)=>{
        
            res.status(500).json({
                message: `Error ${err}`
            })
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
    
    const createdItem = req.body;
    
    //Add a new item into the database
    const newItem = new itemModel(createdItem);

    newItem.save() //Returns a promise
 
    .then((item)=>{
        res.json({
            message:"The item was created",
            data:item
        })
    })
    .catch((err)=>{
        
        res.status(500).json({
            message: `Error ${err}`
        })
    })
    
};

exports.updateItem = (req,res)=>{

};

exports.deleteItem = (req,res)=>{

};