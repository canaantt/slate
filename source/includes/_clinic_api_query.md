
## Mongo DB Connection
```javascript
const mongoose = require("mongoose");
"mongoose.connect("mongodb://oncoscape-dev-db1.sttrcancer.io:27017,oncoscape-dev-db2.sttrcancer.io:27017,oncoscape-dev-db3.sttrcancer.io:27017/os?authSource=admin",{user: "oncoscapeRead",pass: "i1f4d9botHD4xnZ"});"
"var connection = mongoose.connection;"
"var db = connection.db;"

```

## Clinical Collections by Disease

### acc
Adrenocortical carcinoma

>List of collections

```
{
    "drug": "clinical_tcga_acc_drug",
    "f1": "clinical_tcga_acc_f1",
    "nte": "clinical_tcga_acc_nte",
    "nte_f1": "clinical_tcga_acc_nte_f1",
    "omf": "clinical_tcga_acc_omf",
    "pt": "clinical_tcga_acc_pt",
    "rad": "clinical_tcga_acc_rad"
}

```

### blca
Bladder Urothelial Carcinoma

>List of collections

```
{
    "drug": "clinical_tcga_blca_drug",
    "f1": "clinical_tcga_blca_f1",
    "f2": "clinical_tcga_blca_f2",
    "nte": "clinical_tcga_blca_nte",
    "nte_f1": "clinical_tcga_blca_nte_f1",
    "omf": "clinical_tcga_blca_omf",
    "pt": "clinical_tcga_blca_pt",
    "rad": "clinical_tcga_blca_rad"
}

```

### brca
Breast invasive carcinoma

>List of collections

```
{
    "drug": "clinical_tcga_brca_drug",
    "f1": "clinical_tcga_brca_f1",
    "f2": "clinical_tcga_brca_f2",
    "f3": "clinical_tcga_brca_f3",
    "nte": "clinical_tcga_brca_nte",
    "nte_f1": "clinical_tcga_brca_nte_f1",
    "omf": "clinical_tcga_brca_omf",
    "pt": "clinical_tcga_brca_pt",
    "rad": "clinical_tcga_brca_rad"
}

```

### cesc
Cervical squamous cell carcinoma and endocervical adenocarcinoma

>List of collections

```
{
    "drug": "clinical_tcga_cesc_drug",
    "f1": "clinical_tcga_cesc_f1",
    "f2": "clinical_tcga_cesc_f2",
    "nte": "clinical_tcga_cesc_nte",
    "nte_f1": "clinical_tcga_cesc_nte_f1",
    "omf": "clinical_tcga_cesc_omf",
    "pt": "clinical_tcga_cesc_pt",
    "rad": "clinical_tcga_cesc_rad"
}

```

### chol
Cholangiocarcinoma

>List of collections

```
{
    "drug": "clinical_tcga_chol_drug",
    "f1": "clinical_tcga_chol_f1",
    "nte": "clinical_tcga_chol_nte",
    "nte_f1": "clinical_tcga_chol_nte_f1",
    "omf": "clinical_tcga_chol_omf",
    "pt": "clinical_tcga_chol_pt",
    "rad": "clinical_tcga_chol_rad"
}

```

### coad
undefined

>List of collections

```
{
    "drug": "clinical_tcga_coad_drug",
    "f1": "clinical_tcga_coad_f1",
    "nte": "clinical_tcga_coad_nte",
    "nte_f1": "clinical_tcga_coad_nte_f1",
    "omf": "clinical_tcga_coad_omf",
    "pt": "clinical_tcga_coad_pt",
    "rad": "clinical_tcga_coad_rad"
}

```

### dlbc
Lymphoid Neoplasm Diffuse Large B-cell Lymphoma

>List of collections

