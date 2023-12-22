const StudentSchema = require('../models/Students');
const mongoose = require('mongoose');

const createStudent = async(req,res)=>{
    try {
        const students = new StudentSchema({
            Name:req.body.Name,
        });

        const result = await students.save();
        res.status(201).json(result);
    } catch (error) {
        res.status(501).json({error:'Internal server error'});
    }
};

const getStudents = async(req,res)=>{
    try {
        const students = await StudentSchema.find();
        res.status(201).json(students);
    } catch (error) {
        res.status(501).json({error:'Internal server error'})
    }
}

module.exports = {
    createStudent,
    getStudents
}