# Burger Binge

### About 
This restaurant app lets users input the names of burgers they would like to eat. Whenever a user submits a burger's name, the app will display the burger in a waiting area. Each burger in the waiting area also has an Eat Me button. When the user clicks it, "You ate these Burgers" area of the page. Every burger is stored in a database, whether devoured or not.

### Installation 
All you need is a web browser! 

### Live Link
[Burger Binge](https://burger-binge.herokuapp.com/)

### Functionality
This app uses a homemade ORM and follows the MVC design pattern. Node and MySQL are used to query and route data flow in the app.

#### CRUD Operations:
* READ all burgers from the MySQL database and display them on the DOM using Handlebars.
* UPDATE a specific burger by clicking Eat Me. This changes the "devoured" state of the burger in the database and re-display burger in appropriate area of page using Handlebars. 
* CREATE a new burger using the "Add a Burger" option. This operation adds a new burger to the database and displays it in the "Time to Devour" area of the page using Handlebars.

### Built With
* Node.js
* [Express NPM package](https://www.npmjs.com/package/express)
* MySQL
* Handlebars 
* JavaScript
* JQuery
* Bootstrap
* HTML
* CSS


### Author
Cecilia Clohisy
