const mongoose = require('mongoose');

const studentAssignSchema = new mongoose.Schema({
    Student_id:{
        type: mongoose.Schema.ObjectId,
        ref: "Students",
        required:true,
    },
    class_id:{
        type: mongoose.Schema.ObjectId,
        ref: "Class",
        required:true,
    }
})

const StudentAssign = mongoose.model("studentAssign",studentAssignSchema);
module.exports = StudentAssign;