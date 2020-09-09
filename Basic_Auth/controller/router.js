const express = require('express');
const userModel = require('../model/user');
const { registerValidation ,loginValidation } = require('../model/userValidate');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const user = require('../model/user');
const verify = require('../model/VerifyToken')

const router = express.Router();

router.post('/register',async (req,res) => {

   // Call the validate function
   const { error } = await registerValidation(req.body);
   if (error) return res.status(400).send(error.details[0].message);

   // Checking the if the user alraeady in  the database
   const emailExist = await userModel.findOne({email:req.body.email});
   if (emailExist) return res.status(400).send('Email Already exists');

   // Hash passwords
   const salt = await bcrypt.genSalt(10);
   const hashedPassword = await bcrypt.hash(req.body.password, salt);

    const user = new userModel({
        name : req.body.name,
        email : req.body.email,
        password : hashedPassword
    });
    try {
        const savedUser = await user.save();
        res.send(savedUser);
    } catch (error) {
        res.status(400).send(error);
        
    }
});

router.post('/login',async(req,res) => {

   // Call the validate function
   const { error } = await loginValidation(req.body);
   if (error) return res.status(400).send(error.details[0].message);

   // Checking the if the user alraeady in  the database
   const UserExist = await userModel.findOne({email:req.body.email});
   if (!UserExist) return res.status(400).send('User not found');

   // Checking passwords
   const validPassword = await bcrypt.compare(req.body.password, UserExist.password);
   if (!validPassword) return res.status(400).send('Invalid Password');

   // Create and assign token
   const token = jwt.sign({_id: user.id}, process.env.TOKEN_SECRET); 
   res.header('auth-token', token).send(token);
});

router.get('/all',verify,async(req,res) => {

    const Users = await userModel.find();
    if (!Users) return res.status(500).send('No Users found');
    res.send(Users);
});

module.exports = router;