const mongoose = require('mongoose');

const schoolSchema = new mongoose.Schema({
    Name:{
        type:String,
        require:true
    }
});

const school = mongoose.model("schools",schoolSchema)
module.exports = school; 