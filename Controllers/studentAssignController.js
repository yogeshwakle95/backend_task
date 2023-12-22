const studentAssignSchema = require('../models/studentAssign');
const studentSchema = require('../models/Students');

const createStudenClass = async(req,res)=>{
    try {
        const studentClass = new studentAssignSchema({
            Student_id:req.body.Student_id,
            class_id:req.body.class_id,
        })
        const data = await studentClass.save();
        res.status(201).json(data);
        
    } catch (error) {
        res.status(501).json({error:'Internal server error'})
    }
}

const getStudentClass = async(req,res)=>{
    try {
        const data = await studentAssignSchema.find();
        res.status(201).json(data);
    } catch (error) {
        res.status(501).json({error:'Internal server error'})
    }
}

const studentByClassId = async(req,res)=>{
    try {
        const classId = req.params.classId;

        const assignments = await studentAssignSchema.find({ class_id: classId }).populate('Student_id').populate('class_id');

        const formattedAssignments = assignments.map((assignment) => {
            return {
                _id: assignment._id,
                Name: assignment.Student_id.Name,
                Class_Std: assignment.class_id.Class_Std,
                __v: assignment.__v,
            };
        });

        res.status(200).json({"specific student classments":formattedAssignments});
        
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
}

const classByStudentId = async(req,res)=>{
    try {
        const studentId = req.params.studentId;

        const studentAssignments = await studentAssignSchema.find({ Student_id: studentId }).populate('class_id');

        if (!studentAssignments || studentAssignments.length === 0) {
            return res.status(404).json({ error: 'No class assignments found for the given student ID' });
        }

        const classNames = studentAssignments.map((assignment) => assignment.class_id.Class_Std);

        res.status(200).json({ "class shown by studentId": studentId, classNames });
        
    } catch (error) {
        
            console.error(error);
            res.status(500).json({ error: 'Internal Server Error' });
        
    }
}

const getStudentByClass = async(req,res)=>{
    try {
        const class_Id = req.params.classId;
        const data = await studentAssignSchema.findById(class_Id);
        res.status(201).json(data);

    } catch (error) {
        console.log(error);
    }
}






module.exports = {
    createStudenClass,
    getStudentClass,
    studentByClassId,
    classByStudentId,
    getStudentByClass
}