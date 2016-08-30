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
var lookup_oncoscape_datasources, datasources;
var format = {
	h1: function(text) { console.log(); console.log('# '+text); },
	h2: function(text) { console.log(); console.log('## '+text); },
	h3: function(text) { console.log(); console.log('### '+text); },
	h4: function(text) { console.log(); console.log('#### '+text); },
  textbold: function(text) { console.log(); console.log(); console.log('**'+ text+'**'); },
  textlist: function(text){ console.log(); console.log('- '+ text);  },
  textsublist: function(text){ console.log('  * '+ text);  },
	text: function(text){ console.log(); console.log(text);  },
	url: function(text) {console.log(); console.log('`' + text + '`'); console.log();},
	codeStart: function() { console.log(); console.log('```'); },
	codeComment: function(text) {console.log(); console.log('>' + text);},
	codeStop: function() { console.log(); console.log('```'); },
	code: function(text) { console.log('"'+ text + '"'); },
	jsonfy: function(text) { console.log('{' + text + '}');},
  codeRStart: function(text) { console.log("```r");},
  codeMongoStart: function(text) { console.log("```mongo"); },
  codeJSStart: function(text) { console.log("```javascript"); },
  codePyStart: function(text) { console.log("```python"); },
  table: function(text){ console.log(text);  }
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

format.h2("Mongo DB Connection");
format.codeJSStart('const mongoose = require("mongoose");');
format.code('mongoose.connect("mongodb://oncoscape-dev-db1.sttrcancer.io:27017,oncoscape-dev-db2.sttrcancer.io:27017,oncoscape-dev-db3.sttrcancer.io:27017/pancan12?authSource=admin",{user: "oncoscapeRead",pass: "i1f4d9botHD4xnZ"});');
format.code('var connection = mongoose.connection;');
format.code('var db = connection.db;');
format.codeStop();

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
  
  /* REST API Query on gbm_patient_tcga_na */
  collection = yield comongo.db.collection(db, 'gbm_patient_tcga_na');
  var doc = yield collection.find({}).toArray();
  var max_ind = 0;
  var max_len = 0;
  var ind = 0;
  format.h2("Example of fields from one record");
  format.codeComment("Fields for most of records in gbm_patient_tcga_na");
  format.codeStart();
  format.text(Object.keys(doc[0])); 
  format.codeStop(); 
  format.h2("Get the count of records in the collection");
  format.h3("HTTP Request")
  format.url("GET http://oncoscape.sttrcancer.io/api/gbm_patient_tcga_na/count");
  format.codeComment("Count of records in gbm_patient_tcga_na");
  format.codeStart();
  format.text(doc.length);
  format.codeStop();
  format.h2("Query detail information from collection gbm_patient_tcga_na");
  var query = '{"gender":"MALE", "race":"WHITE","$fields":["gender","race","patient_ID"],"$skip":5,"$limit":2}';
  doc = yield collection.find({"gender":"MALE", "race":"WHITE"},{"patient_ID":true, "gender":true, "race":true, "histologic_diagnosis":true}).limit(2).skip(5).toArray();
  format.text("Filter by gender and race and only show the selected fields");
  format.h3("HTTP Request")
  format.url("GET http://oncoscape.sttrcancer.io/api/gbm_patient_tcga_na/?q=" + query);
  format.text("only show gender, race and patient_ID");
  format.url('"$fields":["gender","race","patient_ID"]');
  format.text("skip the first five records");
  format.url('"$skip":5');
  format.text("limit the final output to two records.");
  format.url('"$limit":2');
  format.codeComment('Male White patients result: ');
  format.codeStart();
  format.text(JSON.stringify(doc, null, 4)); 
  format.codeStop(); 
  format.codeComment('Count of the records meet this criteria');
  format.codeStart(); 
  format.text(doc.length);
  format.codeStop(); 
      
  // javascript version 
  format.codeJSStart();
  format.table('collection = db.collection(\"gbm_patient_tcga_na\");');
  format.table('collection.find({\"gender\":\"MALE\", \"race\":\"WHITE\"},');
  format.table('{\"patient_ID\":true, \"gender\":true, \"race\":true, \"histologic_diagnosis\":true})');
  format.table('.limit(2).skip(5).toArray(function(err, doc){);"');
  format.table('console.log(JSON.stringify(doc, null, 4));');
  format.codeComment('To get the fields of first document and the count of the documents in collection');
  format.table('var collection = "gbm_patient_tcga_clinical";');
  format.table('var url = "https\://dev.oncoscape.sttrcancer.io/api/" + collection + "/?q=";');
  format.table('$.get(url, function(data) {'); 
  format.table('var field_names = Object.keys(data[0]);');
  format.table('var count = data.length;');
  format.table('console.log("fields name of the first records: " + field_names);');
  format.table('console.log("counts: " + count);});');
  format.codeStop();

  // mongo shell version: not connect, --replicaSet option is specified 
  format.codeMongoStart();
  format.table('db.getCollection(\"gbm_patient_tcga_na\").');
  format.table('find({\"gender\":\"MALE\", \"race\":\"WHITE\"},{\"patient_ID\":true, \"gender\":true, \"race\":true, \"histologic_diagnosis\":true}).skip(5).limit(2)');
  format.codeStop();

  // R verion: not connect, error code 3
  format.codeRStart();
  format.table('install.packages(\"rmongodb\")');
  format.table()
  format.table('library(rmongodb)');
  format.codeStop();

  // python verion: haven't tried 
  format.codePyStart();
  format.table('pip install pymongo');
  format.table('from pymongo import MongoClient');
  format.table('client = MongoClient(\"mongodb://oncoscape-dev-db1.sttrcancer.io:27017,oncoscape-dev-db2.sttrcancer.io:27017,oncoscape-dev-db3.sttrcancer.io:27017/pancan12?authSource=admin\")');
  format.table('db = client.os');
  format.table('db[\"gbm_patient_tcga_na\"]');
  format.codeStop();

  
  //=========================================================================
  /* using lookup_oncoscape_datasources file to populate _clinic_api_query.md 
  */
  format.h1("Collections by Disease");
  lookup_oncoscape_datasources = yield comongo.db.collection(db, "lookup_oncoscape_datasources");
  datasources = yield lookup_oncoscape_datasources.find({}).toArray();
  var datasource_count = yield lookup_oncoscape_datasources.count();
  //yield comongo.db.close(db);

  unique_datasets_length = datasources.length;
  //var dataTypeCat = ['clinical', 'molecular','calculated', 'edges'];
  var dataTypeCat = ['category', 'clinical', 'molecular'];
  var dataTypeCat_length = dataTypeCat.length;
  var elem_source, elem_dataType;

  for(var i=0;i<unique_datasets_length;i++){
    if("disease" in datasources[i]){
      format.h2(datasources[i].disease.toUpperCase() + " - " + disease_code[datasources[i].disease.toUpperCase()]);
      var datasource = datasources[i];
      //db = yield comongo.client.connect('mongodb://oncoscapeRead:i1f4d9botHD4xnZ@oncoscape-dev-db1.sttrcancer.io:27017,oncoscape-dev-db2.sttrcancer.io:27017,oncoscape-dev-db3.sttrcancer.io:27017/pancan12?authSource=admin&replicaSet=rs0');
      format.text("Collection_Name | Category | Data Source | Data Type");
      format.table("--------- | ----------- | ----------- | -----------"); 
      elem_source = datasource.source;
      elem_dataType = "";
      for(var j=0; j<dataTypeCat_length; j++){
         if(dataTypeCat[j] in datasource){
            if(Array.isArray(datasource[dataTypeCat[j]])) {
                datasource[dataTypeCat[j]].forEach(function(elem){
                  elem_source = elem.source;
                  elem_dataType = elem.type; 
                  if('collection' in elem){
                    format.table(elem.collection + " | " + dataTypeCat[j] + " | " + elem_source + " | " + elem_dataType);
                  }else{
                    format.table(elem.name + " | " + dataTypeCat[j] + " | " + elem_source + " | " + elem_dataType);
                  }
                }); 
            }else{
                var elems = Object.keys(datasource[dataTypeCat[j]]);
                var elems_length = elems.length;
                for(var m=0; m<elems_length;m++){
                  format.table(datasource[dataTypeCat[j]][elems[m]] + " | " + dataTypeCat[j] + " | " + elem_source + " | " + elem_dataType);
                }
            }
            
          }
         
      } 
    }
   
  }
  yield comongo.db.close(db);
}).catch(onerror);
  
