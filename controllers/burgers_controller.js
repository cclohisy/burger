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
        res.render("index", burgerObj)

    })

})

// post -- create: add new burger to db, refresh page and display
router.post("/api/burgers", function (req, res) {
    console.log(req.body)//in terminal
    //insert [col name, col name], [value col 1, val col 2],
    burger.insertOne(["burger_name", "devoured"],
        [JSON.stringify(req.body.burger), req.body.devoured],
        function (result) {
        })
})
//put -- update

router.put("/api/burgers/:id", function (req, res) {
    //need object input that holds {colname1: value1 , colname2: value2}.. this case {burger_name: cheese, devoured:true/false}
    //var queryString = "UPDATE "+tablename+" SET "+inputObj+" WHERE "+condition
    //  updateOne: function(inputObj, condition, cb){
    //     orm.updateOne("burgers", inputObj, condition, function(res){
    //         cb(res)
    var id = req.params.id
    console.log("id to update" + id)
    var condition = "id = " + id
    console.log(condition)

    var inputObj = "devoured =" + req.body.devoured
    console.log(inputObj)

    burger.updateOne(inputObj, condition, function (result) {
            console.log(result)
            //check that id was found and row was actually changed... otherwise'not found' error
            if (result.changedRows == 0) {
                return res.status(404).end();
              } else {
                  //updte was successful! return success code
                res.status(200).end();
              }
        }
    )
})
//delete -- delete ... not required



//export router/routes  to require/ import in server.js
module.exports = router