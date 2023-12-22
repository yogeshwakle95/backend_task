const schoolSchema = require('../models/schools');

const createSchool = async (req, res) => {
    try {
      const school = new schoolSchema({
        Name: req.body.Name,
      });
  
      const result = await school.save();
      res.status(201).json(result);
    } catch (error) {
      // console.error(error);
      res.status(501).json({ error: 'Internal server error' });
    }
  };

  const getSchoolData = async(req,res)=>{
    try{
      const schoolData = await schoolSchema.find();
      res.status(201).json(schoolData);

    }catch(error){
      res.status(501).json({error : 'Internal server error'});
    }
  }

module.exports = {
    createSchool,
    getSchoolData
}