const express = require('express');
const schemaModal = require('../models/employee');


// Initiate the Router
const router = express.Router();

// Get the All content in the database
router.get('/', async(req,res) => {

    try {
        const details = await schemaModal.find();
        res.json(details);
    } catch (error) {

        res.json({message : error});
        
    }

});

// Post content in the database
router.post('/', async(req,res) => {

    const data = new schemaModal({

        fName: req.body.fName,
        sName: req.body.sName,
        age : req.body.age,
        title: req.body.title

    });

    try {
        const  saveData = await data.save();
        res.json(saveData);
        
    } catch (err) {
        res.json({message : err});
    }

});

// Get the single content in the database
router.get('/:id', async(req,res) => {

    try {
        const singleData = await schemaModal.findById(req.params.id);
        res.json(singleData);

    } catch (er) {

        res.json({message : er});
        
    }

});

// Delete the single content in the database
router.delete('/:id', async(req,res) => {

    try {
        const deleteData = await schemaModal.deleteOne({_id : req.params.id});
        res.json(deleteData);

    } catch (e) {

        res.json({message : e});
        
    }

});

// Update the single content in the database
router.patch('/:id', async(req,res) => {

    try {
        const updateData = await schemaModal.updateOne({
            _id : req.params.id},
            {$set:{

                fName: req.body.fName,
                sName: req.body.sName,
                age : req.body.age,
                title: req.body.title

                }
            }
        );
        res.json(updateData);

    } catch (errors) {

        res.json({message : errors});
        
    }

});

module.exports = router;