```
{
    "drug": "clinical_tcga_dlbc_drug",
    "f1": "clinical_tcga_dlbc_f1",
    "nte": "clinical_tcga_dlbc_nte",
    "nte_f1": "clinical_tcga_dlbc_nte_f1",
    "pt": "clinical_tcga_dlbc_pt",
    "rad": "clinical_tcga_dlbc_rad"
}

```

### esca
Esophageal carcinoma

>List of collections

```
{
    "drug": "clinical_tcga_esca_drug",
    "f1": "clinical_tcga_esca_f1",
    "nte": "clinical_tcga_esca_nte",
    "nte_f1": "clinical_tcga_esca_nte_f1",
    "omf": "clinical_tcga_esca_omf",
    "pt": "clinical_tcga_esca_pt",
    "rad": "clinical_tcga_esca_rad"
}

```

### gbm
Glioblastoma multiforme

>List of collections

```
{
    "drug": "clinical_tcga_gbm_drug",
    "f1": "clinical_tcga_gbm_f1",
    "nte": "clinical_tcga_gbm_nte",
    "nte_f1": "clinical_tcga_gbm_nte_f1",
    "omf": "clinical_tcga_gbm_omf",
    "pt": "clinical_tcga_gbm_pt",
    "rad": "clinical_tcga_gbm_rad"
}

```

### hnsc
Head and Neck squamous cell carcinoma

>List of collections

```
{
    "drug": "clinical_tcga_hnsc_drug",
    "f1": "clinical_tcga_hnsc_f1",
    "f2": "clinical_tcga_hnsc_f2",
    "nte": "clinical_tcga_hnsc_nte",
    "nte_f1": "clinical_tcga_hnsc_nte_f1",
    "omf": "clinical_tcga_hnsc_omf",
    "pt": "clinical_tcga_hnsc_pt",
    "rad": "clinical_tcga_hnsc_rad"
}

```

### kich
Kidney Chromophobe

>List of collections

```
{
    "drug": "clinical_tcga_kich_drug",
    "f1": "clinical_tcga_kich_f1",
    "nte": "clinical_tcga_kich_nte",
    "nte_f1": "clinical_tcga_kich_nte_f1",
    "omf": "clinical_tcga_kich_omf",
    "pt": "clinical_tcga_kich_pt",
    "rad": "clinical_tcga_kich_rad"
}

```

### kirc
Kidney renal clear cell carcinoma

>List of collections

```
{
    "drug": "clinical_tcga_kirc_drug",
    "f1": "clinical_tcga_kirc_f1",
    "nte": "clinical_tcga_kirc_nte",
    "omf": "clinical_tcga_kirc_omf",
    "pt": "clinical_tcga_kirc_pt",
    "rad": "clinical_tcga_kirc_rad"
}

```

### kirp
Kidney renal papillary cell carcinoma

>List of collections

```
{
    "drug": "clinical_tcga_kirp_drug",
    "f1": "clinical_tcga_kirp_f1",
    "nte": "clinical_tcga_kirp_nte",
    "omf": "clinical_tcga_kirp_omf",
    "pt": "clinical_tcga_kirp_pt",
    "rad": "clinical_tcga_kirp_rad"
}

```

### laml
Acute Myeloid Leukemia

>List of collections

```
{
    "pt": "clinical_tcga_laml_pt"
}

```

### lgg
Brain Lower Grade Glioma

>List of collections

```
{
    "drug": "clinical_tcga_lgg_drug",
    "f1": "clinical_tcga_lgg_f1",
    "nte": "clinical_tcga_lgg_nte",
    "omf": "clinical_tcga_lgg_omf",
    "pt": "clinical_tcga_lgg_pt",
    "rad": "clinical_tcga_lgg_rad"
}

```

### lich
Liver hepatocellular carcinoma

>List of collections

```
{
    "drug": "clinical_tcga_lich_drug",
    "f1": "clinical_tcga_lich_f1",
    "nte": "clinical_tcga_lich_nte",
    "nte_f1": "clinical_tcga_lich_nte_f1",
    "omf": "clinical_tcga_lich_omf",
    "pt": "clinical_tcga_lich_pt",
    "rad": "clinical_tcga_lich_rad"
}

```

