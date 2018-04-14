// Import (require) connection.js into orm.js
var connection = require("./connection.js")
// In the orm.js file, create the methods that will execute the 
//necessary MySQL commands in the controllers. 
//These are the methods you will need to use in order to retrieve and 
//store data in your database.

var orm = {
    //function (query, requirments, for, querystring ?'s, callback function){ }
    // selectAll()
    selectAll = function (tablename, cb) {
        var queryString = "SELECT * FROM ?"
        connection.query(queryString, [tablename], function (err, result) {
            if (err) throw err
            cb(result)
        })
    }

    // insertOne()
    // updateOne()



}//closes orm

// Export the ORM object in module.exports - require in burger.js

module.exports = orm