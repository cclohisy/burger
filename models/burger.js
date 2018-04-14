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
    selectAll: function (cb) {
        orm.selectAll("burgers", function(res){
            cb(res)
        })
    }

}

module.exports = burger