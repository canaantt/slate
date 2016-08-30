
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
var url = "https://dev.oncoscape.sttrcancer.io/api/" + collection + "/?q=";
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
undefined
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

### category


**hg19_genesets_hgnc_import**

Data Source | Data Type
--------- | -----------
hgnc|genesets


**hg19_genesets_orghs_10000**

Data Source | Data Type
--------- | -----------
orgHs|genesets


**hg19_genesets_orghs_1e+05**

Data Source | Data Type
--------- | -----------
orgHs|genesets

## BRCA - Breast invasive carcinoma

### molecular


**brca_cnv_cbio_gistic**

Data Source | Data Type
--------- | -----------
cBio|cnv


**brca_mut_cbio_wxs**

Data Source | Data Type
--------- | -----------
cBio|mut


**brca_mut01_cbio_import**

Data Source | Data Type
--------- | -----------
cBio|mut01


**brca_methylation_cbio_hm27**

Data Source | Data Type
--------- | -----------
cBio|methylation


**brca_methylation_cbio_hm450**

Data Source | Data Type
--------- | -----------
cBio|methylation


**brca_rna_cbio_microarray-agilent-median-zscore**

Data Source | Data Type
--------- | -----------
cBio|rna


**brca_rna_cbio_rnaseq-median-zscore**

Data Source | Data Type
--------- | -----------
cBio|rna


**brca_protein_cbio_rppa-zscore**

Data Source | Data Type
--------- | -----------
cBio|protein


**brca_cnv_ucsc_gistic2thd**

Data Source | Data Type
--------- | -----------
ucsc|cnv


**brca_mut_ucsc_mutationcuratedwustlgene**

Data Source | Data Type
--------- | -----------
ucsc|mut


**brca_mut01_ucsc_import**

Data Source | Data Type
--------- | -----------
ucsc|mut01


**brca_psi_bradleylab_miso**

Data Source | Data Type
--------- | -----------
bradleyLab|psi

### clinical


**brca_patient_tcga_clinical**

Data Source | Data Type
--------- | -----------
TCGA|


**brca_drug_tcga_clinical**

Data Source | Data Type
--------- | -----------
TCGA|


**brca_radiation_tcga_clinical**

Data Source | Data Type
--------- | -----------
TCGA|


**brca_followup-v1p5_tcga_clinical**

Data Source | Data Type
--------- | -----------
TCGA|


**brca_followup-v2p1_tcga_clinical**

Data Source | Data Type
--------- | -----------
TCGA|


**brca_followup-v4p0_tcga_clinical**

Data Source | Data Type
--------- | -----------
TCGA|


**brca_newtumor_tcga_clinical**

Data Source | Data Type
--------- | -----------
TCGA|


**brca_newtumor-followup-v4p0_tcga_clinical**

Data Source | Data Type
--------- | -----------
TCGA|


**brca_othermalignancy-v4p0_tcga_clinical**

Data Source | Data Type
--------- | -----------
TCGA|


**brca_events_tcga_clinical**

Data Source | Data Type
--------- | -----------
TCGA|

### category


**brca_color_tcga_import**

Data Source | Data Type
--------- | -----------
tcga|color

## ESCA - Esophageal carcinoma

### molecular


**esca_cnv_ucsc_gistic2thd**

Data Source | Data Type
--------- | -----------
ucsc|cnv

## LUNG - Lung adenocarcinoma & Lung squamous cell carcinoma

### molecular


**lung_facs_demo_flow**

Data Source | Data Type
--------- | -----------
demo|facs


**lung_cnv_ucsc_gistic2thd**

Data Source | Data Type
--------- | -----------
ucsc|cnv


**lung_mut_ucsc_mutation**

Data Source | Data Type
--------- | -----------
ucsc|mut


**lung_mut01_ucsc_mutation**

Data Source | Data Type
--------- | -----------
ucsc|mut01


**lung_cnv_cbio_gistic**

Data Source | Data Type
--------- | -----------
cBio|cnv


**lung_mut_cbio_mut**

Data Source | Data Type
--------- | -----------
cBio|mut


**lung_mut01_cbio_mut**

Data Source | Data Type
--------- | -----------
cBio|mut01


**lung_methylation_cbio_methylationhm27**

