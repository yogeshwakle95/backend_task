// const route = require('express').Router();
const route = require('express').Router();

const studentController = require('../Controllers/studentController');
const {verifyToken,isteacher} = require('../middleware/auth');

route.post('/',verifyToken,isteacher,studentController.createStudent);
route.get('/',verifyToken,isteacher,studentController.getStudents);

module.exports = route;