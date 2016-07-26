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
	codeStart: function() { console.log(); console.log('```'); },
	codeComment: function(text) {console.log(); console.log('>' + text);},
	codeStop: function() { console.log(); console.log('```'); },
	code: function(text) { console.log('"'+ text + '"'); },
	jsonfy: function(text) { console.log('{' + text + '}');}
};





var onerror = function(e){
	console.log(e);
}


format.h2("Clinical Collection Queries");

// Connect to the db
MongoClient.connect("mongodb://localhost:27017/oncoscape", function(err, db) {
  if(!err) {
    var collection = db.collection('lookup_oncoscape_datasources');
    collection.find().toArray(function(err, documents) {
        documents.forEach(function(doc){
			if(doc.disease == "gbm"){
				format.h3(doc.disease);
				format.text(JSON.stringify(doc,null, 4));
				format.codeComment("List of collections");
				format.codeStart();
				format.text(JSON.stringify(doc.collections,null, 4));
				format.codeStop();
				Object.keys(doc.collections).forEach(function(key){
					if(key == 1) {
						var value = doc.collections[key];
						//remove 'clinical_' prefix for local version
						if(value.indexOf('clinical_') > -1){
							value = value.replace('clinical_','');	
						}
						format.text(value);
						var collection = db.collection(value);
					    collection.count(function(err, count){
					    	format.h3(doc.disease);
					    	format.codeComment("TCGA GBM Patient Colleciton Count: ");
					    	format.codeStart();
					    	format.text(count);
					    	format.codeStop();
					    });
					}
					
	         	});
	         	format.h3("Other Disease Types");	
			}else{
				format.h4(doc.disease);
			}
			// else{
			// 	format.codeComment("List of collections");
			// 	format.codeStart();
			// 	format.text(JSON.stringify(doc.collections,null, 4));
			// 	format.codeStart();
			// 	Object.keys(doc.collections).forEach(function(key){
			// 		var value = doc.collections[key];
			// 		//remove 'clinical_' prefix for local version
			// 		if(value.indexOf('clinical_') > -1){
			// 			value = value.replace('clinical_','');	
			// 		}
	  //        	});
			// }
			
      });
    });   
	db.close();		
  }else{
  	onerror(err.errmsg);
  }
}); 

// MongoClient.connect("mongodb://localhost:27017/oncoscape", function(err, db) {
//   if(!err) {
//     var collection = db.collection('tcga_gbm_pt');
//     collection.count(function(err, count){
//     	format.h3("gbm");
//     	format.codeComment("TCGA GBM Patient Colleciton Count: ");
//     	format.codeStart();
//     	format.text(count);
//     	format.codeStop();
//     });
// 	db.close();		
//   }else{
//   	onerror(err.errmsg);
//   }
// }); 


