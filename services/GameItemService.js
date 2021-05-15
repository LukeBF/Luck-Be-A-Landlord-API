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
                message: `Error occured ${err}`
            })
        })

};

exports.viewSingleItem = (req,res)=>{
    
    itemModel.findOne({name:req.params.item_name})
    
    //const itemName = req.params.item_name;
    
    //const itemFound = gameItemModel.viewSingleItem(itemName)
 
   .then((item)=>{
        
        if(item)
        {
            res.json({
                message: `Items found matching ID: ${req.params.item_name}`,
                data: item
            }) 
        }
        else
        {
            res.status(404).json({
                message: `Item with ID ${req.params.item_name} was not found`
            })
        }
   })
   .catch((err)=>{
       res.status(500).json({
           message: `Error occured ${err}`
       })
   })
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

    const updatedGameItem = req.body

    //The third parameter shows the JSON with the updated data
    //itemModel.findByIdAndUpdate(req.params.id,updatedName,{new:true})

    itemModel.findOneAndUpdate({name:req.params.item_name},updatedGameItem,{new:true})

    .then((item)=>{

        if(item)
        {
            res.json({
                message: `Item with ID: ${req.params.id} updated successfully`,
                data: item
            })
        }
        else
        {
            res.status(404).json({
                message: `Item with ID: ${req.params.id} not found`
            })
        }
    })
    .catch((err)=>{
        
        res.status(500).json({
            message: `Error ${error}`
        })
    })
};

exports.deleteItem = (req,res)=>{

    //itemModel.findByI({_id:req.params.id})

    //itemModel.findByIdAndRemove(req.params.id)
    itemModel.findOneAndRemove({name:req.params.item_name})

    .then((item)=>{
        
        if(item)
        {
            res.json({
                message: `Item deleted successfully`
            })
        }
        else
        {
            res.status(404).json({
                message: `Item with ID: ${req.params.id} not found`
            })
        }
    })
    .catch((err)=>{
        
        res.status(500).json({
            message: `Error ${error}`
        })
    })

};