//require dependencies 
var express = require("express")

//create router
 var router = express.Router()

//require/import burger.js
var burger = require("../models/burger.js")

//and export the router at the end of your file.


//export router/routes  to require/ import in server.js
module.exports = router