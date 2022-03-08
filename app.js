var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");

var studentRouter = require("./routes/student");

var app = express();
var mongoose = require("mongoose");

var dev_db_url =
  "mongodb+srv://MatthysDev:8XyCdHInRzbCL8OG@iut.d6umn.mongodb.net/test?authSource=admin&replicaSet=atlas-gx65c2-shard-0&readPreference=primary&appname=MongoDB%20Compass&ssl=true";

var mongoDB = process.env.MONGODB_URI || dev_db_url;

mongoose.connect(mongoDB, { useNewUrlParser: true, useUnifiedTopology: true });

mongoose.Promise = global.Promise;

var db = mongoose.connection;

db.on("error", console.error.bind(console, "MongoDB connection error:"));
app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

app.use("/student", studentRouter);

module.exports = app;
