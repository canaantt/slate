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
var lookup_clinical_keys_annot = {
      'events':'clinical events collection organized by patient',
      'patient':'patient collection for each disease type',
      'drug':'chemo or other medicine administration records',
      'newTumor':'new tumor event records for possible patients',
      'otherMalignancy':'other maliganancy records for possible patients',
      'radiation':'radiation administration records',
      'followUp':'possible follow-up records',
      'newTumor-followUp':'possible follow-up records for the new tumor events'
};
var type_keys_annot = {
      'color':'a collection for coloring in Oncoscape application',
      'mut':'non-synonymous mutations representated as strings in this collection',
      'mut01':'non-synonymous mutations representated as binary values in this collection',
      'events':'clinical events collection organized by patient',
      'patient':'patient collection for each disease type',
      'drug':'chemo or other medicine administration records',
      'newTumor':'new tumor event records for possible patients',
      'otherMalignancy':'other maliganancy records for possible patients',
      'radiation':'radiation administration records',
      'followUp':'possible follow-up records',
      'newTumor-followUp':'possible follow-up records for the new tumor events',
      'genesets':'a collection of multiple genesets with specific genes in each set',
      'methylation':'DNA methlyation data',
      'rna':'mRNA and microRNA expression data',
      'protein':'protein-level and phosphoprotein level (RPPA) data',
      'psi':'percentage spliced in (PSI, Ψ) values in RNA splicing data',
      'facs':'Fluorescence-activated cell sorting data',
      'cnv':'DNA copy-number data represented as Gistic score',
      'annotation':'annotation files for a specific data type, for instance RNA splicing',
      'chromosome':'annoataion for chromosomes',
      'genes':'annotation data used to annotate genes',
      'centromere':'centromere position for each chromosome on human genome',
      'pcaScores':'calculated PCA scores for a specific data with specific genesets',
      'pcaLoadings':'pre-calculated PCA scores for a specific data with specific genesets',
      'mds':'Multidimensional Scaling data for a specific data with specific genesets',
      'edges':'derived collection to describe edges between genes and patients use for Markers and Patients (one of the Oncoscape tools)',
      'ptDegree':'derived collection to describe the weight of patients based on on the number of data points use for Markers and Patients (one of the Oncoscape tools)',
      'geneDegree':'derived collection to describe the weight of genes based on on the number of data points use for Markers and Patients (one of the Oncoscape tools)' 
};

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
  format.textlist("Data Sources");
  format.textlist("Data Type");
  format.h2("Molecular Data");
  format.textlist("Data Sources");
  format.textlist("Data Type");
  format.h2("Gene Set");
  format.text("Name | Description | Genes");
  format.table("--------- | --------- | ---------");
  for(var i= 0; i<genesets_annot.length; i++){
      format.table('<a target="_blank" href='+ genesets_annot[i].url + '>' +genesets_annot[i].name +'</a>'+ " | "  + 
             genesets_annot[i].desc  + " | " + "genes");
      
  }
  yield comongo.db.close(db);
}).catch(onerror);
 



 