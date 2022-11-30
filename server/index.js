const express = require("express");
const app = express();
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const connect = require("./connection/connect");
const authRoutes = require("./routes/authRoutes");
const cookieParser = require("cookie-parser");
var cors = require("cors");
const propertyListRoutes = require("./routes/property");
const addPropertyRoutes = require("./routes/addProperty");

const fileUpload = require("express-fileupload");

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(cookieParser());

// use fileupload
app.use(
  fileUpload({
    useTempFiles: true,
  })
);

app.use("/api/users", authRoutes);
app.use("/api/users", addPropertyRoutes);
app.use("/api/users", propertyListRoutes);

app.listen(8000, () => console.log("Server is running at 8000"));
