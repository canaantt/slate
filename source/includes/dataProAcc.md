
# Data Provenance

We use two collections to track the metadata for all the data collections within our database. 'manifest' is organized by collection. 'lookup_oncoscape_datasource' is organized by disease.

## Pipeline

![Data Processing Pipeline](/images/datapipeline.png)

## Oncoscape Interface

we use lookup as an hand-off from data-generation to data-utilization. Lookup is reminding us the data are organized by diseases. And they have the subcategories: clinical, molecular. The lookup is organized by disease. The top half: meta about the disease set. The bottom is the actual data. from each lookup document. The meta section is organized by..The actual section is organized by … subcategories. Render tables are created for tool; MP: render_patient; PCA: render_pca

Key words to describe lookup_oncoscape_datasource collection

Key | Annotation
--------- | ----------- 
disease | disease code used in Oncoscape naming system
source | data source
beta | For a specific dataset, if the beta value is true, this dataset is currently only alive in the developmental environment and won't be included in the production version of Oncoscape application.
name | disease name
img | images utilized for Oncoscape application
clinical | clinic-related collections
category | geneset and coloring collections utilized by Oncoscape application
molecular | molecular collections
calculated | derived colletions for PCA (one of the Oncoscape tools) and Multidimensional scaling
edges | derived colecitons for Markers and Patient (one of the Oncoscape tools)
type | all possible data type for each collection

### Disease List

Disease Code | Disease Name
--------- | ----------- 
brain | Brain
brca | Breast
esca | Esophageal
gbm | Glioblastoma
hnsc | Head and Neck
kich | Kidney chromophobe
kirc | Kidney renal clear cell
kirp | Kidney renal papillary cell
lgg | Lower grade glioma
lihc | Liver
luad | Lung adenocarcinoma
lusc | Lung squamous cell
sarc | Sarcoma
paad | Pancreas
prad | Prostate
skcm | Skin cutaneous melanoma
stad | Stomach
thca | Thyroid carcinoma
ucec | Uterine corpus endometrial
acc | Adrenocortical carcinoma
blca | Bladder urothelial carcinoma
cesc | Cervical
chol | Cholangiocarcinoma
dlbc | Diffuse large B-cell
coadread | Colorectal
lung | Lung
coad | Colon
hg19 | hg19
laml | Acute Myeloid Leukemia
read | Rectal
ucs | Uterine carcinosarcoma
uvm | Uveal melanoma
thym | Thymoma
tgct | Testicular germ cell
pcpg | Pheochromocytoma & Paraganglioma
ov | Ovarian
meso | Mesothelioma

### source

<a target="_blank" href='https://gdc.cancer.gov/'>TCGA</a>

### clinical

Key words to describe clinical collections for each disease type

clinical collection type | Annotation
--------- | ----------- 
events | clinical events collection organized by patient
patient | patient collection for each disease type
drug | chemo or other medicine administration records
newTumor | new tumor event records for possible patients
otherMalignancy | other maliganancy records for possible patients
radiation | radiation administration records
followUp | possible follow-up records
newTumor-followUp | possible follow-up records for the new tumor events

### molecular

molecular collection source | Annotation
--------- | ----------- 
broad | <a target="_blank" href='https://gdac.broadinstitute.org//'>Broad Firehose</a>
cBio | <a target="_blank" href='http://www.cbioportal.org/'>cBioPortal</a>
ucsc-PNAS | <a target="_blank" href='http://www.pnas.org/content/113/19/5394.full/'>Publication</a>
ucsc | <a target="_blank" href='https://genome-cancer.ucsc.edu/'>UCSC</a>
bradleyLab | <a target="_blank" href='http://bradleybiology.org/'>Bradley Lab</a>
demo | undefined

molecular collection type | Annotation
--------- | ----------- 
mut | non-synonymous mutations representated as strings in this collection
mut01 | non-synonymous mutations representated as binary values in this collection
methylation | DNA methlyation data
cnv | DNA copy-number data represented as Gistic score
psi | percentage spliced in (PSI, Ψ) values in RNA splicing data
rna | mRNA and microRNA expression data
protein | protein-level and phosphoprotein level (RPPA) data
facs | Fluorescence-activated cell sorting data

