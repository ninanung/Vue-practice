var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");
const mongoose = require("mongoose");

var index = require("./routes/index.js");
var login = require("./routes/login.js");
var signin = require("./routes/signin.js");

var app = express();
var http = require("http").Server(app);
mongoose.connect("mongodb://localhost:27017/test");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.set("port", process.env.PORT || 3000);
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', index);
app.use('/api/login', login);
app.use('/api/signin', signin);

http.listen(app.get("port"), function() {
    console.log("server start in " + app.get("port"));
})