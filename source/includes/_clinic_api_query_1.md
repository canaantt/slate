
## Mongo DB Connection
```javascript
"mongoose.connect("mongodb://oncoscape-dev-db1.sttrcancer.io:27017,oncoscape-dev-db2.sttrcancer.io:27017,oncoscape-dev-db3.sttrcancer.io:27017/pancan12?authSource=admin",{user: "oncoscapeRead",pass: "i1f4d9botHD4xnZ"});"
"var connection = mongoose.connection;"
"var db = connection.db;"

```

## Example of fields from one record

>Fields for most of records in gbm_patient_tcga_na

```

[ '_id',
  'patient_ID',
  'history_lgg_dx_of_brain_tissue',
  'prospective_collection',
  'retrospective_collection',
  'gender',
  'days_to_birth',
  'race',
  'ethnicity',
  'history_other_malignancy',
  'history_neoadjuvant_treatment',
  'diagnosis_year',
  'pathologic_method',
  'method_initial_path_dx_other',
  'status_vital',
  'days_to_last_contact',
  'days_to_death',
  'status_tumor',
  'KPS',
  'ECOG',
  'encounter_type',
  'radiation_treatment_adjuvant',
  'pharmaceutical_tx_adjuvant',
  'treatment_outcome_first_course',
  'new_tumor_event_diagnosis_indicator',
  'age_at_diagnosis',
  'anatomic_neoplasm_subdivision',
  'days_to_diagnosis',
  'histologic_type',
  'tissue_source_site_code',
  'tumor_tissue_site' ]

```

## Get the count of records in the collection

### HTTP Request

`GET http://oncoscape.sttrcancer.io/api/gbm_patient_tcga_na/count`


>Count of records in gbm_patient_tcga_na

```

1192

```

## Query detail information from collection gbm_patient_tcga_na

Filter by gender and race and only show the selected fields

### HTTP Request

`GET http://oncoscape.sttrcancer.io/api/gbm_patient_tcga_na/?q={"gender":"MALE", "race":"WHITE","$fields":["gender","race","patient_ID"],"$skip":5,"$limit":2}`


only show gender, race and patient_ID

`"$fields":["gender","race","patient_ID"]`


skip the first five records

`"$skip":5`


limit the final output to two records.

`"$limit":2`


>Male White patients result: 

```

[
    {
        "_id": "57aa2b3f6cfe8ff0eb66810e",
        "patient_ID": "TCGA-02-0024-01",
        "gender": "MALE",
        "race": "WHITE"
    },
    {
        "_id": "57aa2b3f6cfe8ff0eb66810f",
        "patient_ID": "TCGA-02-0025-01",
        "gender": "MALE",
        "race": "WHITE"
    }
]

```

>Count of the records meet this criteria

```

2

```
```javascript
collection = db.collection("gbm_patient_tcga_na");
collection.find({"gender":"MALE", "race":"WHITE"},
{"patient_ID":true, "gender":true, "race":true, "histologic_diagnosis":true})
.limit(2).skip(5).toArray(function(err, doc){);"
console.log(JSON.stringify(doc, null, 4));

>To get the fields of first document and the count of the documents in collection
var collection = "gbm_patient_tcga_clinical";
var url = "https\://dev.oncoscape.sttrcancer.io/api/" + collection + "/?q=";
$.get(url, function(data) {
var field_names = Object.keys(data[0]);
var count = data.length;
console.log("fields name of the first records: " + field_names);
console.log("counts: " + count);});

```
```mongo
db.getCollection("gbm_patient_tcga_na").
find({"gender":"MALE", "race":"WHITE"},{"patient_ID":true, "gender":true, "race":true, "histologic_diagnosis":true}).skip(5).limit(2)

```
```r
install.packages("rmongodb")
library(rmongodb)

```
```python
pip install pymongo
from pymongo import MongoClient
client = MongoClient("mongodb://oncoscape-dev-db1.sttrcancer.io:27017,oncoscape-dev-db2.sttrcancer.io:27017,oncoscape-dev-db3.sttrcancer.io:27017/pancan12?authSource=admin")
db = client.os
db["gbm_patient_tcga_na"]

```

# Collections by Disease

## HG19 - Genome Platform

Collection Name | Collection Type | Data Source | Data Type
--------- | ----------- | ----------- | -----------
hg19_genesets_hgnc_import | category | hgnc | genesets
hg19_genesets_orghs_10000 | category | orgHs | genesets
hg19_genesets_orghs_1e+05 | category | orgHs | genesets

## BRCA - Breast invasive carcinoma

