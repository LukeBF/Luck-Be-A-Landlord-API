
// Import Express and assign to a variable
const express = require("express");

//Import cors
const cors = require("cors");

/**
 * Import the routers from *Controller.js and map to the app object
 */
const gameItemController = require("./controllers/GameItemsController.js")

//Import mongoose dependecy
const mongoose = require("mongoose");

if(process.env.NODE_ENV!="production")
{
    //Import dotenv environment variable
    require('dotenv').config({path:"config/Keys.env"});
}

// Create an express app object
const app = express();

//Create instruction to tell Express how to parse incoming JSON data from the client
app.use(express.json());

//Call cors
app.use(cors({
    origin:"http://127.0.0.1:5500"
}));

/**
 * Map the routers to the app object 
 * Anything with /items, load the gameItemsController
 */
app.use("/items",gameItemController);

/**
 * Create the web server that listens on a specific port from the "app" variable
 * created above
 */
//const PORT = 3000;
app.listen(process.env.PORT,()=>{
    console.log(`The server is LIVE on PORT ${process.env.PORT}`)

    //Code from mongoose to connect to the API
    //Returns a promise - async operation
    mongoose.connect(`${process.env.MONGO_DB_CONN_STRING}`, {useNewUrlParser: true, useUnifiedTopology: true})
    .then(()=>{
        console.log("The API is connected to MongoDB")
    })
    .catch((err)=>{
        console.log(`${err}`)
    })
})
