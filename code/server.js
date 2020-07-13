// var express = require("express");
// var path = require("path");
// var bodyParser = require("body-parser");
// var tasks = require("./routes/tasks");
// const cors = require("cors");
//
// var port = 5000;
//
// var app = express();
//
// app.use(
//     cors({
//         origin: "http://localhost:3000",
//         credentials: true
//     })
// );
//
// //View Engine
// app.set("views", path.join(__dirname, "views"));
// app.set("view engine", "ejs");
// app.engine("html", require("ejs").renderFile);
//
// // Set Static Folder
// app.use(express.static(path.join(__dirname, "client")));
//
// // Body Parser MW
// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({ extended: false }));
//
// app.use("/", index);
// app.use("/api", tasks);
//
// app.listen(port, function() {
//     console.log("Server started on port " + port);
// });

const express = require('express')
const cors = require('cors')
const mongoose = require('mongoose')
require('dotenv').config();

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json())

const  uri = process.env.ATLAS_URI;
mongoose.connect(uri, {useNewUrlParser: true, useCreateIndex: true});
const connection = mongoose.connection;
connection.once('open', () => {
    console.log('mongoDB database connected')
})

const TaskRouter = require('./routes/task');
app.use('/task', TaskRouter);

app.listen(port, () => {
    console.log(`Server is running on port: ${port}`)
})