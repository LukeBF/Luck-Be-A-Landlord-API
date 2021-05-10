// Import Express and assign to a variable
const express = require("express");
//Import controllers
const gameItemsController = require("./controllers/GameItemsController.js");

// Create an express app object
const app = express();

//Create instruction to tell Express how to parse JSON data from the client
app.use(express.json());

/**
 * Create an app.use for each of the controllers imported
 */
app.use("/items",gameItemsController)

/**
 * Create the web server that listens on a specific port from the "app" variable
 * created above
 */
const PORT = 3000;
app.listen(PORT,()=>{
    console.log(`The server is LIVE on PORT ${PORT}`)
})
