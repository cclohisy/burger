//require/ import orm 
var orm = require("../config/orm.js")
// Also inside burger.js, create the code that will call the ORM functions 
//using burger specific input for the ORM.
// Export at the end of the burger.js file.

// selectAll: function (tablename, cb) {
//     var queryString = "SELECT * FROM " +tablename
//     connection.query(queryString, function (err, result) {
//         if (err) throw err
//         cb(result)

var burger = {
    //why do i not need to pass tableName back through... but do need to pass cb...
    //think its becuase table being used is not changing...
    selectAll: function (cb) {
        orm.selectAll("burgers", function (res) {
            cb(res)
        })
    },
    // insertOne: function(tablename, colnames, values,cb){
    // var queryString = "INSERT INTO "+ tablename + " ("+colnames+") "+"VALUE "+values
 insertOne: function(colnames,values,cb){
     orm.insertOne("burgers", colnames,values, function(res){
         cb(res)
     })
 },
     //need object input that holds {colname1: value1 , colname2: value2}.. this case {burger_name: cheese, devoured:true/false}
     //var queryString = "UPDATE "+tablename+" SET "+inputObj+" WHERE "+condition
     updateOne: function(inputObj, condition, cb){
         orm.updateOne("burgers", inputObj, condition, function(res){
             cb(res)
         })

}
}

module.exports = burger