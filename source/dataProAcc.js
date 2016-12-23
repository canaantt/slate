var jsonfile = require("jsonfile");
var lookup_elem = require("./lookup_elem.json");
var manifest_elem = require("./manifest_elem.json");
var helper = require("./testingHelper.js");

var lookup_keys_annot = {
	'disease':'disease code used in Oncoscape naming system',
  	'source':'data source',
	'beta':'For a specific dataset, if the beta value is true, this dataset is currently only alive in the developmental environment and won\'t be included in the production version of Oncoscape application.',
	'name':'disease name',
	'img':'images utilized for Oncoscape application',
	'clinical':'clinic-related collections',
	'category':'geneset and coloring collections utilized by Oncoscape application',
	'molecular':'molecular collections',
	'calculated':'derived colletions for PCA (one of the Oncoscape tools) and Multidimensional scaling',
	'edges':'derived colecitons for Markers and Patient (one of the Oncoscape tools)',
	'type': 'all possible data type for each collection'
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
}

var manifest_keys_annot = {
	'dataset':'disease code used in Oncoscape naming system',
	'dataType':'all possible data type for each collection',
	'date':'processed date',
	'source':'data source',
	'process':'process that used to derive this collection',
	'processName':'name of the process that used to derive this collection',
	'parent':'the collection(s) used to derive this collection' 
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

var source_keys_annot = {
	'tcga':'<a target="_blank" href=\'https://gdc.cancer.gov/\'>TCGA</a>',
	'broad':'<a target="_blank" href=\'https://gdac.broadinstitute.org//\'>Broad Firehose</a>',
	'hgnc':'<a target="_blank" href=\'http://www.genenames.org/\'>HUGO Gene Nomenclature Committee</a>',
	'cBio':'<a target="_blank" href=\'http://www.cbioportal.org/\'>cBioPortal</a>',
	'bradleyLab':'<a target="_blank" href=\'http://bradleybiology.org/\'>Bradley Lab</a>',
	'ucsc-PNAS':'<a target="_blank" href=\'http://www.pnas.org/content/113/19/5394.full/\'>Publication</a>',
	'ucsc':'<a target="_blank" href=\'https://genome-cancer.ucsc.edu/\'>UCSC</a>',
	'orgHs':'<a target="_blank" href=\'https://bioconductor.org/packages/release/data/annotation/html/org.Hs.eg.db.html\'>Genome wide annotation for Human</a>'
};


helper.format.h1("Data Provenance");
helper.format.text("We use two collections to track the metadata for all the data collections within our database. 'manifest' is organized by collection. 'lookup_oncoscape_datasource' is organized by disease.");
// Describe lookup_oncoscape_datasource
helper.format.h2("Pipeline");
helper.format.text("![Data Processing Pipeline](/images/datapipeline2.png)");
helper.format.h2("Oncoscape Interface");
helper.format.text("we use lookup as an hand-off from data-generation to data-utilization. Lookup is reminding us the data are organized by diseases. And they have the subcategories: clinical, molecular. The lookup is organized by disease. The top half: meta about the disease set. The bottom is the actual data. from each lookup document. The meta section is organized by..The actual section is organized by … subcategories. Render tables are created for tool; MP: render_patient; PCA: render_pca"); 

helper.format.text("Key words to describe lookup_oncoscape_datasource collection");
helper.format.text("Key | Annotation");
helper.format.table("--------- | ----------- ");
var lookup_keys_annot_keys = Object.keys(lookup_keys_annot); 
for(var i=0;i<lookup_keys_annot_keys.length;i++){
	helper.format.table(lookup_keys_annot_keys[i] + " | " + lookup_keys_annot[lookup_keys_annot_keys[i]]);
}    

helper.format.h3("Disease List");
var disease_length = lookup_elem.disease.length;
helper.format.text("Disease Code | Disease Name");
helper.format.table("--------- | ----------- "); 
for(var j=0;j<disease_length;j++){
	helper.format.table(lookup_elem.disease[j] + " | " + lookup_elem.name[j])
} 

helper.format.h3("source");

helper.format.text('<a target="_blank" href=\'https://gdc.cancer.gov/\'>TCGA</a>');

helper.format.h3("clinical");
helper.format.text("Key words to describe clinical collections for each disease type");
helper.format.text("clinical collection type | Annotation");
helper.format.table("--------- | ----------- ");
var lookup_clinical_keys_annot_keys = Object.keys(lookup_clinical_keys_annot); 
for(var m=0;m<lookup_clinical_keys_annot_keys.length;m++){
	helper.format.table(lookup_clinical_keys_annot_keys[m] + " | " + type_keys_annot[lookup_clinical_keys_annot_keys[m]]);
}  

helper.format.h3("molecular");
var lookup_molecular_source_keys = lookup_elem.molecular.source;
helper.format.text("molecular collection source | Annotation");
helper.format.table("--------- | ----------- ");
for(var n=0;n<lookup_molecular_source_keys.length;n++){
	helper.format.table(lookup_molecular_source_keys[n] + " | " + source_keys_annot[lookup_molecular_source_keys[n]]);
} 
var lookup_molecular_type_keys = lookup_elem.molecular.type;
helper.format.text("molecular collection type | Annotation");
helper.format.table("--------- | ----------- ");
for(p=0;p<lookup_molecular_type_keys.length;p++){
	helper.format.table(lookup_molecular_type_keys[p] + " | " + type_keys_annot[lookup_molecular_type_keys[p]]);
} 


helper.format.h3("category");
var lookup_category_source_keys = lookup_elem.category.source;
helper.format.text("category collection source | Annotation");
helper.format.table("--------- | ----------- ");
for(n=0;n<lookup_category_source_keys.length;n++){
	helper.format.table(lookup_category_source_keys[n] + " | " + source_keys_annot[lookup_category_source_keys[n]]);
} 
var lookup_category_type_keys = lookup_elem.category.type;
helper.format.text("category collection type | Annotation");
helper.format.table("--------- | ----------- ");
for(p=0;p<lookup_category_type_keys.length;p++){
	helper.format.table(lookup_category_type_keys[p] + " | " + type_keys_annot[lookup_category_type_keys[p]]);
} 

helper.format.h3("calculated");
var lookup_calculated_source_keys = lookup_elem.calculated.source;
helper.format.text("calculated collection source | Annotation");
helper.format.table("--------- | ----------- ");
for(n=0;n<lookup_calculated_source_keys.length;n++){
	helper.format.table(lookup_calculated_source_keys[n] + " | " + source_keys_annot[lookup_calculated_source_keys[n]]);
} 
var lookup_calculated_type_keys = lookup_elem.calculated.type;
helper.format.text("calculated collection type | Annotation");
helper.format.table("--------- | ----------- ");
for(p=0;p<lookup_calculated_type_keys.length;p++){
	helper.format.table(lookup_calculated_type_keys[p] + " | " + type_keys_annot[lookup_calculated_type_keys[p]]);
} 


helper.format.h3("edges");
helper.format.text("edges names are collections of genesets: ");
helper.format.text("edges geneset | geneset inhelper.formation");
helper.format.table("--------- | ----------- ");
var i=0;
lookup_elem.edges.name.forEach(function(e){
	helper.format.table(e + " | " + "hg19_genesets_hgnc_import[" + i  + "]");
	i++;
});
var lookup_edges_source_keys = lookup_elem.edges.source;
helper.format.text("edges collection source | Annotation");
helper.format.table("--------- | ----------- ");
for(n=0;n<lookup_edges_source_keys.length;n++){
	helper.format.table(lookup_edges_source_keys[n] + " | " + source_keys_annot[lookup_edges_source_keys[n]]);
} 
// Describe manifest
helper.format.h3("From Collection Perspective");
helper.format.text("Key words to describe manifest collection");
helper.format.text("Key | Annotation");
helper.format.table("--------- | ----------- ");
var manifest_keys_annot_keys = Object.keys(manifest_keys_annot); 
for(var i=0;i<manifest_keys_annot_keys.length;i++){
	helper.format.table(manifest_keys_annot_keys[i] + " | " + manifest_keys_annot[manifest_keys_annot_keys[i]]);
}   

helper.format.h3("Manifest Dataset");
helper.format.text("This field is identical to lookup_oncoscape_datasource's disease field.");
var manifest_keys_annot_keys = manifest_elem.dataset;
helper.format.text("Disease Code | Disease Name");
helper.format.table("--------- | ----------- "); 
manifest_keys_annot_keys.forEach(function(m){
	helper.format.table(m + " | " + lookup_elem.name[lookup_elem.disease.indexOf(m.toLowerCase())]);
});

helper.format.h3("All the datatypes within Database");
var manifest_type_keys = manifest_elem.dataType;
helper.format.text("collection type | Annotation");
helper.format.table("--------- | ----------- ");
for(p=0;p<manifest_type_keys.length;p++){
	helper.format.table(manifest_type_keys[p] + " | " + type_keys_annot[manifest_type_keys[p]]);
} 



/* REST API Query on gbm_patient_tcga_clinical */
helper.format.h1("Data Access");
helper.format.text("Oncoscape provides the RESTful API service. ");
helper.format.h2("Example to access one collection from browser");
helper.format.textbold("HTTP Request");
helper.format.text("Collections are accessable at the host: http://dev.oncoscape.sttrcancer.io/api/");
helper.format.text("The endpoint of oncoscape API is a unique URL. Every endpoint points to a unique collection.");
helper.format.table("Below lists more details of the organization of the Oncoscape Mongo Database and the collections organized by disease type.");
helper.format.url("GET http://dev.oncoscape.sttrcancer.io/api/gbm_patient_tcga_clinical/?q=&apikey=password");
helper.format.h2("Query Collection from Browser");
helper.format.textbold("HTTP Request");
var query = '{"gender":"MALE", "race":"WHITE","$fields":["gender","race","patient_ID"],"$skip":5,"$limit":2}'; 
helper.format.text("Filter by gender and race and only show the selected fields");
helper.format.url("GET http://dev.oncoscape.sttrcancer.io/api/gbm_patient_tcga_clinical/?q=" + query + "&apikey=password");
helper.format.text("only show gender, race and patient_ID");
helper.format.url('"$fields":["gender","race","patient_ID"]');
helper.format.text("skip the first five records");
helper.format.url('"$skip":5');
helper.format.text("limit the final output to two records.");
helper.format.url('"$limit":2');
helper.format.h2("Explore the Oncoscape Database");
helper.format.textbold("<a target='_blank' href='http://resources.sttrcancer.org/api/data-explorer/'>Data Explorer</a>");
  

