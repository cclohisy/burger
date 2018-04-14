//require dependencies
var express = require("express");
var bodyParser = require("body-parser");
var app = express();
var exphbs = require("express-handlebars")

var PORT = process.env.PORT || 3000;

//require/import routes from controller
var routes = require("./controllers/burgers_controller.js")

//set up stuff to work...

// Serve static content for the app from the "public" directory in the application directory
//avoids having to make paths for files linked in handlebars
app.use(express.static("public"));

// body parsert stuff...
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


//handlebars set up stuff
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

//give server access to routes
app.use(routes);

// start server
app.listen(PORT, function() {
  // log server has started in terminal
  console.log("Server listening on: http://localhost:" + PORT);
});

