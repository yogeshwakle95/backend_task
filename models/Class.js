const mongoose = require('mongoose');
const { ObjectId } = mongoose.Schema;

const classSchema = new mongoose.Schema({
    School_Id:{
        type: mongoose.Schema.ObjectId,
        ref: "schools",
        required:true,
    },
    Class_Std:{
        type:String,
        required:true
    }
});

const Class = mongoose.model("Class",classSchema)
module.exports = Class;