const Books = require('../models/bookModel');
const mongoose = require('mongoose');
const express = require('express');
const router = express.Router();

router.get('/getBooks', async (req, res) => {
    try {
        const books = await Books.find({});
        res.json(books);

    } catch (error) {
        console.log('bookRoute getAllBooks error:', error)
    }

})

router.put('/checkout/:id', async (req, res) => {
    try {
        const bookId = req.params.id;

        const { status } = await Books.findById(bookId, 'status');

        if (!status) return res.status(400).send('Book unavailable')


        const book = await Books.findByIdAndUpdate(bookId,
            { $set: { status: false }, $push: { borrowDetails: { ...req.body, checkoutDate: Date.now() } } },
            { new: true }
        )

        //update book function

        res.status(201).json({
            message: "Borrow details has been added to database",
        });


    } catch (error) {
        console.log('books checkout error:', error)
    }
})

router.put('/checkin/:id', async (req, res) => {
    try {
        const bookId = req.params.id;

        await Books.updateOne({ "borrowDetails.checkinDate": null, _id: bookId }, { $set: { 'borrowDetails.$.checkinDate': Date.now(), status: true } })
        res.status(201).json({
            message: "Checkin date added",
        });

    } catch (error) {
        console.log('books checkout error:', error)
    }
})




module.exports = router;