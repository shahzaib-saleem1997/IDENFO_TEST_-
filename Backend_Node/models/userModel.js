const mongoose = require("mongoose");


const userSchema = mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    phone: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    // id: {
    //     type: Number,
    //     required: true,
    //     unique: true
    // }
},
    {
        timestamps: true //This will add createdAt and updatedAt automatically 
    }
)

// userSchema.methods.matchPassword = async function (enteredPassword) {
//     return await bcrypt.compare(enteredPassword, this.password)
// }


module.exports = mongoose.model('User', userSchema);