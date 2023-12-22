const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    Name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true,
        unique:true,
    },
    password:{
        type:String,
        required:true
    },
    role:{
        type:String,
        default:"Student"
    }
});

const user = mongoose.model("user",userSchema);
module.exports = user;
