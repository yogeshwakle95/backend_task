const mongoose = require('mongoose');

const studentSchema = new mongoose.Schema({
    Name: {
        type: String,
        required: true,
    }
});

const Students = mongoose.model("Students", studentSchema);

module.exports = Students;
