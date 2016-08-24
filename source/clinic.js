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
	text: function(text){ console.log(); console.log('##### '+text);  },
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
 "HG19" : "Genome Platform",
 "BRAIN": "Lower Grade Glioma & Glioblastoma multiforme",
 "COADREAD": "Colon adenocarcinoma & Rectum adenocarcinoma",
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
var invalidEntries = 0;
function filterByDataSet(value, obj) {
  if ('dataset' in obj && typeof(obj.dataset) === 'string' && obj.dataset === value) {
    return true;
  } else {
    invalidEntries++;
    return false;
  }
}

function filterByDataType(value, obj) {
  if ('dataType' in obj && typeof(obj.dataType) === 'string' && obj.dataType === value) {
    return true;
  } else {
    invalidEntries++;
    return false;
  }
}

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
    //console.log(collection_name);
    // collection = yield comongo.db.collection(db, collection_name);
    // count = yield collection.count();
    availableCollectionTags.push(collection_name);
  });
  
  manifest = yield comongo.db.collection(db, "manifest");
  manifest_content = yield manifest.find({}).toArray();
  //console.log(manifest_content);

  // using Manifest file to populate _clinic_api_query.md
  var keys = [];
  var manifest_length = manifest_content.length;
  var dataset = [];
  var dataType = [];
  var date = [];
  var collection = [];
  var source = [];
  var parent = [];
  for(i=0;i<manifest_length;i++){
    Array.prototype.push.apply(keys, Object.keys(manifest_content[i]));
    dataset.push(manifest_content[i]['dataset']);
    dataType.push(manifest_content[i]['dataType']);
    date.push(manifest_content[i]['date']);
    collection.push(manifest_content[i]['collection']);
    source.push(manifest_content[i]['source']);
    parent.push(manifest_content[i]['parent']);
  }

  var unique_keys = keys.unique();
  var unique_datasets = dataset.unique();
  var unique_datasets_length = unique_datasets.length;
  var unique_dataTypes = dataType.unique();
  var unique_dates = date.unique();
  var unique_collections = collection.unique();
  var unique_sources = source.unique();
  var unique_parents = parent.unique();

  

  //var collections_gbm = manifest_content.filter(filterByDataSet.bind(this, 'gbm')); //.length; would give 52 collections under 'gbm'
  //var collections_gbm_patient = collections_gbm.filter(filterByDataType.bind(this, 'patient'));
 
  for(var i=0;i<unique_datasets_length;i++){
    format.h2(unique_datasets[i] + " --- " + disease_code[unique_datasets[i].toUpperCase()]);
    //format.h3(format.text(disease_code[unique_datasets[i].toUpperCase()]));
    //format.codeComment("List of collections");
    //format.codeStart();
    manifest_content.filter(filterByDataSet.bind(this, unique_datasets[i])).forEach(function(elem){
            if(Array.isArray(elem.collection)){
              elem.collection.forEach(function(e){
                format.h3(e);
              });
            }else{
              format.h3(elem.collection);
            }
          });
    //format.codeStop();
  }





  yield comongo.db.close(db);
}).catch(onerror);




