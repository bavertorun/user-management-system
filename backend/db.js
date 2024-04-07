const mongoose = require("mongoose")

module.exports = async function (){

    const uri = "ADD YOUR CONNECTION STRING"
    
    try {
        await mongoose.connect(uri);
        console.log("MongoDB connected!")
    } catch (error) {
        console.log("MongoDB connection error: ",error)
    }
}