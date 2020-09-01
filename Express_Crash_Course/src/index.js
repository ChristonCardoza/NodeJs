// Calling the library
const express = require('express');
const path = require('path');

// Init server
const app = express();

const members = [
    {
        id: 1,
        name : 'Christon Cardoza',
        email : 'Christu@gmail.com',
        status : 'Active'
    },
    {
        id: 2,
        name : 'Rohan D\'Souza',
        email : 'Rohan@gmail.com',
        status : 'Active'
    },
    {
        id: 3,
        name : 'Wilfred Fernendes',
        email : 'Wilfred@gmail.com',
        status : 'Active'
    }
];

// Creating basic route
app.get('/basic',(req, res)  => {

    res.sendFile(path.join(__dirname,'public','index.html'));
});

// Basic API
app.get('/api/members',(req, res ) => {

    res.json(members)
})



// Set Static folder
app.use(express.static(path.join(__dirname,'public')));

// Declare listening port
const PORT = process.env.PORT || 5000;

// Start the Server
app.listen(PORT, () => console.log(`Server listening on port : ${PORT}`));

