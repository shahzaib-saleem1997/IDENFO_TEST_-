const express = require('express');
const dotenv = require('dotenv');
const colors = require('colors');
const connectDB = require('./config/db.js');

const userRouter = require('./routes/users');
const auth = require('./routes/auth');
const books = require('./routes/books');


const users = require('./routes/users');
const { application } = require('express');


dotenv.config();

//allow cross origin resource sharing
const app = express();
app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "*");
    if (req.method === "OPTIONS") {
        res.header("Access-Control-Allow-Methods", "PUT, POST, PATCH, DELETE, GET");
        return res.status(200).json({});
    }
    next();
});

connectDB();



app.use(express.json()); // this is a middleware that allows to parse the body

app.get('/', (req, res) => {
    res.send('API is running');
})


app.use('/api/user', userRouter);
app.use('/api/auth', auth);
app.use('/api/book', books);


const PORT = process.env.PORT || 3000
app.listen(PORT, console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`.yellow.bold));
