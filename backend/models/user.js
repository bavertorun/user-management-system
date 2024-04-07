const { Schema , model } = require("mongoose")
const Joi = require('joi')

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


function validateUser(user){
    const userSchema = Joi.object({
        name: Joi.string().min(3).max(10).required(),
        email: Joi.string().email().required(),
        country: Joi.string().min(3).required(),
        contact: Joi.string().required()
    })

    return userSchema.validate(user);

}

const User = model("User",userSchema);


module.exports = {User,validateUser};