// const { MongoClient } = require("mongodb");
// // Connection URI
// const uri = "mongodb+srv://shahzaib:Shazu000111@cluster0.eolbb.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
// // Create a new MongoClient
// const client = new MongoClient(uri);
// async function connectDB() {
//     try {
//         // Connect the client to the server
//         await client.connect();
//         // Establish and verify connection
//         await client.db("admin").command({ ping: 1 });

//         console.log(`MongoDB Connected`.cyan.underline);
//     } catch (error) {
//         console.log('connection error:', error);
//     }
//     // finally {
//     //     // Ensures that the client will close when you finish/error
//     //     await client.close();
//     // }
// }


// module.exports = connectDB

// //connection code from official MongoDB website: https://docs.mongodb.com/drivers/node/current/fundamentals/connection/ 

// // ${conn.connection.host}

const mongoose = require('mongoose');

const connectDB = async () => {
    try {
        const conn = await mongoose.connect("mongodb+srv://shahzaib:Shazu000111@cluster0.eolbb.mongodb.net/myFirstDatabase?retryWrites=true&w=majority");

        console.log(`MongoDB Connected: ${conn.connection.host}`.cyan.underline);
    } catch (error) {
        console.log(`Error: ${error.message}`.red.underline.bold);
        process.exit(1);
    }

}

module.exports = connectDB