const route = require('express').Router();
const schoolController = require('../Controllers/schoolController');
const {verifyToken,isAdmin } = require("../middleware/auth")

route.post("/", verifyToken, isAdmin, schoolController.createSchool);

  route.get("/", verifyToken, isAdmin,schoolController.getSchoolData);

module.exports = route;