const _ = require('lodash');
const bcrypt = require('bcrypt');
const User = require('../models/userModel');
const mongoose = require('mongoose');
const express = require('express');
const router = express.Router();

router.post('/', async (req, res) => {
    try {
        console.log(req.body);
        let user = await User.findOne({ phone: req.body.phone });
        if (user) return res.status(400).send('User already registered.');

        user = new User({
            name: req.body.name,
            phone: req.body.phone,
            password: req.body.password
        });

        const salt = await bcrypt.genSalt(10);
        user.password = await bcrypt.hash(user.password, salt);
        await user.save();

        res.send({
            id: user._id,
            name: user.name,
            phone: user.phone
        }
        );
    } catch (error) {
        console.log('userRoute error:', error)
    }

})

module.exports = router;