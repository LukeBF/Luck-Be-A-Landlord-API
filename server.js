
// Import Express and assign to a variable
const express = require("express");

/**
 * Import the routers from *Controller.js and map to the app object
 */
const gameItemController = require("./controllers/GameItemsController.js")

// Create an express app object
const app = express();

//Create instruction to tell Express how to parse incoming JSON data from the client
app.use(express.json());

/**
 * Map the routers to the app object 
 * Anything with /items, load the gameItemsController
 */
app.use("/items",gameItemController);

/**
 * Create the web server that listens on a specific port from the "app" variable
 * created above
 */
const PORT = 3000;
app.listen(PORT,()=>{
    console.log(`The server is LIVE on PORT ${PORT}`)
})