Collection Name | Collection Type | Data Source | Data Type
--------- | ----------- | ----------- | -----------
brca_patient_tcga_clinical | clinical | TCGA | 
brca_drug_tcga_clinical | clinical | TCGA | 
brca_radiation_tcga_clinical | clinical | TCGA | 
brca_followup-v1p5_tcga_clinical | clinical | TCGA | 
brca_followup-v2p1_tcga_clinical | clinical | TCGA | 
brca_followup-v4p0_tcga_clinical | clinical | TCGA | 
brca_newtumor_tcga_clinical | clinical | TCGA | 
brca_newtumor-followup-v4p0_tcga_clinical | clinical | TCGA | 
brca_othermalignancy-v4p0_tcga_clinical | clinical | TCGA | 
brca_events_tcga_clinical | clinical | TCGA | 
brca_cnv_cbio_gistic | molecular | cBio | cnv
brca_mut_cbio_wxs | molecular | cBio | mut
brca_mut01_cbio_import | molecular | cBio | mut01
brca_methylation_cbio_hm27 | molecular | cBio | methylation
brca_methylation_cbio_hm450 | molecular | cBio | methylation
brca_rna_cbio_microarray-agilent-median-zscore | molecular | cBio | rna
brca_rna_cbio_rnaseq-median-zscore | molecular | cBio | rna
brca_protein_cbio_rppa-zscore | molecular | cBio | protein
brca_cnv_ucsc_gistic2thd | molecular | ucsc | cnv
brca_mut_ucsc_mutationcuratedwustlgene | molecular | ucsc | mut
brca_mut01_ucsc_import | molecular | ucsc | mut01
brca_psi_bradleylab_miso | molecular | bradleyLab | psi
brca_color_tcga_import | category | tcga | color

## ESCA - Esophageal carcinoma

Collection Name | Collection Type | Data Source | Data Type
--------- | ----------- | ----------- | -----------
esca_cnv_ucsc_gistic2thd | molecular | ucsc | cnv

## LUNG - Lung adenocarcinoma & Lung squamous cell carcinoma

Collection Name | Collection Type | Data Source | Data Type
--------- | ----------- | ----------- | -----------
lung_events_tcga_clinical | clinical | TCGA | 
lung_facs_demo_flow | molecular | demo | facs
lung_cnv_ucsc_gistic2thd | molecular | ucsc | cnv
lung_mut_ucsc_mutation | molecular | ucsc | mut
lung_mut01_ucsc_mutation | molecular | ucsc | mut01
lung_cnv_cbio_gistic | molecular | cBio | cnv
lung_mut_cbio_mut | molecular | cBio | mut
lung_mut01_cbio_mut | molecular | cBio | mut01
lung_methylation_cbio_methylationhm27 | molecular | cBio | methylation
lung_methylation_cbio_methylationhm450 | molecular | cBio | methylation
lung_rna_cbio_microarray-agilent | molecular | cBio | rna
lung_rna_cbio_rnaseq | molecular | cBio | rna
lung_rna_cbio_microarray-u133 | molecular | cBio | rna
lung_protein_cbio_rppa | molecular | cBio | protein

## COAD - Colon adenocarcinoma

Collection Name | Collection Type | Data Source | Data Type
--------- | ----------- | ----------- | -----------
coad_patient_tcga_na | clinical | TCGA | 
coad_drug_tcga_na | clinical | TCGA | 
coad_radiation_tcga_na | clinical | TCGA | 
coad_followup-v1p0_tcga_na | clinical | TCGA | 
coad_newtumor_tcga_na | clinical | TCGA | 
coad_othermalignancy-v4p0_tcga_na | clinical | TCGA | 

## GBM - Glioblastoma multiforme

Collection Name | Collection Type | Data Source | Data Type
--------- | ----------- | ----------- | -----------
gbm_patient_tcga_na | clinical | TCGA | 
gbm_drug_tcga_na | clinical | TCGA | 
gbm_radiation_tcga_na | clinical | TCGA | 
gbm_followup-v1p0_tcga_na | clinical | TCGA | 
gbm_newtumor_tcga_na | clinical | TCGA | 
gbm_othermalignancy-v4p0_tcga_na | clinical | TCGA | 
gbm_events_tcga_clinical | clinical | TCGA | 
gbm_cnv_ucsc_gistic2thd | molecular | ucsc | cnv
gbm_mut_ucsc_mutationbroadgene | molecular | ucsc | mut
gbm_mut01_ucsc_import | molecular | ucsc | mut01

## COADREAD - Colon adenocarcinoma & Rectum adenocarcinoma