Data Source | Data Type
--------- | -----------
cBio|methylation


**lung_methylation_cbio_methylationhm450**

Data Source | Data Type
--------- | -----------
cBio|methylation


**lung_rna_cbio_microarray-agilent**

Data Source | Data Type
--------- | -----------
cBio|rna


**lung_rna_cbio_rnaseq**

Data Source | Data Type
--------- | -----------
cBio|rna


**lung_rna_cbio_microarray-u133**

Data Source | Data Type
--------- | -----------
cBio|rna


**lung_protein_cbio_rppa**

Data Source | Data Type
--------- | -----------
cBio|protein

### clinical


**lung_events_tcga_clinical**

Data Source | Data Type
--------- | -----------
TCGA|

## COAD - Colon adenocarcinoma

### clinical


**coad_patient_tcga_na**

Data Source | Data Type
--------- | -----------
TCGA|


**coad_drug_tcga_na**

Data Source | Data Type
--------- | -----------
TCGA|


**coad_radiation_tcga_na**

Data Source | Data Type
--------- | -----------
TCGA|


**coad_followup-v1p0_tcga_na**

Data Source | Data Type
--------- | -----------
TCGA|


**coad_newtumor_tcga_na**

Data Source | Data Type
--------- | -----------
TCGA|


**coad_othermalignancy-v4p0_tcga_na**

Data Source | Data Type
--------- | -----------
TCGA|

## GBM - Glioblastoma multiforme

### molecular


**gbm_cnv_ucsc_gistic2thd**

Data Source | Data Type
--------- | -----------
ucsc|cnv


**gbm_mut_ucsc_mutationbroadgene**

Data Source | Data Type
--------- | -----------
ucsc|mut


**gbm_mut01_ucsc_import**

Data Source | Data Type
--------- | -----------
ucsc|mut01

### clinical


**gbm_patient_tcga_na**

Data Source | Data Type
--------- | -----------
TCGA|


**gbm_drug_tcga_na**

Data Source | Data Type
--------- | -----------
TCGA|


**gbm_radiation_tcga_na**

Data Source | Data Type
--------- | -----------
TCGA|


**gbm_followup-v1p0_tcga_na**

Data Source | Data Type
--------- | -----------
TCGA|


**gbm_newtumor_tcga_na**

Data Source | Data Type
--------- | -----------
TCGA|


**gbm_othermalignancy-v4p0_tcga_na**

Data Source | Data Type
--------- | -----------
TCGA|


**gbm_events_tcga_clinical**

Data Source | Data Type
--------- | -----------
TCGA|

## COADREAD - Colon adenocarcinoma & Rectum adenocarcinoma

### molecular


**coadread_cnv_ucsc_gistic2thd**

Data Source | Data Type
--------- | -----------
ucsc|cnv


**coadread_mut_ucsc_mutation**

Data Source | Data Type
--------- | -----------
ucsc|mut


**coadread_mut01_ucsc_mutation**

Data Source | Data Type
--------- | -----------
ucsc|mut01


**coadread_cnv_cbio_gistic**

Data Source | Data Type
--------- | -----------
cBio|cnv


**coadread_mut_cbio_mut**

Data Source | Data Type
--------- | -----------
cBio|mut


**coadread_mut01_cbio_mut**

Data Source | Data Type
--------- | -----------
cBio|mut01


**coadread_methylation_cbio_methylationhm27**

Data Source | Data Type
--------- | -----------
cBio|methylation


**coadread_methylation_cbio_methylationhm450**

Data Source | Data Type
--------- | -----------
cBio|methylation


**coadread_rna_cbio_microarray-agilent**

Data Source | Data Type
--------- | -----------
cBio|rna


**coadread_rna_cbio_rnaseq**

Data Source | Data Type
--------- | -----------
cBio|rna


**coadread_protein_cbio_rppa**

Data Source | Data Type
--------- | -----------
cBio|protein

### clinical


**coadread_events_tcga_clinical**

Data Source | Data Type
--------- | -----------
TCGA|

## HNSC - Head and Neck squamous cell carcinoma

### molecular


**hnsc_cnv_ucsc_gistic2thd**

Data Source | Data Type
--------- | -----------
ucsc|cnv


**hnsc_mut_ucsc_mutationbroadgene**

