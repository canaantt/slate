//var connectionString = 'mongodb://oncoscapeRead:i1f4d9botHD4xnZ@oncoscape-dev-db1.sttrcancer.io:27017/os';
//var comongo = require('co-mongodb');
//var co = require('co');
//var db = "os";
const _ = require('underscore');
var MongoClient = require('mongodb').MongoClient;


 

var format = {
h1: function(text) { console.log(); console.log('# '+text); },
h2: function(text) { console.log(); console.log('## '+text); },
text: function(text){ console.log(text); },
codeStart: function() { console.log(); console.log('```'); },
codeStop: function() { console.log(); console.log('```'); },
code: function(text) { console.log(text) }
};





var onerror = function(e){
console.log(e);
}


// Connect to the db
MongoClient.connect("mongodb://localhost:27017/oncoscape", function(err, db) {
  if(!err) {
    console.log("We are connected");
    var collection = db.collection('lookup_oncoscape_datasources');
    collection.find().toArray(function(err, documents) {
        console.log(documents); 
        documents.forEach(function(doc){
			format.h1(doc.disease);
			console.log(doc.collections);
			Object.keys(doc.collections).forEach(function(key){
				//var value = this.collections[key];
				console.log(key);
				format.codeStart();
				//format.code("http://oncoscape.sttrcancer.io/api/"+value);
				format.codeStop();	
         	});
      });
    });   
	db.close();		
  }else{
  	onerror(err.errmsg);
  }
}); 
