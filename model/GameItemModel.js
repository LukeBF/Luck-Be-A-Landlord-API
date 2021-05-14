//FAKE DATABASE OF ITEMS
// Create an object to hold the fake database
// const gameItemModel =
// {
//     itemsDB:
//     [
//         {
//             id:1,
//             name:"Shiny Pebble",
//             rarity:"common",
//             description:"You are 1.1x more likely to find Uncommon, Rare, and Very Rare symbols.",
//             goldPerTurn:0
//         },
//         {
//             id:2,
//             name:"Magpie",
//             rarity:"common",
//             description:"Gives 9 gold every 4 spins",
//             goldPerTurn:-1
//         },
//         {
//             id:3,
//             name:"Bowling Ball",
//             rarity:"rare",
//             description:"Gives 3 gold for every spin",
//             goldPerTurn:3
//         },
//         {
//             id:4,
//             name:"Black Pepper",
//             rarity:"common",
//             description:"Gives 1 gold whenever a symbol is destroyed",
//             goldPerTurn:1
//         },
//         {
//             id:5,
//             name:"Goldilocks",
//             rarity:"uncommon",
//             description:"Destroyed and gives 50 gold if you have at least 3 bears",
//             goldPerTurn:50
//         },
//         {
//             id:6,
//             name:"Horseshoe",
//             rarity:"uncommon",
//             description:"Gives 2 gold for every spin",
//             goldPerTurn:2
//         },
//         {
//             id:7,
//             name:"Four Leav Clover",
//             rarity:"very rare",
//             description:"Gives 4 gold for every spin",
//             goldPerTurn:4
//         }
//     ],

//     viewAllItems()
//     {
//         return this.itemsDB;
//     },

//     viewSingleItem(itemName)
//     {
//         return this.itemsDB.find(item=>item.name===itemName)
//     },

//     createItem(item)
//     {
//         this.itemsDB.push(item)
//     }

// }

//Import schema from mongoose
const mongoose = require("mongoose");
const { Schema } = mongoose;

const itemSchema = new Schema({

    name:
    {
        type:String,
        required:true
    },
    imagePath:
    {
        type:String,
        default:"default.jpg"
    },
    rarity:
    {
        type:String,
        required:true
    },
    description:
    {
        type:String,
        required:true
    },
    goldPerTurn:
    {
        type:Number,
        required:true
    },
    dateCreated:
    {
       type:Date,
       default:Date.now()
    }

});

//'item' = the name of the collection
const itemModel = mongoose.model('item',itemSchema);

module.exports = itemModel;