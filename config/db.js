const { url } = require("inspector");
require("dotenv").config();
const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_CONNECTION_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("DataBase is connected");
  } catch (error) {
    console.log("Error while connecting" + error.message);
  }
};
module.exports = connectDB;
