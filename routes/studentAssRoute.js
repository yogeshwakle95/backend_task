const route = require('express').Router();
const studentAssignController = require('../Controllers/studentAssignController');
const {verifyToken,isteacher} = require('../middleware/auth');


route.post('/',verifyToken,isteacher,studentAssignController.createStudenClass);
route.get('/',verifyToken,studentAssignController.getStudentClass);
route.get('/:classId',studentAssignController.studentByClassId);
route.get('/data/:studentId',studentAssignController.classByStudentId);
route.get('/test/:classId',studentAssignController.getStudentByClass);


module.exports = route;
