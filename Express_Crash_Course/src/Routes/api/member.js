const express = require('express');
const members = require('../../Members/members');
const uuid = require('uuid');

//Init Router
const route = express.Router();

// Basic API : GET all members
route.get('/',(req, res ) => {

    res.json(members)
});

// Get single member
route.get('/:id',(req, res ) => {

    const found = members.some(member =>member.id === parseInt(req.params.id));

    if(found){

        res.json(members.filter(member =>member.id === parseInt(req.params.id)));
    }
    else{
        res.status(400).json({msg : `No member with id of ${parseInt(req.params.id)}`});
    }
    
});

//Create a member
route.post('/',(req, res) => {

    const newMember = {
        id :uuid.v4(),
        name : req.body.name,
        email : req.body.email,
        status : 'active'
    }

    if(!newMember.name || !newMember.email){
        
        res.status(400).json({msg: 'Please enter name and email'});
    }
    else{

        members.push(newMember);
        res.json(members);
    }
});


// Update a Member
route.put('/:id',(req, res ) => {

    const found = members.some(member =>member.id === parseInt(req.params.id));

    if(found){

        const updMember = req.body;
        members.forEach(member => {
            if(member.id === parseInt(req.params.id)){
                member.name = updMember.name ? updMember.name : member.name;
                member.email = updMember.email ? updMember.email : member.email;

                res.json({msg : 'Member Updated',member});
            }

        });
    }
    else{
        res.status(400).json({msg : `No member with id of ${parseInt(req.params.id)}`});
    }
    
});

// Delete single member
route.delete('/:id',(req, res ) => {

    const found = members.some(member =>member.id === parseInt(req.params.id));

    if(found){

        res.json({msg : 'member deleted',members : members.filter(member =>member.id !== parseInt(req.params.id))});
    }
    else{
        res.status(400).json({msg : `No member with id of ${parseInt(req.params.id)}`});
    }
    
});

module.exports = route;