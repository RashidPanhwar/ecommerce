const mongoose = require('mongoose');
const bcrypt = require('bcryptjs')

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Enter Name"],
    },
    email: {
        type: String,
        required: [true, "Enter Email"],
    },
    password: {
        type: String,
        minLength: [4, "length must be grater then 4 chars"],
        select: false
    },
    phone: {
        type: Number,
        required: [true, "Enter phone number"]
    },
    role: {
        type: String // user, seller, Admin
    },
    createAt: {
        type: Date,
        default: Date.now()
    },
    resetPassToken: {
        type: String
    },
    resetPassTime: {type: Date}
})

userSchema.pre('save', async function() {
    if(!this.isModified){
        next();
    }
    this.password = await bcrypt.hash(this.password, 10);
})

module.exports = mongoose.model("User", userSchema);