const route = require('express').Router();
const classController = require('../Controllers/classController');
const {verifyToken,isteacher} = require("../middleware/auth")

route.post('/',verifyToken,isteacher,classController.createClass);
route.get('/',
// verifyToken,isteacher,
classController.getClassData);

module.exports = route;