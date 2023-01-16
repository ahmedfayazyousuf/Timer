const jwt = require('jsonwebtoken');
const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');
const authenticate = require("../middleware/authenticate");

const cookieParser = require("cookie-parser");
router.use(cookieParser());




require('../db/conn');
const User = require("../model/userSchema");




//register route

router.post('/register', async (req, res) => {

    const { name, email, phone } = req.body;

    if(!name || !email || !phone)
    {
        return res.status(422).json({ error: "Please fill all the fields properly" });
    } 

    try {
        //if email is already register before
        const userExist = await User.findOne({ email: email })
        if(userExist) {
            return res.status(422).json({ error: "Email already exists. Kindly Login." });
        }

        const user = new User({name, email, phone });

        //hashing

        await user.save();

        res.status(201).json({ message:"User Successfully Registered!" })

    } catch(err) {
        console.log(err);
    }

});






module.exports = router;