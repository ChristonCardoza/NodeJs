const express = require('express');
const expbs = require('express-handlebars');
const path = require('path');

// Server Creation
const app = express();


//  Invoke Handlebars and  Views
app.engine('handlebars',expbs({
    defaultLayout : 'main',
    layoutsDir : path.join(__dirname,'views/mainLayout')
}));
app.set('view engine', 'handlebars');

// Basic Routing
app.get('/',(req, res) => {

    res.render('index',{ 
        layout: false,
        title : 'Homepage',
        name : 'Christon' });
});

app.get('/about',(req, res) => {

    res.render('about', { 
        layout: false,
        title : 'About',
        surname :'Cardoza'});
});

app.get('/helper',(req, res) => {

    res.render('helper', { 
        layout: false,
        title : 'Helprs',
        name : 'Christon',
        surname :'Cardoza',
        isName : true,
        isage : false,
        roomates : ['Christon', 'Rohan', 'Wilfred'],
        details : {
            Christon : ['Cardoza',24,'Padukudru'],
            Rohan : ['D\'Souza',26,'Padukudru'],
            Wilfred : ['Fernendes',25,'Kambathota']
        }
    })
        
});


// Port
const PORT = process.env.PORT || 5000;


app.listen(PORT,() => console.log(`Server is running on port ${PORT}`));