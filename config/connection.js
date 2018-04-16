
// Inside the connection.js file, setup the code to connect Node to MySQL.
// Export the connection.

//require mysql
var mysql = require("mysql")

//set up connection to burger_db
var connection;
if (process.env.JAWSDB_URL) {
    connection = mysql.createConnection(process.env.JAWSDB_URL)
}
else {
    connection = mysql.createConnection({
        port: 8889,
        host: "localhost",
        user: "root",
        password: "root",
        database: "burgers_db"
    })
}

//connect to db

connection.connect(function (err) {
    if (err) {
        throw err
        return
    }
    console.log("connected as id: " + connection.threadId)
})

//export connection to require in orm.js

module.exports = connection
