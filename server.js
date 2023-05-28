const express = require("express");
const app = express();
const connectDB = require("./config/db");
const { connect } = require("mongoose");
const path = require("path");
connectDB();
const cors = require("cors");
const PORT = process.env.PORT || 3000;

//Cors
const corsOptions = {
  origin: process.env.ALLOWED_CLIENTS.split(","),
};

app.use(cors(corsOptions));

app.use(express.static("public"));
app.use(express.json());
//Template engine
app.set("views", path.join(__dirname, "/views"));
app.set("view engine", "ejs");
//Routes
app.use("/api/files", require("./routes/files"));
app.use("/files", require("./routes/show"));
app.use("/files/download", require("./routes/download"));

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});