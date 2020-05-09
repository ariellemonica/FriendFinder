//interacts w/ database

var router = require("express").Router();
var db = require("../data/friends");

router.get("/api/friends", function(req, res){
    res.json(db);
});

router.post("/api/friends", function (req, res){
    console.log(req.body);

    var totalScore = 0;
    for (let i = 0; i < 10; i++){
        totalScore+= req.body.scores[i];
    };

    var bestScore = 10000;
    var bestMatch = ''

    for (let i = 0; i < db.length; i++){
        var matchScore = 0;
        for (let j = 0; j < 10; j++){
            matchScore+= db[i].scores[j];
        };

        var difference = Math.abs(totalScore - matchScore);
        if (bestScore > difference){
            bestScore = difference;
            bestMatch = db[i];
        }
    }
    db.push(req.body);
    console.log(bestMatch);
    res.json(bestMatch)

})

module.exports = router;