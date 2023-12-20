const mongoose = require('mongoose');

const connectDatabase = async() => {
    // const uri = process.env.MONGODB_URI
    try{
        mongoose.connect(process.env.MONGODB_URI)
        console.log("Database Connected")
    }catch{console.log("Error Connecting Database")};
    // .then(() => {console.log("Database Connected")})
    // .catch(console.log("Error Connecting Database"));
}

module.exports = connectDatabase