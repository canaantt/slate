var comongo = require('co-mongodb');
var co = require('co');
var disease_tables = [];
var db, collection,db_collections,collection_name, count,manifest, manifest_content;
var diseases = [];
var availableCollectionTags = [];
var keys = [];
var manifest_length;
var dataset = [];
var dataType = [];
var date = [];
var manifestCollection = [];
var source = [];
var parent = [];
var unique_keys;
var unique_datasets;
var unique_datasets_length;
var unique_dataTypes;
var unique_dates;
var unique_collections;
var unique_sources;
var unique_parents;

var format = {
	h1: function(text) { console.log(); console.log('# '+text); },
	h2: function(text) { console.log(); console.log('## '+text); },
	h3: function(text) { console.log(); console.log('### '+text); },
	h4: function(text) { console.log(); console.log('#### '+text); },
  textbold: function(text) { console.log(); console.log('**'+ text+'**'); },
  textlist: function(text){ console.log(); console.log('- '+ text);  },
  textsublist: function(text){ console.log('  * '+ text);  },
	text: function(text){ console.log(); console.log(text);  },
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
     "COAD":"Colon adenocarcinoma", 
     "ESCA":"Esophageal carcinoma",  
     "GBM":"Glioblastoma multiforme",    
     "HNSC":"Head and Neck squamous cell carcinoma", 
     "KICH":"Kidney Chromophobe",
     "KIRC":"Kidney renal clear cell carcinoma", 
     "KIRP":"Kidney renal papillary cell carcinoma", 
     "LICH":"Liver hepatocellular carcinoma",    
     "LUAD":"Lung adenocarcinoma",   
     "LUSC":"Lung squamous cell carcinoma",  
     "LUNG":"Lung adenocarcinoma & Lung squamous cell carcinoma",
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

var dataTypeCat = {
    'clinical':[
          'patient', 
          'followUp-v1p0', 
          'drug', 
          'newTumor', 
          'otherMalignancy-v4p0',
          'radiation',
          'followUp-v1p5',
          'followUp-v2p1',
          'followUp-v4p0',
          'newTumor-followUp-v4p0',
          'followUp-v4p8',
          'newTumor-followUp-v4p8',
          'followUp-v4p4',
          'newTumor-followUp-v4p4'],
     'molecular':[
          'cnv', 
          'mut01', 
          'mut', 
          'methylation',
          'rna', 
          'protein', 
          'genesets'], 
     'other':[
          'chromosome',
          'genes',
          'centromere',
          'color',
          'mds',
          'pcaScores',
          'edges',
          'ptDegree',
          'geneDegree']
};


format.h2("Mongo DB Connection");
format.codeJSStart('const mongoose = require("mongoose");');
format.code('mongoose.connect("mongodb://oncoscape-dev-db1.sttrcancer.io:27017,oncoscape-dev-db2.sttrcancer.io:27017,oncoscape-dev-db3.sttrcancer.io:27017/pancan12?authSource=admin",{user: "oncoscapeRead",pass: "i1f4d9botHD4xnZ"});');
format.code('var connection = mongoose.connection;');
format.code('var db = connection.db;');
format.codeStop();
format.h1("Collections by Disease");

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

function filterByDataTypeCat(value, obj) {
  if ('dataTypeCat' in obj && typeof(obj.dataTypeCat) === 'string' && obj.dataTypeCat === value) {
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

  // collections = yield comongo.db.collections(db);
  // collections.forEach(function(c){
  //   collection_name = c['s']['name'];
  //   console.log(collection_name);
  //   collection = yield comongo.db.collection(db, collection_name);
  //   count = yield collection.count();
  //   availableCollectionTags.push(collection_name);
  // });
  
  manifest = yield comongo.db.collection(db, "manifest");
  manifest_content = yield manifest.find({}).toArray();
  
  /* using Manifest file to populate _clinic_api_query.md 
  */
  manifest_content.map(function(e){
    if(dataTypeCat['clinical'].indexOf(e.dataType) != -1){
      e.dataTypeCat = 'clinical';
    }else if(dataTypeCat['molecular'].indexOf(e.dataType) != -1){
      e.dataTypeCat = 'molecular';
    }else{e.dataTypeCat = 'other';}
    
    // if(!Array.isArray(e.collection)){
    //   console.log("not array");
    //   var coll = yield comongo.db.collection(db, e.collection);
    //   var coll_arr = yield coll.find({}).toArray();
    //   e.count = coll_arr.length;
    //   e.field = Object.keys(coll_arr[0]);
    // }
    

    return e.collection;
  });




  manifest_length = manifest_content.length;
  for(i=0;i<manifest_length;i++){
    Array.prototype.push.apply(keys, Object.keys(manifest_content[i]));
    dataset.push(manifest_content[i]['dataset']);
    dataType.push(manifest_content[i]['dataType']);
    date.push(manifest_content[i]['date']);
    manifestCollection.push(manifest_content[i]['collection']);
    source.push(manifest_content[i]['source']);
    parent.push(manifest_content[i]['parent']);
  }

  unique_keys = keys.unique();
  unique_datasets = dataset.unique();
  unique_datasets_length = unique_datasets.length;
  unique_dataTypes = dataType.unique();
  unique_dates = date.unique();
  unique_collections = manifestCollection.unique();
  unique_sources = source.unique();
  unique_parents = parent.unique();

  //var collections_gbm = manifest_content.filter(filterByDataSet.bind(this, 'gbm')); //.length; would give 52 collections under 'gbm'
  //var collections_gbm_patient = collections_gbm.filter(filterByDataType.bind(this, 'patient'));
  var dataTypeCat_values = Object.keys(dataTypeCat);
  var dataTypeCat_length = dataTypeCat_values.length;
  
  for(var i=0;i<unique_datasets_length;i++){
    format.h2(disease_code[unique_datasets[i].toUpperCase()] + " (" + unique_datasets[i].toUpperCase() + ")");
    var disease_collections = manifest_content.filter(filterByDataSet.bind(this, unique_datasets[i]));
    for(var j=0; j<dataTypeCat_length-1; j++){
       format.h3(dataTypeCat_values[j]);
       disease_collections.filter(filterByDataTypeCat.bind(this, dataTypeCat_values[j])).forEach(function(elem){
                     if(Array.isArray(elem.collection)){
                          elem.collection.forEach(function(e){
                            format.textbold(e);
                          });
                        }else{
                          format.textbold(elem.collection);
                        }


                      format.text("data source: " + elem.source);
                      format.text("data type: " + elem.dataType);
                      // co(function *() {
                      //   db = yield comongo.client.connect('mongodb://oncoscapeRead:i1f4d9botHD4xnZ@oncoscape-dev-db1.sttrcancer.io:27017,oncoscape-dev-db2.sttrcancer.io:27017,oncoscape-dev-db3.sttrcancer.io:27017/pancan12?authSource=admin&replicaSet=rs0');
                      //   var coll = yield comongo.db.collection(db, elem.collection);
                      //   var coll_arr = yield collection.find({}).toArray();
                      //   format.text("count: " + coll_arr.length);
                      //   format.text("fields: " + Object.keys(coll_arr[0]));
                      // });  
                      
                    });
    }
   



    // manifest_content.filter(filterByDataSet.bind(this, unique_datasets[i])).forEach(function(elem){

    //         if(Array.isArray(elem.collection)){
    //           elem.collection.forEach(function(e){
    //             format.text(e);
    //           });
    //         }else{
    //           format.text(elem.collection);
    //         }
    //       });
  }





  yield comongo.db.close(db);
}).catch(onerror);

// var coll;
// var coll_arr = [];
// co(function *() {
//   db = yield comongo.client.connect('mongodb://oncoscapeRead:i1f4d9botHD4xnZ@oncoscape-dev-db1.sttrcancer.io:27017,oncoscape-dev-db2.sttrcancer.io:27017,oncoscape-dev-db3.sttrcancer.io:27017/pancan12?authSource=admin&replicaSet=rs0');
//   for(var i=0;i<manifest_length;i++){
//     var elem = manifest_content[i];
//     //console.dir(elem);
//     //if(!Array.isArray(elem.collection)){
//       coll = yield comongo.db.collection(db, elem.collection);
//       coll_arr = yield collection.find({}).toArray();
//       console.log(coll_arr.length);
//       console.log(Object.keys(coll_arr[0]));
//     //}
//   }
    
// }).catch(onerror);


