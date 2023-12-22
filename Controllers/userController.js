const userSchema = require('../models/users')
const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');

const secretKey = "mySuperSecretKey123"


const createUser = async(req,res)=>{
    const user = new userSchema({
        Name: req.body.Name,
        email: req.body.email,
        password: req.body.password,
        role: req.body.role,
    });
    user.save().then((users)=>{
        res.status(201).json(users);
    })
    .catch((error)=>{
        res.status(501).json({error:"error occurs" +error})
    });
};

const signInUser = async (req, res) => {
  const email = req.body.email;
  const password = req.body.password;

  try {
    const user = await userSchema.findOne({ email, password });

    if (user) {
      // console.log(user.role);
      // Generate a JWT token with the 'role' property
      const token = jwt.sign({ email, role: user.role }, secretKey, { expiresIn: '1h' });
      res.json({ message: 'Login successful', token });
    } else {
      res.status(401).json({ message: 'Invalid credentials' });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }
};





module.exports ={
    createUser,
   // verifyToken,
    signInUser,
}