Collection Name | Collection Type | Data Source | Data Type
--------- | ----------- | ----------- | -----------
coadread_events_tcga_clinical | clinical | TCGA | 
coadread_cnv_ucsc_gistic2thd | molecular | ucsc | cnv
coadread_mut_ucsc_mutation | molecular | ucsc | mut
coadread_mut01_ucsc_mutation | molecular | ucsc | mut01
coadread_cnv_cbio_gistic | molecular | cBio | cnv
coadread_mut_cbio_mut | molecular | cBio | mut
coadread_mut01_cbio_mut | molecular | cBio | mut01
coadread_methylation_cbio_methylationhm27 | molecular | cBio | methylation
coadread_methylation_cbio_methylationhm450 | molecular | cBio | methylation
coadread_rna_cbio_microarray-agilent | molecular | cBio | rna
coadread_rna_cbio_rnaseq | molecular | cBio | rna
coadread_protein_cbio_rppa | molecular | cBio | protein

## HNSC - Head and Neck squamous cell carcinoma

Collection Name | Collection Type | Data Source | Data Type
--------- | ----------- | ----------- | -----------
hnsc_patient_tcga_na | clinical | TCGA | 
hnsc_drug_tcga_na | clinical | TCGA | 
hnsc_radiation_tcga_na | clinical | TCGA | 
hnsc_followup-v1p0_tcga_na | clinical | TCGA | 
hnsc_followup-v4p8_tcga_na | clinical | TCGA | 
hnsc_newtumor_tcga_na | clinical | TCGA | 
hnsc_newtumor-followup-v4p8_tcga_na | clinical | TCGA | 
hnsc_othermalignancy-v4p0_tcga_na | clinical | TCGA | 
hnsc_events_tcga_clinical | clinical | TCGA | 
hnsc_cnv_ucsc_gistic2thd | molecular | ucsc | cnv
hnsc_mut_ucsc_mutationbroadgene | molecular | ucsc | mut
hnsc_mut01_ucsc_mutationbroadgene | molecular | ucsc | mut01
hnsc_cnv_cbio_gistic | molecular | cBio | cnv
hnsc_mut_cbio_mut | molecular | cBio | mut
hnsc_mut01_cbio_mut | molecular | cBio | mut01
hnsc_methylation_cbio_methylationhm450 | molecular | cBio | methylation
hnsc_rna_cbio_rnaseq | molecular | cBio | rna
hnsc_protein_cbio_rppa | molecular | cBio | protein
hnsc_color_tcga_import | category | tcga | color

## LGG - Brain Lower Grade Glioma

Collection Name | Collection Type | Data Source | Data Type
--------- | ----------- | ----------- | -----------
lgg_patient_tcga_na | clinical | TCGA | 
lgg_drug_tcga_na | clinical | TCGA | 
lgg_radiation_tcga_na | clinical | TCGA | 
lgg_followup-v1p0_tcga_na | clinical | TCGA | 
lgg_newtumor_tcga_na | clinical | TCGA | 
lgg_othermalignancy-v4p0_tcga_na | clinical | TCGA | 
lgg_events_tcga_clinical | clinical | TCGA | 
lgg_cnv_ucsc_gistic2thd | molecular | ucsc | cnv
lgg_mut_ucsc_mutationbroadgene | molecular | ucsc | mut
lgg_mut01_ucsc_mutationbroadgene | molecular | ucsc | mut01

## LUAD - Lung adenocarcinoma

Collection Name | Collection Type | Data Source | Data Type
--------- | ----------- | ----------- | -----------
luad_patient_tcga_na | clinical | TCGA | 
luad_drug_tcga_na | clinical | TCGA | 
luad_radiation_tcga_na | clinical | TCGA | 
luad_followup-v1p0_tcga_na | clinical | TCGA | 
luad_newtumor_tcga_na | clinical | TCGA | 
luad_othermalignancy-v4p0_tcga_na | clinical | TCGA | 
luad_events_tcga_clinical | clinical | TCGA | 
luad_cnv_ucsc_gistic2thd | molecular | ucsc | cnv
luad_mut_ucsc_mutationbroadgene | molecular | ucsc | mut
luad_mut01_ucsc_mutationbroadgene | molecular | ucsc | mut01
luad_cnv_cbio_gistic | molecular | cBio | cnv
luad_mut_cbio_mut | molecular | cBio | mut
luad_mut01_cbio_mut | molecular | cBio | mut01
luad_methylation_cbio_methylationhm27 | molecular | cBio | methylation
luad_methylation_cbio_methylationhm450 | molecular | cBio | methylation
luad_rna_cbio_microarray-agilent | molecular | cBio | rna
luad_rna_cbio_rnaseq | molecular | cBio | rna
luad_protein_cbio_rppa | molecular | cBio | protein