Data Source | Data Type
--------- | -----------
ucsc|mut


**hnsc_mut01_ucsc_mutationbroadgene**

Data Source | Data Type
--------- | -----------
ucsc|mut01


**hnsc_cnv_cbio_gistic**

Data Source | Data Type
--------- | -----------
cBio|cnv


**hnsc_mut_cbio_mut**

Data Source | Data Type
--------- | -----------
cBio|mut


**hnsc_mut01_cbio_mut**

Data Source | Data Type
--------- | -----------
cBio|mut01


**hnsc_methylation_cbio_methylationhm450**

Data Source | Data Type
--------- | -----------
cBio|methylation


**hnsc_rna_cbio_rnaseq**

Data Source | Data Type
--------- | -----------
cBio|rna


**hnsc_protein_cbio_rppa**

Data Source | Data Type
--------- | -----------
cBio|protein

### clinical


**hnsc_patient_tcga_na**

Data Source | Data Type
--------- | -----------
TCGA|


**hnsc_drug_tcga_na**

Data Source | Data Type
--------- | -----------
TCGA|


**hnsc_radiation_tcga_na**

Data Source | Data Type
--------- | -----------
TCGA|


**hnsc_followup-v1p0_tcga_na**

Data Source | Data Type
--------- | -----------
TCGA|


**hnsc_followup-v4p8_tcga_na**

Data Source | Data Type
--------- | -----------
TCGA|


**hnsc_newtumor_tcga_na**

Data Source | Data Type
--------- | -----------
TCGA|


**hnsc_newtumor-followup-v4p8_tcga_na**

Data Source | Data Type
--------- | -----------
TCGA|


**hnsc_othermalignancy-v4p0_tcga_na**

Data Source | Data Type
--------- | -----------
TCGA|


**hnsc_events_tcga_clinical**

Data Source | Data Type
--------- | -----------
TCGA|

### category


**hnsc_color_tcga_import**

Data Source | Data Type
--------- | -----------
tcga|color

## LGG - Brain Lower Grade Glioma

### molecular


**lgg_cnv_ucsc_gistic2thd**

Data Source | Data Type
--------- | -----------
ucsc|cnv


**lgg_mut_ucsc_mutationbroadgene**

Data Source | Data Type
--------- | -----------
ucsc|mut


**lgg_mut01_ucsc_mutationbroadgene**

Data Source | Data Type
--------- | -----------
ucsc|mut01

### clinical


**lgg_patient_tcga_na**

Data Source | Data Type
--------- | -----------
TCGA|


**lgg_drug_tcga_na**

Data Source | Data Type
--------- | -----------
TCGA|


**lgg_radiation_tcga_na**

Data Source | Data Type
--------- | -----------
TCGA|


**lgg_followup-v1p0_tcga_na**

Data Source | Data Type
--------- | -----------
TCGA|


**lgg_newtumor_tcga_na**

Data Source | Data Type
--------- | -----------
TCGA|


**lgg_othermalignancy-v4p0_tcga_na**

Data Source | Data Type
--------- | -----------
TCGA|


**lgg_events_tcga_clinical**

Data Source | Data Type
--------- | -----------
TCGA|

## LUAD - Lung adenocarcinoma

### molecular


**luad_cnv_ucsc_gistic2thd**

Data Source | Data Type
--------- | -----------
ucsc|cnv


**luad_mut_ucsc_mutationbroadgene**

Data Source | Data Type
--------- | -----------
ucsc|mut


**luad_mut01_ucsc_mutationbroadgene**

Data Source | Data Type
--------- | -----------
ucsc|mut01


**luad_cnv_cbio_gistic**

Data Source | Data Type
--------- | -----------
cBio|cnv


**luad_mut_cbio_mut**

Data Source | Data Type
--------- | -----------
cBio|mut


**luad_mut01_cbio_mut**

Data Source | Data Type
--------- | -----------
cBio|mut01


**luad_methylation_cbio_methylationhm27**

Data Source | Data Type
--------- | -----------
cBio|methylation


**luad_methylation_cbio_methylationhm450**

Data Source | Data Type
--------- | -----------
cBio|methylation


**luad_rna_cbio_microarray-agilent**

