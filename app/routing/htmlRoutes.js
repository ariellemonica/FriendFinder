//serves html files in the application

var app = require("express").Router();
var path = require("path");

app.get("/survey", function(req, res){
    res.sendFile(path.join(__dirname, "/../public/survey.html"));
})

app.get("/", function(req, res){
    res.sendFile(path.join(__dirname, "../public/home.html"));
});

//needs to be the last thing in the router because * means everything goes to this
// app.get("*", function(req, res){
//     res.sendFile(path.join(__dirname, "../public/home.html"));
// });
//note - if you only have the index.html then that is the default; don't have to do the app.get

module.exports = app;