const dotenv = require('dotenv');
const colors = require('colors');
const books = require('../data/books');
const Books = require('./models/bookModel');
const connectDB = require('./config/db.js');

dotenv.config();

connectDB();

const importData = async () => {
    try {
        await Books.deleteMany();
        await Books.insertMany(books);

        console.log('Data Imported'.green.inverse);
        process.exit()
    } catch (error) {
        console.error(`${error}`.red.inverse);
        process.exit(1);
    }
}

importData();