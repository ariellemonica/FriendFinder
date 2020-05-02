//interacts w/ database

var router = require("express").Router();
var db = require("../data/friends");

router.get("/api/friends", function(req, res){
    res.json(db);
});