### category

category collection source | Annotation
--------- | ----------- 
tcga | <a target="_blank" href='https://gdc.cancer.gov/'>TCGA</a>
hgnc | <a target="_blank" href='http://www.genenames.org/'>HUGO Gene Nomenclature Committee</a>
orgHs | <a target="_blank" href='https://bioconductor.org/packages/release/data/annotation/html/org.Hs.eg.db.html'>Genome wide annotation for Human</a>

category collection type | Annotation
--------- | ----------- 
color | a collection for coloring in Oncoscape application
genesets | a collection of multiple genesets with specific genes in each set

### calculated

calculated collection source | Annotation
--------- | ----------- 
ucsc | <a target="_blank" href='https://genome-cancer.ucsc.edu/'>UCSC</a>
broad | <a target="_blank" href='https://gdac.broadinstitute.org//'>Broad Firehose</a>

calculated collection type | Annotation
--------- | ----------- 
pcaScores | calculated PCA scores for a specific data with specific genesets
pcaLoadings | pre-calculated PCA scores for a specific data with specific genesets
mds | Multidimensional Scaling data for a specific data with specific genesets

### edges

edges names are collections of genesets: 

edges geneset | geneset information
--------- | ----------- 
TCGA GBM classifiers | hg19_genesets_hgnc_import[0]
Marker genes 545 | hg19_genesets_hgnc_import[1]
TCGA pancan mutated | hg19_genesets_hgnc_import[2]
oncoVogel274 | hg19_genesets_hgnc_import[3]
Oncoplex | hg19_genesets_hgnc_import[4]
OSCC Chen 131 probes | hg19_genesets_hgnc_import[5]
OSCC Chen 9 genes | hg19_genesets_hgnc_import[6]

edges collection source | Annotation
--------- | ----------- 
broad | <a target="_blank" href='https://gdac.broadinstitute.org//'>Broad Firehose</a>
ucsc | <a target="_blank" href='https://genome-cancer.ucsc.edu/'>UCSC</a>

### From Collection Perspective

Key words to describe manifest collection

Key | Annotation
--------- | ----------- 
dataset | disease code used in Oncoscape naming system
dataType | all possible data type for each collection
date | processed date
source | data source
process | process that used to derive this collection
processName | name of the process that used to derive this collection
parent | the collection(s) used to derive this collection

### Manifest Dataset

This field is identical to lookup_oncoscape_datasource's disease field.

Disease Code | Disease Name
--------- | ----------- 
brain | Brain
brca | Breast
esca | Esophageal
gbm | Glioblastoma
hnsc | Head and Neck
kich | Kidney chromophobe
KIRC | Kidney renal clear cell
kirp | Kidney renal papillary cell
lgg | Lower grade glioma
lihc | Liver
luad | Lung adenocarcinoma
lusc | Lung squamous cell
sarc | Sarcoma
paad | Pancreas
prad | Prostate
skcm | Skin cutaneous melanoma
stad | Stomach
thca | Thyroid carcinoma
ucec | Uterine corpus endometrial
acc | Adrenocortical carcinoma
blca | Bladder urothelial carcinoma
cesc | Cervical
chol | Cholangiocarcinoma
dlbc | Diffuse large B-cell
coadread | Colorectal
lung | Lung
coad | Colon
hg19 | hg19
laml | Acute Myeloid Leukemia
read | Rectal
ucs | Uterine carcinosarcoma
uvm | Uveal melanoma
thym | Thymoma
tgct | Testicular germ cell
pcpg | Pheochromocytoma & Paraganglioma
ov | Ovarian
meso | Mesothelioma
kirc | Kidney renal clear cell

### All the datatypes within Database

