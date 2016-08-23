var comongo = require('co-mongodb');
var co = require('co');
var disease_tables = [];
var db, collection,db_collections,collection_name, count,manifest, manifest_content;
var diseases = [];
var availableCollectionTags = [];

 

var format = {
	h1: function(text) { console.log(); console.log('# '+text); },
	h2: function(text) { console.log(); console.log('## '+text); },
	h3: function(text) { console.log(); console.log('### '+text); },
	h4: function(text) { console.log(); console.log('#### '+text); },
	text: function(text){ console.log(text); },
	url: function(text) {console.log(); console.log('`' + text + '`'); console.log();},
	codeStart: function() { console.log(); console.log('```'); },
	codeComment: function(text) {console.log(); console.log('>' + text);},
	codeStop: function() { console.log(); console.log('```'); },
	code: function(text) { console.log('"'+ text + '"'); },
	jsonfy: function(text) { console.log('{' + text + '}');},
  codeRStart: function(text) { console.log("```r"); console.log(text);},
  codeMongoStart: function(text) { console.log("```mongo"); console.log(text);},
  codeJSStart: function(text) { console.log("```javascript"); console.log(text);},
  codePyStart: function(text) { console.log("```python"); console.log(text);}
};



var disease_code = {
 "LAML" : "Acute Myeloid Leukemia",
 "ACC":"Adrenocortical carcinoma",
 "BLCA" : "Bladder Urothelial Carcinoma",
 "LGG": "Brain Lower Grade Glioma",
 "BRCA": "Breast invasive carcinoma",
 "CESC": "Cervical squamous cell carcinoma and endocervical adenocarcinoma",  
 "CHOL":"Cholangiocarcinoma",
 "COAD ":"Colon adenocarcinoma", 
 "ESCA":"Esophageal carcinoma",  
 "GBM":"Glioblastoma multiforme",    
 "HNSC":"Head and Neck squamous cell carcinoma", 
 "KICH":"Kidney Chromophobe",
 "KIRC":"Kidney renal clear cell carcinoma", 
 "KIRP":"Kidney renal papillary cell carcinoma", 
 "LICH":"Liver hepatocellular carcinoma",    
 "LUAD":"Lung adenocarcinoma",   
 "LUSC":"Lung squamous cell carcinoma",  
 "DLBC":"Lymphoid Neoplasm Diffuse Large B-cell Lymphoma",
 "MESO":"Mesothelioma",
 "OV":"Ovarian serous cystadenocarcinoma",   
 "PAAD":"Pancreatic adenocarcinoma", 
 "PCPG":"Pheochromocytoma and Paraganglioma",    
 "PRAD":"Prostate adenocarcinoma",   
 "READ":"Rectum adenocarcinoma", 
 "SARC":"Sarcoma",   
 "SKCM":"Skin Cutaneous Melanoma",   
 "STAD":"Stomach adenocarcinoma",    
 "TGCT":"Testicular Germ Cell Tumors",   
 "THYM":"Thymoma",   
 "THCA":"Thyroid carcinoma", 
 "UCS":"Uterine Carcinosarcoma",
 "UCEC":"Uterine Corpus Endometrial Carcinoma",  
 "UVM":"Uveal Melanoma"
 };

format.h2("Mongo DB Connection");
format.codeJSStart('const mongoose = require("mongoose");');
format.code('mongoose.connect("mongodb://oncoscape-dev-db1.sttrcancer.io:27017,oncoscape-dev-db2.sttrcancer.io:27017,oncoscape-dev-db3.sttrcancer.io:27017/pancan12?authSource=admin",{user: "oncoscapeRead",pass: "i1f4d9botHD4xnZ"});');
format.code('var connection = mongoose.connection;');
format.code('var db = connection.db;');
format.codeStop();
format.h2("Clinical Collections by Disease");

var onerror = function(e){
    console.log(e);
  };



Array.prototype.contains = function(v) {
      for(var i = 0; i < this.length; i++) {
          if(this[i] === v) return true;
      }
      return false;
  };

Array.prototype.getAllIndexes = function(v) {
      var indexes = [], i = -1;
      while ((i = this.indexOf(v, i+1)) != -1){
          indexes.push(i);
      }
      return indexes;
  };
Array.prototype.unique = function() {
      var arr = [];
      for(var i = 0; i < this.length; i++) {
          if(!arr.contains(this[i])) {
              arr.push(this[i]);
          }
      }
      return arr; 
  };

co(function *() {

  db = yield comongo.client.connect('mongodb://oncoscapeRead:i1f4d9botHD4xnZ@oncoscape-dev-db1.sttrcancer.io:27017,oncoscape-dev-db2.sttrcancer.io:27017,oncoscape-dev-db3.sttrcancer.io:27017/pancan12?authSource=admin&replicaSet=rs0');
  collection = yield comongo.db.collection(db, 'lookup_oncoscape_datasources');
  disease_tables = yield collection.find({},{"disease":true,"collections":true}).toArray();

  //console.dir(disease_tables);
  // var listed_collections = [];

  // disease_tables.forEach(function(doc){
  //   if(Object.keys(doc).indexOf("collections") != -1){
  //     diseases.push(doc.disease);
  //     Object.keys(doc.collections).forEach(function(key){
  //       listed_collections.push(doc.collections[key]);
  //     });
  //   }
  // });
  collections = yield comongo.db.collections(db);
  collections.forEach(function(c){
    collection_name = c['s']['name'];
    console.log(collection_name);
    // collection = yield comongo.db.collection(db, collection_name);
    // count = yield collection.count();
    availableCollectionTags.push(collection_name);
  });
  
  manifest = yield comongo.db.collection(db, "manifest");
  manifest_content = yield manifest.find({}).toArray();
  console.log(manifest_content);
  yield comongo.db.close(db);
}).catch(onerror);




//var db_collection_survey = {};
//R code
// collections = availableCollectionTags
// strsplit(collections, '_')->collections_split
// lapply(collections_split, function(c){return(c[1])})
// var db_status = {};
// var first_args = [];
// var second_args = [];
// var third_args = [];

// availableCollectionTags.forEach(function(c){
//   if(typeof(c) != "undefined"){
//     var elem = [];
//     elem = c.split("_");
//     if(elem.length > 1){
//       first_args.push(elem[0]);
//       second_args.push(elem[1]); 
//       if(elem[1] == "onocscape"){
//         console.log(c);
//       }  
//     }
//     db_status[c] = elem;
//   }
// });


