const { Schema , model } = require("mongoose")

const userSchema = Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    country: {
        type: String,
        required: true
    },
    contact:{
        type: String,
        required: true
    }
},{timestamps: true})


module.exports = model("User",userSchema)