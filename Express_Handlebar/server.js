const express = require('express');
const expbs = require('express-handlebars');
const path = require('path');

// Server Creation
const app = express();



const hbs = expbs.create({
    defaultLayout : 'main',
    layoutsDir : path.join(__dirname,'views/mainLayout'),


    //create custom helper
    helpers:{

        calculation : function(value){
            return value + 7;
        },

        listing : function(value, options){

            let out = "<ul>";

            for(let i=0;i < value.length;i++){
                out = out + "<li>" + options.fn(value[i]) + "</li>";
            }

            return out + "</ul>"

        }
    }
});


//  Invoke Handlebars and  Views
app.engine('handlebars',hbs.engine);
app.set('view engine', 'handlebars');

// Load Static fikes
app.use(express.static('public'));

// Basic Routing
app.get('/',(req, res) => {

    res.render('index',{ 
        title : 'Homepage',
        name : 'Christon',
        style : 'index.css' });
});

app.get('/about',(req, res) => {

    res.render('about', { 
        title : 'About',
        surname :'Cardoza'});
});

app.get('/helper',(req, res) => {

    res.render('helper', { 
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

// Lookup
app.get('/look',(req, res) => {

    res.render('look', { 
        title : 'Lookup',
        roomates : ['Christon', 'Rohan', 'Wilfred'],
        details : {
            Christon : ['Cardoza',24,'Padukudru'],
            Rohan : ['D\'Souza',26,'Padukudru'],
            Wilfred : ['Fernendes',25,'Kambathota']
        },
        names :[

           { firstname: 'Christon', lastname : 'Cardoza'},
           { firstname:'Rohan' ,lastname :'D\'Souza'},
            {firstname:'Wilfred', lastname :'Fernendes'},
        ] 
            
    
    });
});


// Port
const PORT = process.env.PORT || 5000;


app.listen(PORT,() => console.log(`Server is running on port ${PORT}`));