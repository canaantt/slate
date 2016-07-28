//var connectionString = 'mongodb://oncoscapeRead:i1f4d9botHD4xnZ@oncoscape-dev-db1.sttrcancer.io:27017/os';
//var comongo = require('co-mongodb');
//var co = require('co');
//var db = "os";
const _ = require('underscore');
var MongoClient = require('mongodb').MongoClient;


 

var format = {
	h1: function(text) { console.log(); console.log('# '+text); },
	h2: function(text) { console.log(); console.log('## '+text); },
	h3: function(text) { console.log(); console.log('### '+text); },
	h4: function(text) { console.log(); console.log('#### '+text); },
	text: function(text){ console.log(text); },
	url: function(text) {console.log(); console.log('`' + text + '`');},
	codeStart: function() { console.log(); console.log('```'); },
	codeComment: function(text) {console.log(); console.log('>' + text);},
	codeStop: function() { console.log(); console.log('```'); },
	code: function(text) { console.log('"'+ text + '"'); },
	jsonfy: function(text) { console.log('{' + text + '}');}
};





var onerror = function(e){
	console.log(e);
}


format.h2("Tools");

// Connect to the db
MongoClient.connect("mongodb://localhost:27017/oncoscape", function(err, db) {
  if(!err) {
    var collection = db.collection('lookup_oncoscape_tools');
    collection.find().toArray(function(err, documents) {
        documents.forEach(function(doc){
    			format.h3(doc.name);
    			format.text(doc.desc);
    	  });
    });   
	db.close();		
  }else{
  	onerror(err.errmsg);
  }
}); 

