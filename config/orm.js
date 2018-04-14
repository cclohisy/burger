// Import (require) connection.js into orm.js
var connection = require("./connection.js")
// In the orm.js file, create the methods that will execute the 
//necessary MySQL commands in the controllers. 
//These are the methods you will need to use in order to retrieve and 
//store data in your database.

var orm = {
    //function (query, requirments, for, querystring ?'s, callback function){ }

    //function to display all burgers and devoured status from db when page is loaded
    // selectAll()
    selectAll: function (tablename, cb) {
        var queryString = "SELECT * FROM " + tablename
        connection.query(queryString, function (err, result) {
            if (err) throw err
            cb(result)
        })
    },
    //function to add a burger 
    // insertOne()
    insertOne: function (tablename, colnames, values, cb) {
        var queryString = "INSERT INTO " + tablename + " (" + colnames + ") " + "VALUES (" + values + ") "
        console.log(queryString)
        connection.query(queryString, values, function (err, result) {
            if (err) throw err
            cb(result)
        })
    }
    // updateOne()



}//closes orm

// Export the ORM object in module.exports - require in burger.js

module.exports = orm