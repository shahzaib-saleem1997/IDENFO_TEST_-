const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const bookSchema = new Schema({
    title: {
        type: String,
        required: true,
    },
    ISBN: {
        type: String,
        required: true,
    },
    publishyear: {
        type: String,
        required: true,
    },
    price: {
        type: String,
        required: true,
    },
    status: {
        type: Boolean,
        required: true,
    },
    borrowDetails: [
        {
            name: {
                type: String,

            },
            mobileNumber: {
                type: String
            },
            nationalId: {
                type: Number,
                maxLength: 11,
                minLength: 11,
            },
            checkoutDate: {
                type: Date,

            },
            checkinDate: {
                type: Date,
                default: null
            }
        }
    ],


});

module.exports = mongoose.model("Books", bookSchema);