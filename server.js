const express = require("express");
const port = process.env.PORT||8080;
//this enables express routing feature
const app = express();
//data exchance between FE<=>BE is in json format
app.use(express.json())
//also important - needed because it allows us to access the actual request
app.use(express.urlencoded({
    extended: true
}));

app.use(require("./app/routing/apiRoutes.js"))
app.use(require("./app/routing/htmlRoutes.js"))

app.use(express.static("app/public"))























//always the last lines!:
app.listen(port, function(){
    console.log("App listens on port: ", port);
})