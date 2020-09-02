// Calling the library
const express = require('express');
const path = require('path');
const logger = require('./Middleware/Logger');

// Init server
const app = express();

// // Middleware Function
// const logger = (req, rs,next) => {
//     console.log(`${req.protocol}://${req.get('host')}${req.originalUrl}:${moment().format()}`);
//     next();
// }

// Init Middleware
app.use(logger);

// const members = [
//     {
//         id: 1,
//         name : 'Christon Cardoza',
//         email : 'Christu@gmail.com',
//         status : 'Active'
//     },
//     {
//         id: 2,
//         name : 'Rohan D\'Souza',
//         email : 'Rohan@gmail.com',
//         status : 'Active'
//     },
//     {
//         id: 3,
//         name : 'Wilfred Fernendes',
//         email : 'Wilfred@gmail.com',
//         status : 'Active'
//     }
// ];

// Creating basic route
app.get('/basic',(req, res)  => {

    res.sendFile(path.join(__dirname,'public','index.html'));
});

// // Basic API : GET all members
// app.get('/api/members',(req, res ) => {

//     res.json(members)
// })

// // Get single member
// app.get('/api/members/:id',(req, res ) => {

//     const found = members.some(member =>member.id === parseInt(req.params.id));

//     if(found){

//         res.json(members.filter(member =>member.id === parseInt(req.params.id)));
//     }
//     else{
//         res.status(400).json({msg : `No member with id of ${parseInt(req.params.id)}`});
//     }
    
// })

// Body parser middleware
app.use(express.json());
app.use(express.urlencoded({extended : false}));


//Members API Routes
app.use('/api/members',require('./Routes/api/member'));

// Set Static folder
app.use(express.static(path.join(__dirname,'public')));

// Declare listening port
const PORT = process.env.PORT || 5000;

// Start the Server
app.listen(PORT, () => console.log(`Server listening on port : ${PORT}`));

