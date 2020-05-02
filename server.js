const express = require("express");
const port = process.env.port||8080;
//this enables express routing feature
const app = express();
//data exchance between FE<=>BE is in json format
app.use(express.json())
//also important - needed because it allows us to access the actual request
app.use(express.urlencoded({
    extended: true
}));
app.use(require("./routing/apiRoutes.js"))
app.use(require("./routing/htmlRoutes.js"))























//always the last lines!:
app.listen(port, function(){
    console.log("App listens on port: ", port);
})