### luad
Lung adenocarcinoma

>List of collections

```
{
    "drug": "clinical_tcga_luad_drug",
    "f1": "clinical_tcga_luad_f1",
    "nte": "clinical_tcga_luad_nte",
    "omf": "clinical_tcga_luad_omf",
    "pt": "clinical_tcga_luad_pt",
    "rad": "clinical_tcga_luad_rad"
}

```

### lusc
Lung squamous cell carcinoma

>List of collections

```
{
    "drug": "clinical_tcga_lusc_drug",
    "f1": "clinical_tcga_lusc_f1",
    "nte": "clinical_tcga_lusc_nte",
    "omf": "clinical_tcga_lusc_omf",
    "pt": "clinical_tcga_lusc_pt",
    "rad": "clinical_tcga_lusc_rad"
}

```

### meso
Mesothelioma

>List of collections

```
{
    "drug": "clinical_tcga_meso_drug",
    "f1": "clinical_tcga_meso_f1",
    "nte": "clinical_tcga_meso_nte",
    "nte_f1": "clinical_tcga_meso_nte_f1",
    "omf": "clinical_tcga_meso_omf",
    "pt": "clinical_tcga_meso_pt",
    "rad": "clinical_tcga_meso_rad"
}

```

### ov
Ovarian serous cystadenocarcinoma

>List of collections

```
{
    "drug": "clinical_tcga_ov_drug",
    "f1": "clinical_tcga_ov_f1",
    "nte": "clinical_tcga_ov_nte",
    "nte_f1": "clinical_tcga_ov_nte_f1",
    "omf": "clinical_tcga_ov_omf",
    "pt": "clinical_tcga_ov_pt",
    "rad": "clinical_tcga_ov_rad"
}

```

### paad
Pancreatic adenocarcinoma

>List of collections

```
{
    "drug": "clinical_tcga_paad_drug",
    "f1": "clinical_tcga_paad_f1",
    "nte": "clinical_tcga_paad_nte",
    "nte_f1": "clinical_tcga_paad_nte_f1",
    "omf": "clinical_tcga_paad_omf",
    "pt": "clinical_tcga_paad_pt",
    "rad": "clinical_tcga_paad_rad"
}

```

### pcpg
Pheochromocytoma and Paraganglioma

>List of collections

```
{
    "drug": "clinical_tcga_pcpg_drug",
    "f1": "clinical_tcga_pcpg_f1",
    "nte": "clinical_tcga_pcpg_nte",
    "nte_f1": "clinical_tcga_pcpg_nte_f1",
    "omf": "clinical_tcga_pcpg_omf",
    "pt": "clinical_tcga_pcpg_pt",
    "rad": "clinical_tcga_pcpg_rad"
}

```

### prad
Prostate adenocarcinoma

>List of collections

```
{
    "drug": "clinical_tcga_prad_drug",
    "f1": "clinical_tcga_prad_f1",
    "nte": "clinical_tcga_prad_nte",
    "omf": "clinical_tcga_prad_omf",
    "pt": "clinical_tcga_prad_pt",
    "rad": "clinical_tcga_prad_rad"
}

```

### read
Rectum adenocarcinoma

>List of collections

```
{
    "drug": "clinical_tcga_read_drug",
    "f1": "clinical_tcga_read_f1",
    "nte": "clinical_tcga_read_nte",
    "nte_f1": "clinical_tcga_read_nte_f1",
    "omf": "clinical_tcga_read_omf",
    "pt": "clinical_tcga_read_pt",
    "rad": "clinical_tcga_read_rad"
}

```

### sarc
Sarcoma

>List of collections

