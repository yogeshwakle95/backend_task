const classSchema = require('../models/Class');

const createClass = async(req,res) =>{
    try{
        const classData = new classSchema({
            School_Id:req.body.School_Id,
            Class_Std:req.body.Class_Std,
        });
        const savedData = await classData.save();
        res.status(201).json(savedData);
    }catch(error){
        res.status(501).json({error:"Internal server error"})
    }
};

const getClassData = async(req,res)=>{
    try{
        const getClassData = await classSchema.find().exec(); // Await and use exec()
        res.status(200).json(getClassData);
    }catch(error){
        res.status(501).json({error:"Internal server error"})
    }
}

module.exports = {
    createClass,
    getClassData
}