Data Source | Data Type
--------- | -----------
cBio|rna


**luad_rna_cbio_rnaseq**

Data Source | Data Type
--------- | -----------
cBio|rna


**luad_protein_cbio_rppa**

Data Source | Data Type
--------- | -----------
cBio|protein

### clinical


**luad_patient_tcga_na**

Data Source | Data Type
--------- | -----------
TCGA|


**luad_drug_tcga_na**

Data Source | Data Type
--------- | -----------
TCGA|


**luad_radiation_tcga_na**

Data Source | Data Type
--------- | -----------
TCGA|


**luad_followup-v1p0_tcga_na**

Data Source | Data Type
--------- | -----------
TCGA|


**luad_newtumor_tcga_na**

Data Source | Data Type
--------- | -----------
TCGA|


**luad_othermalignancy-v4p0_tcga_na**

Data Source | Data Type
--------- | -----------
TCGA|


**luad_events_tcga_clinical**

Data Source | Data Type
--------- | -----------
TCGA|

## LUSC - Lung squamous cell carcinoma

### molecular


**lusc_cnv_ucsc_gistic2thd**

Data Source | Data Type
--------- | -----------
ucsc|cnv


**lusc_mut_ucsc_mutationbroadgene**

Data Source | Data Type
--------- | -----------
ucsc|mut


**lusc_mut01_ucsc_mutationbroadgene**

Data Source | Data Type
--------- | -----------
ucsc|mut01


**lusc_cnv_cbio_gistic**

Data Source | Data Type
--------- | -----------
cBio|cnv


**lusc_mut_cbio_mut**

Data Source | Data Type
--------- | -----------
cBio|mut


**lusc_mut01_cbio_mut**

Data Source | Data Type
--------- | -----------
cBio|mut01


**lusc_methylation_cbio_methylationhm27**

Data Source | Data Type
--------- | -----------
cBio|methylation


**lusc_methylation_cbio_methylationhm450**

Data Source | Data Type
--------- | -----------
cBio|methylation


**lusc_rna_cbio_microarray-agilent**

Data Source | Data Type
--------- | -----------
cBio|rna


**lusc_rna_cbio_rnaseq**

Data Source | Data Type
--------- | -----------
cBio|rna


**lusc_rna_cbio_microarray-u133**

Data Source | Data Type
--------- | -----------
cBio|rna


**lusc_protein_cbio_rppa**

Data Source | Data Type
--------- | -----------
cBio|protein

### clinical


**lusc_patient_tcga_na**

Data Source | Data Type
--------- | -----------
TCGA|


**lusc_drug_tcga_na**

Data Source | Data Type
--------- | -----------
TCGA|


**lusc_radiation_tcga_na**

Data Source | Data Type
--------- | -----------
TCGA|


**lusc_followup-v1p0_tcga_na**

Data Source | Data Type
--------- | -----------
TCGA|


**lusc_newtumor_tcga_na**

Data Source | Data Type
--------- | -----------
TCGA|


**lusc_othermalignancy-v4p0_tcga_na**

Data Source | Data Type
--------- | -----------
TCGA|

### category


**lusc_color_tcga_import**

Data Source | Data Type
--------- | -----------
tcga|color

## PRAD - Prostate adenocarcinoma

### molecular


**prad_cnv_ucsc_gistic2thd**

Data Source | Data Type
--------- | -----------
ucsc|cnv


**prad_mut_ucsc_mutationbroadgene**

Data Source | Data Type
--------- | -----------
ucsc|mut


**prad_mut01_ucsc_mutationbroadgene**

Data Source | Data Type
--------- | -----------
ucsc|mut01


**prad_cnv_cbio_gistic**

Data Source | Data Type
--------- | -----------
cBio|cnv


**prad_mut_cbio_mut**

Data Source | Data Type
--------- | -----------
cBio|mut


**prad_mut01_cbio_mut**

Data Source | Data Type
--------- | -----------
cBio|mut01


**prad_methylation_cbio_methylationhm450**

Data Source | Data Type
--------- | -----------
cBio|methylation


**prad_rna_cbio_microarray-agilent**

Data Source | Data Type
--------- | -----------
cBio|rna


**prad_protein_cbio_rppa**

Data Source | Data Type
--------- | -----------
cBio|protein

