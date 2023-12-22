const route = require('express').Router();
const userController = require('../Controllers/userController');

route.post("/",userController.createUser);
route.post("/signin",userController.signInUser);


module.exports = route;