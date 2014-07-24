var util = require ( "util");
var cde4node = require ( "/Users/andrevanzuydam/projects/cde4node/cde4node" );

var runQueries = function ( cde, err ) {
	console.log ( "ready to run queries" );
	console.log ( cde );
  
	if (err == "") {
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
			
cde2 = new cde4node ({
		"dbtype": "sqlite3",
		"dbpath": "database/test.db"
	},
	runQueries
);