### clinical


**prad_patient_tcga_na**

Data Source | Data Type
--------- | -----------
TCGA|


**prad_drug_tcga_na**

Data Source | Data Type
--------- | -----------
TCGA|


**prad_radiation_tcga_na**

Data Source | Data Type
--------- | -----------
TCGA|


**prad_followup-v1p0_tcga_na**

Data Source | Data Type
--------- | -----------
TCGA|


**prad_newtumor_tcga_na**

Data Source | Data Type
--------- | -----------
TCGA|


**prad_othermalignancy-v4p0_tcga_na**

Data Source | Data Type
--------- | -----------
TCGA|

### category


**prad_color_tcga_import**

Data Source | Data Type
--------- | -----------
tcga|color

## PAAD - Pancreatic adenocarcinoma

### molecular


**paad_cnv_ucsc_gistic2thd**

Data Source | Data Type
--------- | -----------
ucsc|cnv


**paad_mut_ucsc_mutationbroadgene**

Data Source | Data Type
--------- | -----------
ucsc|mut


**paad_mut01_ucsc_mutationbroadgene**

Data Source | Data Type
--------- | -----------
ucsc|mut01


**paad_cnv_cbio_gistic**

Data Source | Data Type
--------- | -----------
cBio|cnv


**paad_mut_cbio_mut**

Data Source | Data Type
--------- | -----------
cBio|mut


**paad_mut01_cbio_mut**

Data Source | Data Type
--------- | -----------
cBio|mut01


**paad_rna_cbio_rnaseq**

Data Source | Data Type
--------- | -----------
cBio|rna

### clinical


**paad_patient_tcga_na**

Data Source | Data Type
--------- | -----------
TCGA|


**paad_drug_tcga_na**

Data Source | Data Type
--------- | -----------
TCGA|


**paad_radiation_tcga_na**

Data Source | Data Type
--------- | -----------
TCGA|


**paad_followup-v4p4_tcga_na**

Data Source | Data Type
--------- | -----------
TCGA|


**paad_newtumor_tcga_na**

Data Source | Data Type
--------- | -----------
TCGA|


**paad_newtumor-followup-v4p4_tcga_na**

Data Source | Data Type
--------- | -----------
TCGA|


**paad_othermalignancy-v4p0_tcga_na**

Data Source | Data Type
--------- | -----------
TCGA|

## ACC - Adrenocortical carcinoma

### molecular


**acc_cnv_ucsc_gistic2thd**

Data Source | Data Type
--------- | -----------
ucsc|cnv

## BLCA - Bladder Urothelial Carcinoma

### molecular


**blca_cnv_ucsc_gistic2thd**

Data Source | Data Type
--------- | -----------
ucsc|cnv


**blca_mut_ucsc_mutationbroadgene**

Data Source | Data Type
--------- | -----------
ucsc|mut


**blca_mut01_ucsc_mutationbroadgene**

Data Source | Data Type
--------- | -----------
ucsc|mut01

### clinical


**blca_patient_tcga_na**

Data Source | Data Type
--------- | -----------
TCGA|


**blca_drug_tcga_na**

Data Source | Data Type
--------- | -----------
TCGA|


**blca_radiation_tcga_na**

Data Source | Data Type
--------- | -----------
TCGA|


**blca_followup-v4p0_tcga_na**

Data Source | Data Type
--------- | -----------
TCGA|


**blca_newtumor_tcga_na**

Data Source | Data Type
--------- | -----------
TCGA|


**blca_newtumor-followup-v4p0_tcga_na**

Data Source | Data Type
--------- | -----------
TCGA|


**blca_othermalignancy-v4p0_tcga_na**

Data Source | Data Type
--------- | -----------
TCGA|

## CESC - Cervical squamous cell carcinoma and endocervical adenocarcinoma

### molecular


**cesc_cnv_ucsc_gistic2thd**

Data Source | Data Type
--------- | -----------
ucsc|cnv

## CHOL - Cholangiocarcinoma

### molecular


**chol_cnv_ucsc_gistic2thd**

Data Source | Data Type
--------- | -----------
ucsc|cnv

## DLBC - Lymphoid Neoplasm Diffuse Large B-cell Lymphoma

### molecular