```
{
    "drug": "clinical_tcga_sarc_drug",
    "f1": "clinical_tcga_sarc_f1",
    "nte": "clinical_tcga_sarc_nte",
    "nte_f1": "clinical_tcga_sarc_nte_f1",
    "omf": "clinical_tcga_sarc_omf",
    "pt": "clinical_tcga_sarc_pt",
    "rad": "clinical_tcga_sarc_rad"
}

```

### skcm
Skin Cutaneous Melanoma

>List of collections

```
{
    "drug": "clinical_tcga_skcm_drug",
    "f1": "clinical_tcga_skcm_f1",
    "nte": "clinical_tcga_skcm_nte",
    "omf": "clinical_tcga_skcm_omf",
    "pt": "clinical_tcga_skcm_pt",
    "rad": "clinical_tcga_skcm_rad"
}

```

### stad
Stomach adenocarcinoma

>List of collections

```
{
    "drug": "clinical_tcga_stad_drug",
    "f1": "clinical_tcga_stad_f1",
    "nte": "clinical_tcga_stad_nte",
    "omf": "clinical_tcga_stad_omf",
    "pt": "clinical_tcga_stad_pt",
    "rad": "clinical_tcga_stad_rad"
}

```

### tgct
Testicular Germ Cell Tumors

>List of collections

```
{
    "drug": "clinical_tcga_tgct_drug",
    "f1": "clinical_tcga_tgct_f1",
    "nte": "clinical_tcga_tgct_nte",
    "nte_f1": "clinical_tcga_tgct_nte_f1",
    "omf": "clinical_tcga_tgct_omf",
    "pt": "clinical_tcga_tgct_pt",
    "rad": "clinical_tcga_tgct_rad"
}

```

### thca
Thyroid carcinoma

>List of collections

```
{
    "drug": "clinical_tcga_thca_drug",
    "f1": "clinical_tcga_thca_f1",
    "f2": "clinical_tcga_thca_f2",
    "nte": "clinical_tcga_thca_nte",
    "nte_f1": "clinical_tcga_thca_nte_f1",
    "nte_f2": "clinical_tcga_thca_nte_f2",
    "omf": "clinical_tcga_thca_omf",
    "pt": "clinical_tcga_thca_pt",
    "rad": "clinical_tcga_thca_rad"
}

```

### thym
Thymoma

>List of collections

```
{
    "drug": "clinical_tcga_thym_drug",
    "f1": "clinical_tcga_thym_f1",
    "nte": "clinical_tcga_thym_nte",
    "nte_f1": "clinical_tcga_thym_nte_f1",
    "omf": "clinical_tcga_thym_omf",
    "pt": "clinical_tcga_thym_pt",
    "rad": "clinical_tcga_thym_rad"
}

```

### ucec
Uterine Corpus Endometrial Carcinoma

>List of collections

```
{
    "drug": "clinical_tcga_ucec_drug",
    "f1": "clinical_tcga_ucec_f1",
    "f2": "clinical_tcga_ucec_f2",
    "f3": "clinical_tcga_ucec_f3",
    "nte": "clinical_tcga_ucec_nte",
    "nte_f1": "clinical_tcga_ucec_nte_f1",
    "omf": "clinical_tcga_ucec_omf",
    "pt": "clinical_tcga_ucec_pt",
    "rad": "clinical_tcga_ucec_rad"
}

```

### ucs
Uterine Carcinosarcoma

>List of collections

```
{
    "drug": "clinical_tcga_ucs_drug",
    "f1": "clinical_tcga_ucs_f1",
    "nte": "clinical_tcga_ucs_nte",
    "nte_f1": "clinical_tcga_ucs_nte_f1",
    "omf": "clinical_tcga_ucs_omf",
    "pt": "clinical_tcga_ucs_pt",
    "rad": "clinical_tcga_ucs_rad"
}

```

### uvm
Uveal Melanoma

>List of collections

