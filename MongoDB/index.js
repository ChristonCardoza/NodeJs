const mongoose = require('mongoose');
const express = require('express');
require('dotenv/config');
const cors = require('cors');
 
// Create a server
const app = express();

// CORS Middleware
app.use(cors());


// Connect to DB
mongoose.connect(process.env.DB_CONNECTION,
    {useNewUrlParser: true,useUnifiedTopology: true}, 
    (err) => {
        if (!err) {
            console.log('Successfully Established Connection with MongoDB');
        }
        else {
            console.log('Failed to Establish Connection with MongoDB with Error: '+ err);
        }
    }
);

// Body parser middleware
app.use(express.json());
app.use(express.urlencoded({extended : false}));


// Router Middleware
app.use('/', require('./controller/post'));



// Establish Server
PORT = process.env.PORT
app.listen(PORT,
            (err) => { 
                if(!err){
                    console.log(`Successfully Established  Server having port ${PORT}`);
                }
                else{
                    console.log('Failed to Establish Server with Error: '+ err)
                }
            }
        );
