cde4node
========

Cross Database Engine for Node

Again I am on a little mission to standardize database access for a language, this time it is for nodejs.
Basically the aim is to have an asynchronous library which standardizes communication and data retrieval to all the popular database libraries.

Currently my focus will be on Firebird, SQLite and MongoDB.

Example of proposed working:

var util = require ( "util");
var cde4node = require ( "cde4node" );

var runQueries = function ( cde, err ) {
    console.log ( "ready to run queries" );
    console.log ( cde );
      
    if (err == "") {
    
       var object = cde.get_object ("select * from tbltest", 10, 20);
     
       var     
    
       cde.finish( cde );
    }
         else {
         console.log ( err );
       }
      
       console.log ("finished");
}

cde = new cde4node ({
    "dbtype": "firebird",
    "dbpath": "askeve.co.za:/home/askeve/database/ASKEVE.FDB",
    "user": "SYSDBA",
    "password": "1235picewar3"
    },
    runQueries //run query call back
);

PLEASE NOTE THAT THIS PROJECT IS NOT EVEN IN AN ALPHA STATE AND IF YOU WANT TO HELP LET ME KNOW.
