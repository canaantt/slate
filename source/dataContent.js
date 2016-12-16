//http://www.csvjson.com/csv2json
var u = require('underscore'); 
var jsonfile = require("jsonfile");
var comongo = require('co-mongodb');
var co = require('co');
var cbio_annotation = require("./cbio_annot_reorganized.json");
var ucsc_annotation = require("./ucsc_mol_annotation.json");
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
	codeComment: function(text) {console.log(); console.log('> ' + text); console.log(); },
	codeStop: function() {console.log('```');  console.log(); },
	code: function(text) { console.log('"'+ text + '"'); },
	jsonfy: function(text) { console.log('{' + text + '}');},
  codeRStart: function(text) {  console.log(); console.log("```r");},
  codeMongoStart: function(text) {  console.log(); console.log("```shell"); },
  codeJSStart: function(text) {  console.log(); console.log("```javascript"); },
  codePyStart: function(text) {  console.log(); console.log("```python"); },
  codeJSONStart: function(text) {  console.log(); console.log("```json"); },
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
function filterByCollection(obj, val) {
  if (obj.collection !== undefined && typeof(obj.collection) === 'string' && obj.collection === val) {
    //return true;
    return obj;
  } else {
    invalidEntries++;
    return false;
  }
}
Array.prototype.filterByCollection = function(v){
  for(var i = 0; i < this.length; i++) {
    if(this[i].collection === v){
      //console.log(this[i].collection);
      return this[i];
    } 
  }
  return false;
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

  db = yield comongo.client.connect('mongodb://oncoscapeRead:i1f4d9botHD4xnZ@oncoscape-dev-db1.sttrcancer.io:27017,oncoscape-dev-db2.sttrcancer.io:27017,oncoscape-dev-db3.sttrcancer.io:27017/tcga?authSource=admin&replicaSet=rs0');
  //=========================================================================
  /* using lookup_oncoscape_datasources file to populate _clinic_api_query.md 
  */
  format.h1("Data Content");
  lookup_oncoscape_datasources = yield comongo.db.collection(db, "lookup_oncoscape_datasources");
  datasources = yield lookup_oncoscape_datasources.find({}).toArray();
  datasources = u.sortBy(datasources, 'disease');
  var datasource_count = yield lookup_oncoscape_datasources.count();
  //yield comongo.db.close(db);

  unique_datasets_length = datasources.length;
  var dataTypeCat = ['category','clinical', 'molecular'];
  var dataTypeCat_length = dataTypeCat.length;
  var elem_source, elem_dataType;

  for(var i=0;i<unique_datasets_length;i++){
    if("disease" in datasources[i]){
      format.h2(datasources[i].disease.toUpperCase() + " - " + disease_code[datasources[i].disease.toUpperCase()]);
      var datasource = datasources[i];
      var mol_colls = [];
      format.text("Data Type | Collection Type | Data Source ");
      format.table("--------- | ----------- | ----------- "); 
      elem_source = datasource.source;
      elem_dataType = "";
      for(var j=0; j<dataTypeCat_length; j++){
         if(dataTypeCat[j] in datasource){
            if(Array.isArray(datasource[dataTypeCat[j]])) {
                datasource[dataTypeCat[j]].forEach(function(elem){
                  elem_source = elem.source;
                  elem_dataType = elem.type; 
                  if('collection' in elem){
                    format.table(elem_dataType + " | " + dataTypeCat[j] + " | " + elem_source);
                  }else{
                    format.table(elem_dataType + " | " + dataTypeCat[j] + " | " + elem_source );
                  }
                  if(dataTypeCat[j] === 'molecular'){
                    mol_colls.push(elem);
                  }
                }); 
            }else{
                var elems = Object.keys(datasource[dataTypeCat[j]]);
                var elems_length = elems.length;
                for(var m=0; m<elems_length;m++){
                  format.table(elem_dataType + " | " + dataTypeCat[j] + " | " + elem_source);
                }
            }
            
          }
         
      }
    }
   
  }
  yield comongo.db.close(db);
}).catch(onerror);
  


 