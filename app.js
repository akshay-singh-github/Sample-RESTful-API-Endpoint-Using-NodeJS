var express = require("express");
var app = express();
var bodyParser = require("body-parser");
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static(__dirname + "/ClientSide"));

require("./ServerSide/app_server")(app);
module.exports=app;
app.listen(3000);
