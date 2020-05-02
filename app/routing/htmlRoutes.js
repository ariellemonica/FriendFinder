//serves html files in the application

var app = require("express").Router();
var path = require("path");

app.get("/survey", function(req, res){
    res.send(path.join(__dirname, "/../public/survey.html"));
})

//needs to be the last thing in the router because * means everything goes to this
app.get("*", function(req, res){
    res.send(path.join(__dirname, "/../public/home.html"));
})

//note - if you only have the index.html then that is the default; don't have to do the app.get

module.exports = app;