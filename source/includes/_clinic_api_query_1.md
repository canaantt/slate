
## Mongo DB Connection
```javascript
const mongoose = require("mongoose");
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


**patient**

Data Source | Data Type
--------- | -----------
TCGA|


**drug**

Data Source | Data Type
--------- | -----------
TCGA|


**radiation**

Data Source | Data Type
--------- | -----------
TCGA|


**followUp-v1p5**

Data Source | Data Type
--------- | -----------
TCGA|


**followUp-v2p1**

Data Source | Data Type
--------- | -----------
TCGA|


**followUp-v4p0**

Data Source | Data Type
--------- | -----------
TCGA|


**newTumor**

Data Source | Data Type
--------- | -----------
TCGA|


**newTumor-followUp-v4p0**

Data Source | Data Type
--------- | -----------
TCGA|


**otherMalignancy-v4p0**

Data Source | Data Type
--------- | -----------
TCGA|


**events**

Data Source | Data Type
--------- | -----------
TCGA|

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


**events**

Data Source | Data Type
--------- | -----------
TCGA|

## COAD - Colon adenocarcinoma

### clinical


**patient**

Data Source | Data Type
--------- | -----------
TCGA|


**drug**

Data Source | Data Type
--------- | -----------
TCGA|


**radiation**

Data Source | Data Type
--------- | -----------
TCGA|


**followUp-v1p0**

Data Source | Data Type
--------- | -----------
TCGA|


**newTumor**

Data Source | Data Type
--------- | -----------
TCGA|


**otherMalignancy-v4p0**

Data Source | Data Type
--------- | -----------
TCGA|
[TypeError: Cannot read property 'toUpperCase' of undefined]
