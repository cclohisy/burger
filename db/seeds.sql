-- Still in the db folder, create a seeds.sql file. 
--In this file, write insert queries to populate the burgers table 
--with at least three entries.

USE burgers_db 

INSERT INTO burgers(burger_name,devoured)
VALUES("Bacon Deluxe", false),
("PB and Bacon", false),
("BBQ Cheddar", true),
("Avocado and Egg",true),
("Black and Blue", false)