```
{
    "drug": "clinical_tcga_uvm_drug",
    "f1": "clinical_tcga_uvm_f1",
    "nte": "clinical_tcga_uvm_nte",
    "omf": "clinical_tcga_uvm_omf",
    "pt": "clinical_tcga_uvm_pt",
    "rad": "clinical_tcga_uvm_rad"
}

```

### List of fields that most records have

>Fields for most of records in clinical_tcga_acc_pt

```
[ '_id',
  'patient_ID',
  'prospective_collection',
  'retrospective_collection',
  'gender',
  'race',
  'history_other_malignancy',
  'history_neoadjuvant_treatment',
  'status_tumor',
  'status_vital',
  'radiation_treatment_adjuvant',
  'pharmaceutical_tx_adjuvant',
  'pharm_tx_mitotane',
  'laterality',
  'histologic_diagnosis',
  'diagnosis_year',
  'weiss_score_overall',
  'mitoses_per_50_hpf',
  'stage_S',
  'residual_tumor',
  'history_adrenal_hormone_excess',
  'molecular_studies_others_performed',
  'new_tumor_event_diagnosis',
  'age_at_initial_pathologic_diagnosis',
  'atypical_mitotic_figures',
  'stage_M',
  'cytoplasm_less_than_equal_25_percent',
  'days_to_birth',
  'days_to_death',
  'days_to_diagnosis',
  'diffuse_architecture',
  'icd_10',
  'icd_3_histology',
  'icd_3',
  'invasion_of_tumor_capsule',
  'mitotic_rate_greater_than_5/50_HPF',
  'necrosis',
  'nuclear_grade_III_IV',
  'stage_N1',
  'stage_T1',
  'sinusoid_invasion',
  'tissue_source_site_code',
  'tumor_tissue_site',
  'weiss_venous_invasion' ]

```

### Get the count of records in the collection

#### HTTP Request

`GET http://oncoscape.sttrcancer.io/api/clinical_tcga_acc_pt/count`


>Count of records in clinical_tcga_acc_pt

```
92

```

### Query detail information from collection clinical_tcga_acc_pt
Filter by gender and race and only show the selected fields

#### HTTP Request

`GET http://oncoscape.sttrcancer.io/api/clinical_tcga_acc_pt/?q={"gender":"MALE", "race":"WHITE","$fields":["gender","race","patient_ID"],"$skip":5,"$limit":2}`

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
        "_id": "5776e1b487fac0aca951b80f",
        "patient_ID": "TCGA.OR.A5JG",
        "gender": "MALE",
        "race": "WHITE",
        "histologic_diagnosis": "ADRENOCORTICAL CARCINOMA"
    },
    {
        "_id": "5776e1b487fac0aca951b811",
        "patient_ID": "TCGA.OR.A5JI",
        "gender": "MALE",
        "race": "WHITE",
        "histologic_diagnosis": "ADRENOCORTICAL CARCINOMA"
    }
]

```

>Count of the records meet this criteria

```
2

```
```javascript
collection = db.collection("clinical_tcga_acc_pt");
"collection.find({"gender":"MALE", "race":"WHITE"},{"patient_ID":true, "gender":true, "race":true, "histologic_diagnosis":true}).limit(2).skip(5).toArray(function(err, doc){);console.log(JSON.stringify(doc, null, 4));"

```
```mongo
db.getCollection("clinical_tcga_acc_pt").find({"gender":"MALE", "race":"WHITE"},{"patient_ID":true, "gender":true, "race":true, "histologic_diagnosis":true}).skip(5).limit(2)

```
```r
install.packages("rmongodb")
"library(rmongodb)"

```
```python
pip install pymongo
"from pymongo import MongoClient"
"client = MongoClient("mongodb://oncoscape-dev-db1.sttrcancer.io:27017,oncoscape-dev-db2.sttrcancer.io:27017,oncoscape-dev-db3.sttrcancer.io:27017/os?authSource=admin")"
"db = client.os"
"db["clinical_tcga_acc_pt"]"

```
