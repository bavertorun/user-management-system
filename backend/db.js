const mongoose = require("mongoose")

module.exports = async function (){

    // const uri = "ADD YOUR CONNECTION STRING"
    const uri = "mongodb+srv://bavertorun:bavertorun@cluster0.klm164a.mongodb.net/?retryWrites=true&w=majority"
    
    try {
        await mongoose.connect(uri);
        console.log("MongoDB connected!")
    } catch (error) {
        console.log("MongoDB connection error: ",error)
    }
}