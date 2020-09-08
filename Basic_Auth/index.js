// Import the Libraries
const express = require('express');
require('dotenv/config');
const mongoose = require('mongoose');

// Create a Server
const app = express();

// Body Parser
app.use(express.json());
app.use(express.urlencoded({extended : false}));

// Configure Routes
app.use('/api/user',require('./controller/router'));

// Connect to Mongodb
mongoose.connect(process.env.DB_CONNECT,
    { useNewUrlParser: true,useUnifiedTopology: true },
    ( error) =>{
        if (!error){
            console.log( `Successfuly connected to Mongo server`);
        }
        else {
            console.log( `Error while connecting to Mongo server : ${error}`);
        }
});

// Initiate the Server
const PORT = process.env.PORT;

app.listen(PORT, ( error) =>{
    if (!error){
        console.log( `Successfuly connected to server with port ${PORT}`);
    }
    else {
        console.log( `Error while connecting to server with port ${PORT} : ${error}`);
    }
});