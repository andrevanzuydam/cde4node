/*
	Purpose: The core library for Cross Database Engine 4 Node
	Author: Andre van Zuydam
	Date: 23/07/2014
	Version: 0.1.0

	Changes:

*/
/*****************************************************************************************
	Name: cde4node
	Purpose: Constructor which creates the object and calls the start function  
*****************************************************************************************/
function cde4node  ( params, callback ) {
    //console.log ( params );
    if ( params !== undefined ) {
    	console.log ("cde4node: initializing cde engine for "+params["dbtype"] );
		this.start (params, callback);
    }
	return [];
}

/*****************************************************************************************
	Name: fetch_object
	Purpose: Fetches an object from the database  
*****************************************************************************************/
cde4node.prototype.fetch_object = function ( params ) {
	console.log ( this.dbh );
}

/*****************************************************************************************
	Name: finish
	Purpose: Closes the database connection  
*****************************************************************************************/
cde4node.prototype.finish = finish;
function finish ( ) {
  if ( this.dbtype == "firebird" ) {
    this.dbh.detach();
  }
    else
  if ( this.dbtype == "sqlite3" ) {
    this.dbh.close();
  }  
    else {
    console.log ("Unknown finish for "+this.dbtype); 
  }  
}


/*****************************************************************************************
	Name: start
	Purpose: Opens the database connection and fires the callback  
*****************************************************************************************/
cde4node.prototype.start = start;
function start ( params, callback ) {
	dbparams = params["dbpath"].split ( ":" );
	this.dbtype = params["dbtype"];
	var parent = this;
	if ( params ["dbtype"] == "firebird" ) {
		fb = require ("node-firebird");
		fb.attach ({
				host: dbparams [0],
				database: dbparams [1],
				user: params["user"],
				password: params ["password"]
    		},
    		function (err, db){
    		    console.log ( "cd4node: "+parent.dbtype+" connection status ");
        		if ( err ) {
        		    parent.dbh = null; 
            		callback ( parent, err.message );
        		} else {
            		parent.dbh = db;
            		callback ( parent, "" );
        		}
    		}
		);
    	
    }
      else
    if ( params ["dbtype"] == "sqlite3" ) {
    	sqlite3 = require ("sqlite3");
    	this.dbh = new sqlite3.Database( params["dbpath"],
    	 
    		function ( ) {
    		  console.log ( "cd4node: "+parent.dbtype+" connection status ");
    		  callback ( parent, "" );
    		}
    	);
    }  
      else { 
		console.log ( params["dbtype"]+" not found " );      
	}       
}

/*****************************************************************************************
	Export the cde4node module
*****************************************************************************************/
module.exports = cde4node;