const { string, required } = require('joi')
const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    name:{
        type: String,
        required: true
    },
    email:{
        type: String,
        required: true
    },
    Date:{
        type: Date,
        default: Date.now()
    },
    mobile:{
        type: Number,
        required: true
    },
    password : {
        type : String,
        required : true
    }
})
module.exports = mongoose.model("userinfo", userSchema)