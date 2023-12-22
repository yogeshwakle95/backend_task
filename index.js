const express = require('express');
const mongoose = require('mongoose');
const userRoute = require('./routes/userRoutes');
const schoolRoute = require("./routes/schoolRoute");
const classRoute = require("./routes/classRoute");
const studentRoute = require("./routes/studentRoute");
const studentAssign = require("./routes/studentAssRoute");
const bodyParser = require("body-parser");

const app = express();
require("dotenv").config(); 

const db = require("./Config/database"); // Connect to Database


app.use(bodyParser.json());
app.use("/api/users",userRoute);
app.use("/api/schools",schoolRoute);
app.use("/api/class",classRoute);
app.use("/api/student",studentRoute);
app.use("/api/studentAssign",studentAssign);


// Port Number
const PORT = process.env.PORT ||5000;
 
// Server Setup
app.listen(PORT,()=>{
    console.log(`app is listen on ${PORT}`);
})