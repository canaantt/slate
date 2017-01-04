var u = require('underscore'); 
var jsonfile = require("jsonfile");
var comongo = require('co-mongodb');
var co = require('co');
var helper = require("./testingHelper.js");
var disease_tables = [];
var db, collection,db_collections,collection_name;
var diseases = [];
var dataset = [];
var dataType = [];
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
      'expr': 'Expression data including mRNA and microRNA expression data and Reverse hase protein array (RPPA) data',
      'mut':'non-synonymous mutations representated as strings in this collection',
      'mut01':'non-synonymous mutations representated as binary values in this collection',
      'meth':'DNA methlyation data',
      'meth_thd':'Thresholded DNA methlyation data',
      'cnv':'DNA copy-number data represented as Gistic score',
      'cnv_thd':'Thresholded DNA copy-number data represented as Gistic score'
}; //lookup_dataTypes

var schema_annot = {
      'chr_sample': 'Collections of this schema have chromosomal location inhelper.formation as keys for each record, which is a list of values with samples as keys.',
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

  helper.format.h1("Data Content");
  lookup_oncoscape_datasources = yield comongo.db.collection(db, "lookup_oncoscape_datasources");
  datasources = yield lookup_oncoscape_datasources.find({}).toArray();
  datasources = u.sortBy(datasources, 'disease');
  genesets_annot_cursor = yield comongo.db.collection(db, "lookup_genesets");
  genesets_annot = yield genesets_annot_cursor.find({}).toArray();
  
  helper.format.text("This section is dedicated to explain the raw data Oncoscape utilizes. The section <a href='#data-provenance'>Data Provenance</a> explains how the raw data has been processed to fit into our visualization model.");
  helper.format.h2("Clinical Data");
  helper.format.h3("Data Sources");
  helper.format.text("Genomic Data Commons Data Portal (GDC) from National Institutes of Health (NIH) provides the compiled annotated clinical data.");
  helper.format.text("<a target='_blank' href='https://gdc-portal.nci.nih.gov/legacy-archive/search/f?filters=%7B%22op%22:%22and%22,%22content%22:%5B%7B%22op%22:%22in%22,%22content%22:%7B%22field%22:%22cases.project.program.name%22,%22value%22:%5B%22TCGA%22%5D%7D%7D,%7B%22op%22:%22in%22,%22content%22:%7B%22field%22:%22files.data_category%22,%22value%22:%5B%22Clinical%22%5D%7D%7D,%7B%22op%22:%22in%22,%22content%22:%7B%22field%22:%22files.data_type%22,%22value%22:%5B%22Clinical%20Supplement%22,%22Clinical%20data%22%5D%7D%7D%5D%7D&pagination=%7B%22files%22:%7B%22from%22:0,%22size%22:20,%22sort%22:%22cases.project.project_id:asc%22%7D%7D'>GDC clinical data</a>");
  helper.format.h3("Data Type");
  helper.format.text("Type | Annotation");
  helper.format.table("--------- | ----------- ");
  var clinical_annot_keys = Object.keys(clinical_annot); 
  for(var m=0;m<clinical_annot_keys.length;m++){
    helper.format.table(clinical_annot_keys[m] + " | " + clinical_annot[clinical_annot_keys[m]]);
  }  
  helper.format.h2("Molecular Data");
  helper.format.h3("Data Sources");
  helper.format.text("UCSC Xena compiled annotated normalized molecular datasets of various platforms from multiple institutes. ")
  helper.format.text("<a target='_blank' href='https://xenabrowser.net/datapages/?host=https://tcga.xenahubs.net'>UCSC xena hub</a>");
  helper.format.text("<a target='_blank' href='https://github.com/ucscXena/ucsc-xena-server'>UCSC xena github</a>");
  helper.format.h3("Data Type");
  helper.format.text("Type | Annotation");
  helper.format.table("--------- | ----------- ");
  var class_annot_keys = Object.keys(class_annot);
  for(p=0;p<class_annot_keys.length;p++){
    helper.format.table(class_annot_keys[p] + " | " + class_annot[class_annot_keys[p]]);
  } 
  helper.format.h3("Schema");
  helper.format.text("Schema Type | Annotation");
  helper.format.table("--------- | ----------- ");
  var schema_annot_keys = Object.keys(schema_annot);
  for(p=0;p<schema_annot_keys.length;p++){
    helper.format.table(schema_annot_keys[p] + " | " + schema_annot[schema_annot_keys[p]]);
  } 
  helper.format.h2("Gene Sets");
  helper.format.text("Name | Description | Genes");
  helper.format.table("--------- | --------- | ---------");
  for(var i= 0; i<genesets_annot.length; i++){
      helper.format.table('<a target="_blank" href='+ genesets_annot[i].url + '>' + genesets_annot[i].name +'</a>'+ ' | '  + 
             genesets_annot[i].desc  + ' | ' + '<a target="_blank" href=\'https://dev.oncoscape.sttrcancer.io/api/lookup_genesets/?q={' + '"name":"'+ genesets_annot[i].name + '","$fields":["genes"]}&apikey=password' + '\'>'+ genesets_annot[i].num +'</a>');
      
  }
  yield comongo.db.close(db);
}).catch(onerror);
 



 