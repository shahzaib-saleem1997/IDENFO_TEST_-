const _ = require('lodash');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const User = require('../models/userModel');
const mongoose = require('mongoose');
const express = require('express');
const router = express.Router();

router.post('/', async (req, res) => {
    try {

        //get the user if the user is not present send error
        let user = await User.findOne({ phone: req.body.phone });
        if (!user) return res.status(400).send('Invalid email or password');

        //compare request password with password on user in MongoDB
        const validPassword = await bcrypt.compare(req.body.password, user.password); //hashed password includes the salt so bcrpyt can unhash it and compare 

        //if password doesn't compare sen error else send JSON Web Token to the user
        if (!validPassword) return res.status(400).send('Invalid email or password.');

        const token = jwt.sign({ _id: user._id }, process.env.JWT_SECRET);


        res.send(token);
    } catch (error) {
        console.log('authRoute error:', error)
    }

})

module.exports = router;