collection type | Annotation
--------- | ----------- 
color | a collection for coloring in Oncoscape application
mut | non-synonymous mutations representated as strings in this collection
mut01 | non-synonymous mutations representated as binary values in this collection
events | clinical events collection organized by patient
patient | patient collection for each disease type
drug | chemo or other medicine administration records
newTumor | new tumor event records for possible patients
otherMalignancy | other maliganancy records for possible patients
radiation | radiation administration records
followUp | possible follow-up records
newTumor-followUp | possible follow-up records for the new tumor events
genesets | a collection of multiple genesets with specific genes in each set
methylation | DNA methlyation data
rna | mRNA and microRNA expression data
protein | protein-level and phosphoprotein level (RPPA) data
psi | percentage spliced in (PSI, Ψ) values in RNA splicing data
facs | Fluorescence-activated cell sorting data
cnv | DNA copy-number data represented as Gistic score
annotation | annotation files for a specific data type, for instance RNA splicing
chromosome | annoataion for chromosomes
genes | annotation data used to annotate genes
centromere | centromere position for each chromosome on human genome
pcaScores | calculated PCA scores for a specific data with specific genesets
pcaLoadings | pre-calculated PCA scores for a specific data with specific genesets
mds | Multidimensional Scaling data for a specific data with specific genesets
edges | derived collection to describe edges between genes and patients use for Markers and Patients (one of the Oncoscape tools)
ptDegree | derived collection to describe the weight of patients based on on the number of data points use for Markers and Patients (one of the Oncoscape tools)
geneDegree | derived collection to describe the weight of genes based on on the number of data points use for Markers and Patients (one of the Oncoscape tools)

### Genesets Details

Key | description | number of genes
--------- | --------- | ---------
TCGA_GBM_classifiers | <a target="_blank" href='https://www.ncbi.nlm.nih.gov/pmc/articles/PMC2818769/'>TCGA_GBM_classifiers</a> | <a href="#TCGA_GBM_classifiers" onclick="genesetDisplay">840</a>
Marker_genes_545 | The 545-gene set is all the genes that are recurrently impacted in TCGA gliomas. | <a href="#Marker_genes_545" onclick="genesetDisplay">545</a>
TCGA_pancan_mutated | all the genes recurrently mutated across all TCGA cancers (note that it may not be up to date for all the TCGA samples currently available | <a href="#TCGA_pancan_mutated" onclick="genesetDisplay">64</a>
oncoVogel274 | The OncoVogel274 gene set comes from combining (an old version of Oncoplex) with genes from this (famous) paper by <a target="_blank" href='https://www.ncbi.nlm.nih.gov/pubmed/23539594/'>Vogelstein</a> | <a href="#oncoVogel274" onclick="genesetDisplay">274</a>
Oncoplex | <a target="_blank" href='http://tests.labmed.washington.edu/UW-OncoPlex/'>UW Oncoplex Cancer Panel</a> | <a href="#Oncoplex" onclick="genesetDisplay">263</a>
OSCC_Chen_131_probes | <a target="_blank" href='https://www.ncbi.nlm.nih.gov/pubmed/18669583/'>OSCC_Chen_131_probes</a> | <a href="#OSCC_Chen_131_probes" onclick="genesetDisplay">109</a>
OSCC_Chen_9_genes | <a target="_blank" href='https://www.ncbi.nlm.nih.gov/pmc/articles/PMC4527746//'>OSCC_Chen_9_genes</a> | <a href="#OSCC_Chen_9_genes" onclick="genesetDisplay">9</a>

# Data Access

## Example to access one collection from browser

### HTTP Request

Collections are accessable at the host: http://dev.oncoscape.sttrcancer.io/api/

The endpoint of oncoscape API is a unique URL. Every endpoint points to a unique collection.
Below lists more details of the organization of the Oncoscape Mongo Database and the collections organized by disease type.

`GET http://dev.oncoscape.sttrcancer.io/api/gbm_patient_tcga_clinical/?q=&apikey=password`


## Query Collection from Browser

### HTTP Request

Filter by gender and race and only show the selected fields

`GET http://dev.oncoscape.sttrcancer.io/api/gbm_patient_tcga_clinical/?q={"gender":"MALE", "race":"WHITE","$fields":["gender","race","patient_ID"],"$skip":5,"$limit":2}&apikey=password`


only show gender, race and patient_ID

`"$fields":["gender","race","patient_ID"]`


skip the first five records

`"$skip":5`


limit the final output to two records.

`"$limit":2`