## LUSC - Lung squamous cell carcinoma

Collection Name | Collection Type | Data Source | Data Type
--------- | ----------- | ----------- | -----------
lusc_patient_tcga_na | clinical | TCGA | 
lusc_drug_tcga_na | clinical | TCGA | 
lusc_radiation_tcga_na | clinical | TCGA | 
lusc_followup-v1p0_tcga_na | clinical | TCGA | 
lusc_newtumor_tcga_na | clinical | TCGA | 
lusc_othermalignancy-v4p0_tcga_na | clinical | TCGA | 
lusc_cnv_ucsc_gistic2thd | molecular | ucsc | cnv
lusc_mut_ucsc_mutationbroadgene | molecular | ucsc | mut
lusc_mut01_ucsc_mutationbroadgene | molecular | ucsc | mut01
lusc_cnv_cbio_gistic | molecular | cBio | cnv
lusc_mut_cbio_mut | molecular | cBio | mut
lusc_mut01_cbio_mut | molecular | cBio | mut01
lusc_methylation_cbio_methylationhm27 | molecular | cBio | methylation
lusc_methylation_cbio_methylationhm450 | molecular | cBio | methylation
lusc_rna_cbio_microarray-agilent | molecular | cBio | rna
lusc_rna_cbio_rnaseq | molecular | cBio | rna
lusc_rna_cbio_microarray-u133 | molecular | cBio | rna
lusc_protein_cbio_rppa | molecular | cBio | protein
lusc_color_tcga_import | category | tcga | color

## PRAD - Prostate adenocarcinoma

Collection Name | Collection Type | Data Source | Data Type
--------- | ----------- | ----------- | -----------
prad_patient_tcga_na | clinical | TCGA | 
prad_drug_tcga_na | clinical | TCGA | 
prad_radiation_tcga_na | clinical | TCGA | 
prad_followup-v1p0_tcga_na | clinical | TCGA | 
prad_newtumor_tcga_na | clinical | TCGA | 
prad_othermalignancy-v4p0_tcga_na | clinical | TCGA | 
prad_cnv_ucsc_gistic2thd | molecular | ucsc | cnv
prad_mut_ucsc_mutationbroadgene | molecular | ucsc | mut
prad_mut01_ucsc_mutationbroadgene | molecular | ucsc | mut01
prad_cnv_cbio_gistic | molecular | cBio | cnv
prad_mut_cbio_mut | molecular | cBio | mut
prad_mut01_cbio_mut | molecular | cBio | mut01
prad_methylation_cbio_methylationhm450 | molecular | cBio | methylation
prad_rna_cbio_microarray-agilent | molecular | cBio | rna
prad_protein_cbio_rppa | molecular | cBio | protein
prad_color_tcga_import | category | tcga | color

## PAAD - Pancreatic adenocarcinoma

Collection Name | Collection Type | Data Source | Data Type
--------- | ----------- | ----------- | -----------
paad_patient_tcga_na | clinical | TCGA | 
paad_drug_tcga_na | clinical | TCGA | 
paad_radiation_tcga_na | clinical | TCGA | 
paad_followup-v4p4_tcga_na | clinical | TCGA | 
paad_newtumor_tcga_na | clinical | TCGA | 
paad_newtumor-followup-v4p4_tcga_na | clinical | TCGA | 
paad_othermalignancy-v4p0_tcga_na | clinical | TCGA | 
paad_cnv_ucsc_gistic2thd | molecular | ucsc | cnv
paad_mut_ucsc_mutationbroadgene | molecular | ucsc | mut
paad_mut01_ucsc_mutationbroadgene | molecular | ucsc | mut01
paad_cnv_cbio_gistic | molecular | cBio | cnv
paad_mut_cbio_mut | molecular | cBio | mut
paad_mut01_cbio_mut | molecular | cBio | mut01
paad_rna_cbio_rnaseq | molecular | cBio | rna

## ACC - Adrenocortical carcinoma

Collection Name | Collection Type | Data Source | Data Type
--------- | ----------- | ----------- | -----------
acc_cnv_ucsc_gistic2thd | molecular | ucsc | cnv

## BLCA - Bladder Urothelial Carcinoma

