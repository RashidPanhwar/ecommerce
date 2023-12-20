// const dotenv = require('dotenv').config({path: "./config/.evn"});
const mongoose = require('mongoose');
const app = require('./app');
const connectDatabase = require('./config/database');

process.on('uncaughtException', (e) => {
    console.log("Shutting down server due to error" + e.message);
});
if(process.env.NODE_ENV !== 'PRODUCTION') {
     require('dotenv').config({path: "./config/.env"});
}


// database connection function
connectDatabase();



// Starting Server
const server = app.listen(process.env.PORT, () => {
    console.log("Server Listing at port " + process.env.PORT);
})


// Handling Exceptions
process.on("unhandledError", (e) => {
    server.close( () => {
        process.exit(1);
    })
})