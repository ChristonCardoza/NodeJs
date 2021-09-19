const express = require('express');
const { graphqlHTTP } = require('express-graphql');
const schema = require('./schema/schema');
const mongoose = require('mongoose');
require('dotenv/config');

//Create server
const app = express();

// Graphql Middleware
app.use('/graphql',graphqlHTTP({
    schema: schema,
    graphiql : true
}));

//Establish MongoDB connection
mongoose.connect(process.env.DB_CONNECTION,
                    { useNewUrlParser: true, useUnifiedTopology: true  },
                    (err) => {
                        if (!err) {
                            console.log('Successfully Established Connection with MongoDB');
                        }
                        else {
                            console.log('Failed to Establish Connection with MongoDB with Error: '+ err);
                        }
                    }
                    );

//Establish Server
const PORT = process.env.PORT

app.listen(PORT,
    (err) => {
        if(!err){
            console.log(`Successfully Establish the connection to Server having Port : ${PORT}`);
        }
        else {
            console.log('Failed to Establish the connection with Error :' ,err );
        }
    });