**dlbc_cnv_ucsc_gistic2thd**

Data Source | Data Type
--------- | -----------
ucsc|cnv

## LAML - Acute Myeloid Leukemia

### molecular


**laml_cnv_ucsc_gistic2thd**

Data Source | Data Type
--------- | -----------
ucsc|cnv


**laml_mut_ucsc_mutation**

Data Source | Data Type
--------- | -----------
ucsc|mut


**laml_mut01_ucsc_mutation**

Data Source | Data Type
--------- | -----------
ucsc|mut01

### clinical


**laml_patient_tcga_na**

Data Source | Data Type
--------- | -----------
TCGA|

## SARC - Sarcoma

### molecular


**sarc_cnv_ucsc_gistic2thd**

Data Source | Data Type
--------- | -----------
ucsc|cnv

### clinical


**sarc_patient_tcga_na**

Data Source | Data Type
--------- | -----------
TCGA|


**sarc_drug_tcga_na**

Data Source | Data Type
--------- | -----------
TCGA|


**sarc_radiation_tcga_na**

Data Source | Data Type
--------- | -----------
TCGA|


**sarc_followup-v4p0_tcga_na**

Data Source | Data Type
--------- | -----------
TCGA|


**sarc_newtumor_tcga_na**

Data Source | Data Type
--------- | -----------
TCGA|


**sarc_newtumor-followup-v4p0_tcga_na**

Data Source | Data Type
--------- | -----------
TCGA|


**sarc_othermalignancy-v4p0_tcga_na**

Data Source | Data Type
--------- | -----------
TCGA|

## STAD - Stomach adenocarcinoma

### molecular


**stad_mut_ucsc_mutationbcmgene**

Data Source | Data Type
--------- | -----------
ucsc|mut


**stad_mut01_ucsc_mutationbcmgene**

Data Source | Data Type
--------- | -----------
ucsc|mut01

## READ - Rectum adenocarcinoma

### clinical


**read_patient_tcga_na**

Data Source | Data Type
--------- | -----------
TCGA|


**read_drug_tcga_na**

Data Source | Data Type
--------- | -----------
TCGA|


**read_radiation_tcga_na**

Data Source | Data Type
--------- | -----------
TCGA|


**read_followup-v1p0_tcga_na**

Data Source | Data Type
--------- | -----------
TCGA|


**read_newtumor_tcga_na**

Data Source | Data Type
--------- | -----------
TCGA|


**read_othermalignancy-v4p0_tcga_na**

Data Source | Data Type
--------- | -----------
TCGA|

## BRAIN - Lower Grade Glioma & Glioblastoma multiforme

### molecular


**brain_cnv_ucsc_gistic**

Data Source | Data Type
--------- | -----------
ucsc|cnv


**brain_mut01_ucsc_import**

Data Source | Data Type
--------- | -----------
ucsc|mut01


**brain_cnv_cbio_gistic**

Data Source | Data Type
--------- | -----------
cBio|cnv


**brain_mut_cbio_wxs**

Data Source | Data Type
--------- | -----------
cBio|mut


**brain_mut01_cbio_import**

Data Source | Data Type
--------- | -----------
cBio|mut01


**brain_methylation_cbio_hm27**

Data Source | Data Type
--------- | -----------
cBio|methylation


**brain_rna_cbio_rnaseq-bc**

Data Source | Data Type
--------- | -----------
cBio|rna


**brain_protein_cbio_rppa-zscore**

Data Source | Data Type
--------- | -----------
cBio|protein

### clinical


**brain_patient_tcga_clinical**

Data Source | Data Type
--------- | -----------
TCGA|


**brain_followup-v1p0_tcga_clinical**

Data Source | Data Type
--------- | -----------
TCGA|


**brain_drug_tcga_clinical**

Data Source | Data Type
--------- | -----------
TCGA|


**brain_newtumor_tcga_clinical**

Data Source | Data Type
--------- | -----------
TCGA|


**brain_othermalignancy-v4p0_tcga_clinical**

Data Source | Data Type
--------- | -----------
TCGA|


**brain_events_tcga_clinical**

Data Source | Data Type
--------- | -----------
TCGA|

### category


**brain_color_tcga_import**

Data Source | Data Type
--------- | -----------
tcga|color
