$("#submitButton").on("click", function(){
    console.log("BTN Press")
    var record = {
        name: $("#nameInput").val(),
        image: $("#imageInput").val(),
        scores: [
            $("#question1").val(),
            $("#question2").val(),
            $("#question3").val(),
            $("#question4").val(),
            $("#question5").val(),
            $("#question6").val(),
            $("#question7").val(),
            $("#question8").val(),
            $("#question9").val(),
            $("#question10").val()
        ]
    }
    console.log("Record",record);

    $.ajax({
        method: "POST",
        URL: "/api/friends",
        data: record
    }, function(err, result){
        if (err) throw err;
        console.log(result);
    })
});