//require dependencies 
var express = require("express")

//create router
var router = express.Router()

//require/import burger.js
var burger = require("../models/burger.js")

// get --read db... display initial values from database in hbs files and render on browser
//router.get("route(/)", function(req/res){
router.get("/", function (req, res) {
    //burger.functionName(data){
    burger.selectAll(function (data) {
        //set var to use in handlebars... probs obj of data
        var burgerObj = {
            burgers: data
        }
        //console.log(var)--see if setting correctly- logs in terminal
        console.log(burgerObj)
        //res.render("hbs file(index) to render in main.hbds",vars to be rendered )
        res.render("index",burgerObj)

    })

})


//}
//})

// post -- create
//put -- update
//delete -- delete



//export router/routes  to require/ import in server.js
module.exports = router