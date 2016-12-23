//http://www.csvjson.com/csv2json
var u = require('underscore'); 
var jsonfile = require("jsonfile");
var comongo = require('co-mongodb');
var co = require('co');
var helper = require("./testingHelper.js");
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
var genesets_annot_cursor, genesets_annot;
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
     "LIHC":"Liver hepatocellular carcinoma",    
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
     "UVM":"Uveal Melanoma",
     "FPPP": "Formalin Fixed Paraffin-Embedded Pilot Phase II"
 };
var format = {
      h1: function(text) { console.log(); console.log('# '+text); },
      h2: function(text) { console.log(); console.log('## '+text); },
      h3: function(text) { console.log(); console.log('### '+text); },
      h4: function(text) { console.log(); console.log('#### '+text); },
      h5: function(text) { console.log(); console.log('##### '+text); },
      textbold: function(text) { console.log(); console.log(); console.log('**'+ text+'**'); },
      textlist: function(text){ console.log(); console.log('- '+ text);  },
      textboldlist: function(text){console.log(); console.log('- '+ '**'+ text+'**'); },
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
var clinical_annot = {
      'events':'clinical events collection organized by patient',
      'patient':'patient collection for each disease type',
      'drug':'chemo or other medicine administration records',
      'newtumor':'new tumor event records for possible patients',
      'othermalignancy':'other maliganancy records for possible patients',
      'radiation':'radiation administration records',
      'followup':'possible follow-up records',
      'newtumor-followup':'possible follow-up records for the new tumor events',
      'samplemap': 'sample-patient mapping collection'
}; //lookup_oncoscape_datasources

var class_annot = {
      'expr': 'Expression data including mRNA and microRNA expression data and protein-level and phosphoprotein level (RPPA) data',
      'mut':'non-synonymous mutations representated as strings in this collection',
      'mut01':'non-synonymous mutations representated as binary values in this collection',
      'meth':'DNA methlyation data',
      'meth_thd':'Thresholded DNA methlyation data',
      'cnv':'DNA copy-number data represented as Gistic score',
      'cnv_thd':'Thresholded DNA copy-number data represented as Gistic score',
      'clin': 'Clinical information including events, drug, radiation, follow-up, newTumor-followUp collections',
      'cluster':'Derived data collections including calculated PCA and MDS results'
}; //lookup_dataTypes

var schema_annot = {
      'chr_sample': 'Collections of this schema have chromosomal location information as keys for each record, which is a list of values with samples as keys.',
      'hugo_sample': 'Collections of this schema have chromosomal HUGO genes as keys for each record, which is a list of values with samples as keys.',
      'sample_pos': 'Collections of this schema have samples as keys for each record, which is a list of position.',
      'methoprobe_sample':'Collections of this schema have methlyation probes as keys for each record, which is a list of values with samples as keys.'
}; //lookup_dataTypes

var onerror = function(e){
    console.log(e);
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
  genesets_annot_cursor = yield comongo.db.collection(db, "lookup_genesets");
  genesets_annot = yield genesets_annot_cursor.find({}).toArray();
  
  format.text("This section is dedicated to explain the raw data Oncoscape utilizes. The section <a href='#data-provenance'>Data Provenance</a> explains how the raw data have been processed to fit into our visualization model.");
  format.h2("Clinical Data");
  format.h3("Data Sources");
  format.text("<a target='_blank' href='https://gdc-portal.nci.nih.gov/legacy-archive/search/f?filters=%7B%22op%22:%22and%22,%22content%22:%5B%7B%22op%22:%22in%22,%22content%22:%7B%22field%22:%22cases.project.program.name%22,%22value%22:%5B%22TCGA%22%5D%7D%7D,%7B%22op%22:%22in%22,%22content%22:%7B%22field%22:%22files.data_category%22,%22value%22:%5B%22Clinical%22%5D%7D%7D,%7B%22op%22:%22in%22,%22content%22:%7B%22field%22:%22files.data_type%22,%22value%22:%5B%22Clinical%20Supplement%22,%22Clinical%20data%22%5D%7D%7D%5D%7D&pagination=%7B%22files%22:%7B%22from%22:0,%22size%22:20,%22sort%22:%22cases.project.project_id:asc%22%7D%7D'>GDC clinical data</a>");
  format.h3("Data Type");
  format.text("Clinical Collection Type | Annotation");
  format.table("--------- | ----------- ");
  var clinical_annot_keys = Object.keys(clinical_annot); 
  for(var m=0;m<clinical_annot_keys.length;m++){
    format.table(clinical_annot_keys[m] + " | " + clinical_annot[clinical_annot_keys[m]]);
  }  
  format.h2("Molecular Data");
  format.h3("Data Sources");
  format.text("<a target='_blank' href='https://xenabrowser.net/datapages/?host=https://tcga.xenahubs.net'>UCSC xena hub</a>");
  format.text("<a target='_blank' href='https://github.com/ucscXena/ucsc-xena-server'>UCSC xena github</a>");
  format.h3("Data Type");
  format.text("Collection Class | Annotation");
  format.table("--------- | ----------- ");
  var class_annot_keys = Object.keys(class_annot);
  for(p=0;p<class_annot_keys.length;p++){
    format.table(class_annot_keys[p] + " | " + class_annot[class_annot_keys[p]]);
  } 
  format.h3("Schema");
  format.text("Schema Type | Annotation");
  format.table("--------- | ----------- ");
  var schema_annot_keys = Object.keys(schema_annot);
  for(p=0;p<schema_annot_keys.length;p++){
    format.table(schema_annot_keys[p] + " | " + schema_annot[schema_annot_keys[p]]);
  } 
  format.h2("Gene Set");
  format.text("Name | Description | Genes");
  format.table("--------- | --------- | ---------");
  for(var i= 0; i<genesets_annot.length; i++){
      format.table('<a target="_blank" href='+ genesets_annot[i].url + '>' + genesets_annot[i].name +'</a>'+ ' | '  + 
             genesets_annot[i].desc  + ' | ' + '<a target="_blank" href=\'https://dev.oncoscape.sttrcancer.io/api/lookup_genesets/?q={' + '"name":"'+ genesets_annot[i].name + '","$fields":["genes"]}&apikey=password' + '\'>genes</a>');
      
  }
  yield comongo.db.close(db);
}).catch(onerror);
 



 