Collection Name | Collection Type | Data Source | Data Type
--------- | ----------- | ----------- | -----------
blca_patient_tcga_na | clinical | TCGA | 
blca_drug_tcga_na | clinical | TCGA | 
blca_radiation_tcga_na | clinical | TCGA | 
blca_followup-v4p0_tcga_na | clinical | TCGA | 
blca_newtumor_tcga_na | clinical | TCGA | 
blca_newtumor-followup-v4p0_tcga_na | clinical | TCGA | 
blca_othermalignancy-v4p0_tcga_na | clinical | TCGA | 
blca_cnv_ucsc_gistic2thd | molecular | ucsc | cnv
blca_mut_ucsc_mutationbroadgene | molecular | ucsc | mut
blca_mut01_ucsc_mutationbroadgene | molecular | ucsc | mut01

## CESC - Cervical squamous cell carcinoma and endocervical adenocarcinoma

Collection Name | Collection Type | Data Source | Data Type
--------- | ----------- | ----------- | -----------
cesc_cnv_ucsc_gistic2thd | molecular | ucsc | cnv

## CHOL - Cholangiocarcinoma

Collection Name | Collection Type | Data Source | Data Type
--------- | ----------- | ----------- | -----------
chol_cnv_ucsc_gistic2thd | molecular | ucsc | cnv

## DLBC - Lymphoid Neoplasm Diffuse Large B-cell Lymphoma

Collection Name | Collection Type | Data Source | Data Type
--------- | ----------- | ----------- | -----------
dlbc_cnv_ucsc_gistic2thd | molecular | ucsc | cnv

## LAML - Acute Myeloid Leukemia

Collection Name | Collection Type | Data Source | Data Type
--------- | ----------- | ----------- | -----------
laml_patient_tcga_na | clinical | TCGA | 
laml_cnv_ucsc_gistic2thd | molecular | ucsc | cnv
laml_mut_ucsc_mutation | molecular | ucsc | mut
laml_mut01_ucsc_mutation | molecular | ucsc | mut01

## SARC - Sarcoma

Collection Name | Collection Type | Data Source | Data Type
--------- | ----------- | ----------- | -----------
sarc_patient_tcga_na | clinical | TCGA | 
sarc_drug_tcga_na | clinical | TCGA | 
sarc_radiation_tcga_na | clinical | TCGA | 
sarc_followup-v4p0_tcga_na | clinical | TCGA | 
sarc_newtumor_tcga_na | clinical | TCGA | 
sarc_newtumor-followup-v4p0_tcga_na | clinical | TCGA | 
sarc_othermalignancy-v4p0_tcga_na | clinical | TCGA | 
sarc_cnv_ucsc_gistic2thd | molecular | ucsc | cnv

## STAD - Stomach adenocarcinoma

Collection Name | Collection Type | Data Source | Data Type
--------- | ----------- | ----------- | -----------
stad_mut_ucsc_mutationbcmgene | molecular | ucsc | mut
stad_mut01_ucsc_mutationbcmgene | molecular | ucsc | mut01

## READ - Rectum adenocarcinoma

Collection Name | Collection Type | Data Source | Data Type
--------- | ----------- | ----------- | -----------
read_patient_tcga_na | clinical | TCGA | 
read_drug_tcga_na | clinical | TCGA | 
read_radiation_tcga_na | clinical | TCGA | 
read_followup-v1p0_tcga_na | clinical | TCGA | 
read_newtumor_tcga_na | clinical | TCGA | 
read_othermalignancy-v4p0_tcga_na | clinical | TCGA | 

## BRAIN - Lower Grade Glioma & Glioblastoma multiforme

Collection Name | Collection Type | Data Source | Data Type
--------- | ----------- | ----------- | -----------
brain_patient_tcga_clinical | clinical | TCGA | 
brain_followup-v1p0_tcga_clinical | clinical | TCGA | 
brain_drug_tcga_clinical | clinical | TCGA | 
brain_newtumor_tcga_clinical | clinical | TCGA | 
brain_othermalignancy-v4p0_tcga_clinical | clinical | TCGA | 
brain_events_tcga_clinical | clinical | TCGA | 
brain_cnv_ucsc_gistic | molecular | ucsc | cnv
brain_mut01_ucsc_import | molecular | ucsc | mut01
brain_cnv_cbio_gistic | molecular | cBio | cnv
brain_mut_cbio_wxs | molecular | cBio | mut
brain_mut01_cbio_import | molecular | cBio | mut01
brain_methylation_cbio_hm27 | molecular | cBio | methylation
brain_rna_cbio_rnaseq-bc | molecular | cBio | rna
brain_protein_cbio_rppa-zscore | molecular | cBio | protein
brain_color_tcga_import | category | tcga | color
