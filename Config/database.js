const mongoose = require('mongoose');
const path = require('path');

require('dotenv').config({path: __dirname + '/Config.env'})


mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log("Connect to MongooDB....");
  })
  .catch((err) => {
    console.log(err);
  });