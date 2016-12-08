
# Rest API Queries

## Example to access one collection from browser

### HTTP Request

Collections are accessable at the host: http://dev.oncoscape.sttrcancer.io/api/

The endpoint of oncoscape API is a unique URL. Every endpoint points to a unique collection.
Below lists more details of the organization of the Oncoscape Mongo Database and the collections organized by disease type.

`GET http://dev.oncoscape.sttrcancer.io/api/gbm_patient_tcga_clinical/`


> Here we only show the first record in gbm_patient_tcga_clinical


```

{
    "_id": "5848c25d61f0f98b374f7fe0",
    "bcr_patient_uuid": "30a1fe5e-5b12-472c-aa86-c2db8167ab23",
    "patient_ID": "TCGA-02-0001",
    "form_completion_date": "2008-12-16",
    "history_lgg_dx_of_brain_tissue": false,
    "prospective_collection": null,
    "retrospective_collection": null,
    "gender": "FEMALE",
    "days_to_birth": -16179,
    "race": "WHITE",
    "ethnicity": "NOT HISPANIC OR LATINO",
    "prior_malignancy": null,
    "history_neoadjuvant_treatment": true,
    "diagnosis_year": 1009872000,
    "pathologic_method": "TUMOR RESECTION",
    "method_initial_path_dx_other": null,
    "status_vital": "DEAD",
    "days_to_last_follow_up": 279,
    "days_to_death": 358,
    "last_known_disease_status": "WITH TUMOR",
    "KPS": 80,
    "ECOG": null,
    "encounter_type": null,
    "radiation_treatment_adjuvant": null,
    "pharmaceutical_tx_adjuvant": null,
    "treatment_outcome_first_course": null,
    "progression_or_recurrence": null,
    "age_at_diagnosis": 44,
    "anatomic_organ_subdivision": null,
    "days_to_diagnosis": 0,
    "disease_code": null,
    "primary_diagnosis": "GLIOBLASTOMA MULTIFORME UNTREATED PRIMARY",
    "icd_10": "C71.9",
    "icd_3_histology": "9440/3",
    "site_of_resection_or_biopsy": "C71.9",
    "informed_consent_verified": "YES",
    "patient_id": "0001",
    "project_code": "[Not Available]",
    "tissue_source_site_code": "02",
    "tumor_tissue_site": "BRAIN"
}
```


## Query Collection from Browser

### HTTP Request

> Here we show the first two records that meet the below criteria: gender is male, race is white. We have skipped the first five records from the results. And we only show three fields (patient_ID, gender and race.


```

[
    {
        "_id": "5848c25e61f0f98b374f7fed",
        "patient_ID": "TCGA-02-0024",
        "gender": "MALE",
        "race": "WHITE"
    },
    {
        "_id": "5848c25e61f0f98b374f7fee",
        "patient_ID": "TCGA-02-0025",
        "gender": "MALE",
        "race": "WHITE"
    }
]
```


Filter by gender and race and only show the selected fields

`GET http://dev.oncoscape.sttrcancer.io/api/gbm_patient_tcga_clinical/?q={"gender":"MALE", "race":"WHITE","$fields":["gender","race","patient_ID"],"$skip":5,"$limit":2}`


only show gender, race and patient_ID

`"$fields":["gender","race","patient_ID"]`


skip the first five records

`"$skip":5`


limit the final output to two records.

`"$limit":2`


## Fetch JSON-Formatted Data Using Programming Languages

> Fetch JSON formatted data using R, Python, or javascript


```javascript
var collection = "gbm_patient_tcga_clinical";
var url = "https://dev.oncoscape.sttrcancer.io/api/" + collection + "/?q=";
$.get(url, function(data) {
     var field_names = Object.keys(data[0]);
     var count = data.length;
     console.log("fields name of the first records: " + field_names);
     console.log("counts: " + count);
  });
```


```r
install.packages("jsonlite")
install.packages("curl")
library(jsonlite)
library(curl)
gbm_patient <- fromJSON("https://dev.oncoscape.sttrcancer.io/api/gbm_patient_tcga_clinical")
str(gbm_patient, max.level=2)
'data.frame': 596 obs. of  33 variables:
$ patient_ID                         : chr  "TCGA-02-0001-01" "TCGA-02-0003-01" "TCGA-02-0004-01" "TCGA-02-0006-01" ...
$ history_lgg_dx_of_brain_tissue     : logi  FALSE FALSE FALSE FALSE FALSE FALSE ...
$ prospective_collection             : logi  NA NA NA NA NA NA ...
$ retrospective_collection           : logi  NA NA NA NA NA NA ...
$ gender                             : chr  "FEMALE" "MALE" "MALE" "FEMALE" ...
$ days_to_birth                      : int  -16179 -18341 -21617 -20516 -14806 -22457 -7452 -6926 -9369 -18404 ...
$ race                               : chr  "WHITE" "WHITE" "WHITE" "WHITE" ...
$ ethnicity                          : chr  "NOT HISPANIC OR LATINO" "NOT HISPANIC OR LATINO" "NOT HISPANIC OR LATINO" "NOT HISPANIC OR LATINO" ...
$ history_other_malignancy           : logi  NA NA NA NA NA NA ...
$ history_neoadjuvant_treatment      : logi  TRUE FALSE FALSE FALSE TRUE FALSE ...
$ diagnosis_year                     : int  1009872000 1041408000 1009872000 1009872000 1009872000 1041408000 1009872000 1072944000 852105600 1009872000 ...
$ pathologic_method                  : logi  NA NA NA NA NA NA ...
$ pathologic_method                  : logi  NA NA NA NA NA NA ...
$ status_vital                       : chr  "DEAD" "DEAD" "DEAD" "DEAD" ...
$ days_to_last_contact               : int  279 144 345 558 705 322 1077 630 2512 627 ...
$ days_to_death                      : int  358 144 345 558 705 322 1077 630 2512 627 ...
$ status_tumor                       : chr  "WITH TUMOR" "WITH TUMOR" "WITH TUMOR" "WITH TUMOR" ...
$ KPS                                : int  80 100 80 80 80 80 80 80 100 80 ...
$ ECOG                               : int  NA NA NA NA NA NA NA NA NA NA ...
$ encounter_type                     : chr  NA NA NA NA ...
$ radiation_treatment_adjuvant       : logi  NA NA NA NA NA NA ...
$ pharmaceutical_tx_adjuvant         : logi  NA NA NA NA NA NA ...
$ treatment_outcome_first_course     : chr  NA NA NA NA ...
$ new_tumor_event_diagnosis          : logi  NA NA NA NA NA NA ...
$ age_at_initial_pathologic_diagnosis: int  44 50 59 56 40 61 20 18 25 50 ...
$ anatomic_organ_subdivision         : logi  NA NA NA NA NA NA ...
$ days_to_diagnosis                  : int  0 0 0 0 0 0 0 0 0 0 ...
$ disease_code                       : logi  NA NA NA NA NA NA ...
$ histologic_diagnosis               : chr  "GLIOBLASTOMA MULTIFORME UNTREATED PRIMARY" "GLIOBLASTOMA MULTIFORME UNTREATED PRIMARY" "GLIOBLASTOMA MULTIFORME UNTREATED PRIMARY" "GLIOBLASTOMA MULTIFORME UNTREATED PRIMARY" ...
$ icd_10                             : chr  "C71.9" "C71.9" "C71.9" "C71.9" ...
$ icd_3_histology                    : chr  "9440/3" "9440/3" "9440/3" "9440/3" ...
$ icd_3                              : chr  "C71.9" "C71.9" "C71.9" "C71.9" ...
$ tissue_source_site_code            : chr  "02" "02" "02" "02" ...
$ tumor_tissue_site                  : chr  "BRAIN" "BRAIN" "BRAIN" "BRAIN" ...
```


```python

> shell commands: sudo pip install pymongo, simplejson, urllib2, json

import urllib2
import json
import simplejson
url = "https://dev.oncoscape.sttrcancer.io/api/gbm_patient_tcga_clinical"
response = urlli2.urlopen(url)
data = simplejson.load(response)
print json.dumps(data[0:2], indent=4, sort_keys=True)

[
    {
        "ECOG": null,
        "KPS": 80,
        "age_at_initial_pathologic_diagnosis": 44,
        "anatomic_organ_subdivision": null,
        "days_to_birth": -16179,
        "days_to_death": 358,
        "days_to_diagnosis": 0,
        "days_to_last_contact": 279,
        "diagnosis_year": 1009872000,
        "disease_code": null,
        "encounter_type": null,
        "ethnicity": "NOT HISPANIC OR LATINO",
        "gender": "FEMALE",
        "histologic_diagnosis": "GLIOBLASTOMA MULTIFORME UNTREATED PRIMARY",
        "history_lgg_dx_of_brain_tissue": false,
        "history_neoadjuvant_treatment": true,
        "history_other_malignancy": null,
        "icd_10": "C71.9",
        "icd_3": "C71.9",
        "icd_3_histology": "9440/3",
        "new_tumor_event_diagnosis": null,
        "pathologic_method": null,
        "patient_ID": "TCGA-02-0001-01",
        "pharmaceutical_tx_adjuvant": null,
        "prospective_collection": null,
        "race": "WHITE",
        "radiation_treatment_adjuvant": null,
        "retrospective_collection": null,
        "status_tumor": "WITH TUMOR",
        "status_vital": "DEAD",
        "tissue_source_site_code": "02",
        "treatment_outcome_first_course": null,
        "tumor_tissue_site": "BRAIN"
    },
    {
        "ECOG": null,
        "KPS": 100,
        "age_at_initial_pathologic_diagnosis": 50,
        "anatomic_organ_subdivision": null,
        "days_to_birth": -18341,
        "days_to_death": 144,
        "days_to_diagnosis": 0,
        "days_to_last_contact": 144,
        "diagnosis_year": 1041408000,
        "disease_code": null,
        "encounter_type": null,
        "ethnicity": "NOT HISPANIC OR LATINO",
        "gender": "MALE",
        "histologic_diagnosis": "GLIOBLASTOMA MULTIFORME UNTREATED PRIMARY",
        "history_lgg_dx_of_brain_tissue": false,
        "history_neoadjuvant_treatment": false,
        "history_other_malignancy": null,
        "icd_10": "C71.9",
        "icd_3": "C71.9",
        "icd_3_histology": "9440/3",
        "new_tumor_event_diagnosis": null,
        "pathologic_method": null,
        "patient_ID": "TCGA-02-0003-01",
        "pharmaceutical_tx_adjuvant": null,
        "prospective_collection": null,
        "race": "WHITE",
        "radiation_treatment_adjuvant": null,
        "retrospective_collection": null,
        "status_tumor": "WITH TUMOR",
        "status_vital": "DEAD",
        "tissue_source_site_code": "02",
        "treatment_outcome_first_course": null,
        "tumor_tissue_site": "BRAIN"
    }
]
```


Users can access json-formatted data using URL link.

Here we show the example to access one collection using four different languages.

# Collections by Disease

## BRCA - Breast invasive carcinoma

Collection Name | Collection Type | Data Source | Data Type
--------- | ----------- | ----------- | -----------
brca_color_tcga_import | category | tcga | color
brca_samplemap_tcga_molecular | clinical | tcga | color
brca_events_tcga_clinical | clinical | tcga | color
brca_followup_tcga_v2p1 | clinical | tcga | color
brca_drug_tcga_clinical | clinical | tcga | color
brca_radiation_tcga_clinical | clinical | tcga | color
brca_newtumor_tcga_clinical | clinical | tcga | color
brca_newtumor-followup_tcga_v4p0 | clinical | tcga | color
brca_othermalignancy_tcga_v4p0 | clinical | tcga | color
brca_mut_broad_mutsig2 | molecular | broad | mut
brca_psi_bradleylab_miso | molecular | bradleyLab | psi
brca_mut01_broad_mutsig2 | molecular | broad | mut01
brca_cnv_ucsc_gistic2thd | molecular | ucsc | cnv
brca_mut01_ucsc_mutationcuratedwustlgene | molecular | ucsc | mut01
brca_rna_ucsc_hiseq | molecular | ucsc | rna
brca_protein_ucsc_rppa | molecular | ucsc | protein

### More Details of Molecular Collections

```

{
    "source": "ucsc",
    "type": "cnv",
    "collection": "brca_cnv_ucsc_gistic2thd",
    "RawDataUrl": "http://gdac.broadinstitute.org/runs/analyses__2014_10_17/data/BRCA/20141017/",
    "sampleSize": 1079,
    "wrangler": "cgData TCGAscript CopyNumber_Gistic2 processed on 2015-01-27",
    "wranglingProcedure": "FIREHOSE data download from TCGA DCC, processed at UCSC into cgData repository",
    "description": "TCGA breast invasive carcinoma (BRCA) thresholded gene-level copy number variation (CNV) estimated using the GISTIC2 method."
}
```


```

false
```


```

false
```


```

false
```


Collection | Data Source | Data Type | Size | Description
--------- | ----------- | ----------- | ----------- | -----------
brca_cnv_ucsc_gistic2thd | ucsc | cnv | 1079 | TCGA breast invasive carcinoma (BRCA) thresholded gene-level copy number variation (CNV) estimated using the GISTIC2 method.
undefined | undefined | undefined | undefined | undefined
undefined | undefined | undefined | undefined | undefined
undefined | undefined | undefined | undefined | undefined

## ESCA - Esophageal carcinoma

Collection Name | Collection Type | Data Source | Data Type
--------- | ----------- | ----------- | -----------
esca_color_tcga_import | category | tcga | color
esca_samplemap_tcga_molecular | clinical | tcga | color
esca_drug_tcga_clinical | clinical | tcga | color
esca_followup_tcga_v4p0 | clinical | tcga | color
esca_newtumor-followup_tcga_v4p0 | clinical | tcga | color
esca_newtumor_tcga_clinical | clinical | tcga | color
esca_othermalignancy_tcga_v4p0 | clinical | tcga | color
esca_patient_tcga_clinical | clinical | tcga | color
esca_radiation_tcga_clinical | clinical | tcga | color
esca_mut_broad_mutsig2 | molecular | broad | mut
esca_mut01_broad_mutsig2 | molecular | broad | mut01
esca_cnv_ucsc_gistic2thd | molecular | ucsc | cnv
esca_rna_ucsc_hiseq | molecular | ucsc | rna
esca_protein_ucsc_rppa | molecular | ucsc | protein
esca_mut01_ucsc_broad | molecular | ucsc | mut01

### More Details of Molecular Collections

```

{
    "source": "ucsc",
    "type": "cnv",
    "collection": "esca_cnv_ucsc_gistic2thd",
    "RawDataUrl": " http://gdac.broadinstitute.org/runs/analyses__2014_10_17/data/ESCA/20141017/",
    "sampleSize": 184,
    "wrangler": "cgData TCGAscript CopyNumber_Gistic2 processed on 2015-01-27",
    "wranglingProcedure": "FIREHOSE data download from TCGA DCC, processed at UCSC into cgData repository",
    "description": "TCGA esophageal carcinoma (ESCA) thresholded gene-level copy number variation (CNV) estimated using the GISTIC2 method."
}
```


```

false
```


```

false
```


```

false
```


Collection | Data Source | Data Type | Size | Description
--------- | ----------- | ----------- | ----------- | -----------
esca_cnv_ucsc_gistic2thd | ucsc | cnv | 184 | TCGA esophageal carcinoma (ESCA) thresholded gene-level copy number variation (CNV) estimated using the GISTIC2 method.
undefined | undefined | undefined | undefined | undefined
undefined | undefined | undefined | undefined | undefined
undefined | undefined | undefined | undefined | undefined

## GBM - Glioblastoma multiforme

Collection Name | Collection Type | Data Source | Data Type
--------- | ----------- | ----------- | -----------
gbm_color_tcga_import | category | tcga | color
gbm_events_tcga_clinical | clinical | tcga | color
gbm_samplemap_tcga_molecular | clinical | tcga | color
gbm_patient_tcga_clinical | clinical | tcga | color
gbm_drug_tcga_clinical | clinical | tcga | color
gbm_radiation_tcga_clinical | clinical | tcga | color
gbm_followup_tcga_v1p0 | clinical | tcga | color
gbm_newtumor_tcga_clinical | clinical | tcga | color
gbm_newtumor-followup_tcga_v1p0 | clinical | tcga | color
gbm_othermalignancy_tcga_v4p0 | clinical | tcga | color
gbm_mut_broad_mutsig2 | molecular | broad | mut
gbm_mut01_broad_mutsig2 | molecular | broad | mut01
gbm_cnv_ucsc_gistic2thd | molecular | ucsc | cnv
gbm_mut01_ucsc_mutationbroadgene | molecular | ucsc | mut01
gbm_protein_ucsc_rppa | molecular | ucsc | protein
gbm_rna_ucsc_hiseq | molecular | ucsc | rna

### More Details of Molecular Collections

```

{
    "source": "ucsc",
    "type": "cnv",
    "collection": "gbm_cnv_ucsc_gistic2thd",
    "RawDataUrl": "http://gdac.broadinstitute.org/runs/analyses__2014_10_17/data/GBM/20141017/",
    "sampleSize": 577,
    "wrangler": "cgData TCGAscript CopyNumber_Gistic2 processed on 2015-01-27",
    "wranglingProcedure": "FIREHOSE data download from TCGA DCC, processed at UCSC into cgData repository",
    "description": "TCGA glioblastoma multiforme (GBM) thresholded gene-level copy number variation (CNV) estimated using the GISTIC2 method."
}
```


```

false
```


```

false
```


```

false
```


Collection | Data Source | Data Type | Size | Description
--------- | ----------- | ----------- | ----------- | -----------
gbm_cnv_ucsc_gistic2thd | ucsc | cnv | 577 | TCGA glioblastoma multiforme (GBM) thresholded gene-level copy number variation (CNV) estimated using the GISTIC2 method.
undefined | undefined | undefined | undefined | undefined
undefined | undefined | undefined | undefined | undefined
undefined | undefined | undefined | undefined | undefined

## HNSC - Head and Neck squamous cell carcinoma

Collection Name | Collection Type | Data Source | Data Type
--------- | ----------- | ----------- | -----------
hnsc_color_tcga_import | category | tcga | color
hnsc_events_tcga_clinical | clinical | tcga | color
hnsc_samplemap_tcga_molecular | clinical | tcga | color
hnsc_followup_tcga_v1p0 | clinical | tcga | color
hnsc_patient_tcga_na | clinical | tcga | color
hnsc_drug_tcga_clinical | clinical | tcga | color
hnsc_radiation_tcga_clinical | clinical | tcga | color
hnsc_newtumor_tcga_clinical | clinical | tcga | color
hnsc_newtumor-followup_tcga_v4p8 | clinical | tcga | color
hnsc_othermalignancy_tcga_v4p0 | clinical | tcga | color
hnsc_mut_broad_mutsig2 | molecular | broad | mut
hnsc_mut01_broad_mutsig2 | molecular | broad | mut01
hnsc_cnv_ucsc_gistic2thd | molecular | ucsc | cnv
hnsc_mut01_ucsc_mutationbroadgene | molecular | ucsc | mut01
hnsc_protein_ucsc_rppa | molecular | ucsc | protein
hnsc_rna_ucsc_hiseq | molecular | ucsc | rna

### More Details of Molecular Collections

```

{
    "source": "ucsc",
    "type": "cnv",
    "collection": "hnsc_cnv_ucsc_gistic2thd",
    "RawDataUrl": " http://gdac.broadinstitute.org/runs/analyses__2014_10_17/data/HNSC/20141017/",
    "sampleSize": 522,
    "wrangler": "cgData TCGAscript CopyNumber_Gistic2 processed on 2015-01-27",
    "wranglingProcedure": "FIREHOSE data download from TCGA DCC, processed at UCSC into cgData repository",
    "description": "TCGA head & neck squamous cell carcinoma (HNSC) thresholded gene-level copy number variation (CNV) estimated using the GISTIC2 method."
}
```


```

{
    "source": "ucsc",
    "type": "mut01",
    "collection": "hnsc_mut01_ucsc_mutationbroadgene",
    "RawDataUrl": "https://tcga-data.nci.nih.gov/tcgafiles/ftp_auth/distro_ftpusers/anonymous/tumor/hnsc/gsc/broad.mit.edu/illuminaga_dnaseq_automated/mutations/",
    "sampleSize": 509,
    "wrangler": "cgData TCGAscript maf processed on 2015-01-27",
    "wranglingProcedure": "Download .maf file from TCGA DCC, processed into gene by sample matrix at UCSC, stored in the UCSC Xena repository",
    "description": "TCGA head & neck squamous cell carcinoma (HNSC) somatic mutation data. Sequencing data are generated on a IlluminaGA system. The calls are generated at Broad Institute Genome Sequencing Center using the MutDect method. "
}
```


```

false
```


```

false
```


Collection | Data Source | Data Type | Size | Description
--------- | ----------- | ----------- | ----------- | -----------
hnsc_cnv_ucsc_gistic2thd | ucsc | cnv | 522 | TCGA head & neck squamous cell carcinoma (HNSC) thresholded gene-level copy number variation (CNV) estimated using the GISTIC2 method.
hnsc_mut01_ucsc_mutationbroadgene | ucsc | mut01 | 509 | TCGA head & neck squamous cell carcinoma (HNSC) somatic mutation data. Sequencing data are generated on a IlluminaGA system. The calls are generated at Broad Institute Genome Sequencing Center using the MutDect method. 
undefined | undefined | undefined | undefined | undefined
undefined | undefined | undefined | undefined | undefined

## KICH - Kidney Chromophobe

Collection Name | Collection Type | Data Source | Data Type
--------- | ----------- | ----------- | -----------
kich_color_tcga_import | category | tcga | color
kich_samplemap_tcga_molecular | clinical | tcga | color
kich_drug_tcga_clinical | clinical | tcga | color
kich_followup_tcga_v4p4 | clinical | tcga | color
kich_newtumor-followup_tcga_v4p4 | clinical | tcga | color
kich_newtumor_tcga_clinical | clinical | tcga | color
kich_othermalignancy_tcga_v4p0 | clinical | tcga | color
kich_patient_tcga_clinical | clinical | tcga | color
kich_radiation_tcga_clinical | clinical | tcga | color
kich_mut_broad_mutsig2 | molecular | broad | mut
kich_mut01_broad_mutsig2 | molecular | broad | mut01
kich_rna_ucsc_hiseq | molecular | ucsc | rna
kich_protein_ucsc_rppa | molecular | ucsc | protein
kich_mut01_ucsc_broad | molecular | ucsc | mut01

### More Details of Molecular Collections

```

false
```


```

false
```


```

false
```


Collection | Data Source | Data Type | Size | Description
--------- | ----------- | ----------- | ----------- | -----------
undefined | undefined | undefined | undefined | undefined
undefined | undefined | undefined | undefined | undefined
undefined | undefined | undefined | undefined | undefined

## KIRC - Kidney renal clear cell carcinoma

Collection Name | Collection Type | Data Source | Data Type
--------- | ----------- | ----------- | -----------
kirc_color_tcga_import | category | tcga | color
kirc_samplemap_tcga_molecular | clinical | tcga | color
kirc_drug_tcga_clinical | clinical | tcga | color
kirc_followup_tcga_v1p0 | clinical | tcga | color
kirc_newtumor_tcga_clinical | clinical | tcga | color
kirc_othermalignancy_tcga_v4p0 | clinical | tcga | color
kirc_patient_tcga_clinical | clinical | tcga | color
kirc_radiation_tcga_clinical | clinical | tcga | color
kirc_mut_broad_mutsig2 | molecular | broad | mut
kirc_mut01_broad_mutsig2 | molecular | broad | mut01
kirc_mut01_ucsc_pancanaws | molecular | ucsc | mut01

### More Details of Molecular Collections

```

false
```


Collection | Data Source | Data Type | Size | Description
--------- | ----------- | ----------- | ----------- | -----------
undefined | undefined | undefined | undefined | undefined

## KIRP - Kidney renal papillary cell carcinoma

Collection Name | Collection Type | Data Source | Data Type
--------- | ----------- | ----------- | -----------
kirp_color_tcga_import | category | tcga | color
kirp_samplemap_tcga_molecular | clinical | tcga | color
kirp_drug_tcga_clinical | clinical | tcga | color
kirp_followup_tcga_v1p0 | clinical | tcga | color
kirp_newtumor_tcga_clinical | clinical | tcga | color
kirp_othermalignancy_tcga_v4p0 | clinical | tcga | color
kirp_patient_tcga_clinical | clinical | tcga | color
kirp_radiation_tcga_clinical | clinical | tcga | color
kirp_mut_broad_mutsig2 | molecular | broad | mut
kirp_mut01_broad_mutsig2 | molecular | broad | mut01
kirp_rna_ucsc_hiseq | molecular | ucsc | rna
kirp_protein_ucsc_rppa | molecular | ucsc | protein
kirp_mut01_ucsc_broadcurated | molecular | ucsc | mut01

### More Details of Molecular Collections

```

false
```


```

false
```


```

false
```


Collection | Data Source | Data Type | Size | Description
--------- | ----------- | ----------- | ----------- | -----------
undefined | undefined | undefined | undefined | undefined
undefined | undefined | undefined | undefined | undefined
undefined | undefined | undefined | undefined | undefined

## LGG - Brain Lower Grade Glioma

Collection Name | Collection Type | Data Source | Data Type
--------- | ----------- | ----------- | -----------
lgg_color_tcga_import | category | tcga | color
lgg_events_tcga_clinical | clinical | tcga | color
lgg_samplemap_tcga_molecular | clinical | tcga | color
lgg_patient_tcga_clinical | clinical | tcga | color
lgg_drug_tcga_clinical | clinical | tcga | color
lgg_radiation_tcga_clinical | clinical | tcga | color
lgg_followup_tcga_v1p0 | clinical | tcga | color
lgg_newtumor_tcga_clinical | clinical | tcga | color
lgg_othermalignancy_tcga_v4p0 | clinical | tcga | color
lgg_mut_broad_mutsig2 | molecular | broad | mut
lgg_mut01_broad_mutsig2 | molecular | broad | mut01
lgg_cnv_ucsc_gistic2thd | molecular | ucsc | cnv
lgg_mut01_ucsc_mutationbroadgene | molecular | ucsc | mut01
lgg_protein_ucsc_rppa | molecular | ucsc | protein
lgg_rna_ucsc_hiseq | molecular | ucsc | rna

### More Details of Molecular Collections

```

{
    "source": "ucsc",
    "type": "cnv",
    "collection": "lgg_cnv_ucsc_gistic2thd",
    "RawDataUrl": "http://gdac.broadinstitute.org/runs/analyses__2014_10_17/data/LGG/20141017/",
    "sampleSize": 513,
    "wrangler": "cgData TCGAscript CopyNumber_Gistic2 processed on 2015-01-27",
    "wranglingProcedure": "FIREHOSE data download from TCGA DCC, processed at UCSC into cgData repository",
    "description": "TCGA brain lower grade glioma (LGG) thresholded gene-level copy number variation (CNV) estimated using the GISTIC2 method."
}
```


```

{
    "source": "ucsc",
    "type": "mut01",
    "collection": "lgg_mut01_ucsc_mutationbroadgene",
    "RawDataUrl": "",
    "sampleSize": 408,
    "wrangler": "",
    "wranglingProcedure": "",
    "description": "The dataset is combined from TCGA lung squamous cell carcinoma and lung adenocarcinoma datasets. TCGA lung cancer (LUNG) somatic mutation data. Red (=1) indicates that a non-silent somatic mutation (nonsense, missense, frame-shif indels, splice site mutations, stop codon readthroughs) was identified in the protein coding region of a gene, or any mutation identified in a non-coding gene. White (=0) indicates that none of the above mutation calls were made in this gene for the specific sample."
}
```


```

false
```


```

false
```


Collection | Data Source | Data Type | Size | Description
--------- | ----------- | ----------- | ----------- | -----------
lgg_cnv_ucsc_gistic2thd | ucsc | cnv | 513 | TCGA brain lower grade glioma (LGG) thresholded gene-level copy number variation (CNV) estimated using the GISTIC2 method.
lgg_mut01_ucsc_mutationbroadgene | ucsc | mut01 | 408 | The dataset is combined from TCGA lung squamous cell carcinoma and lung adenocarcinoma datasets. TCGA lung cancer (LUNG) somatic mutation data. Red (=1) indicates that a non-silent somatic mutation (nonsense, missense, frame-shif indels, splice site mutations, stop codon readthroughs) was identified in the protein coding region of a gene, or any mutation identified in a non-coding gene. White (=0) indicates that none of the above mutation calls were made in this gene for the specific sample.
undefined | undefined | undefined | undefined | undefined
undefined | undefined | undefined | undefined | undefined

## LIHC - undefined

Collection Name | Collection Type | Data Source | Data Type
--------- | ----------- | ----------- | -----------
lihc_color_tcga_import | category | tcga | color
lihc_samplemap_tcga_molecular | clinical | tcga | color
lihc_drug_tcga_clinical | clinical | tcga | color
lihc_followup_tcga_v4p0 | clinical | tcga | color
lihc_newtumor-followup_tcga_v4p0 | clinical | tcga | color
lihc_newtumor_tcga_clinical | clinical | tcga | color
lihc_othermalignancy_tcga_v4p0 | clinical | tcga | color
lihc_patient_tcga_clinical | clinical | tcga | color
lihc_radiation_tcga_clinical | clinical | tcga | color
lihc_mut_broad_mutsig2 | molecular | broad | mut
lihc_mut01_broad_mutsig2 | molecular | broad | mut01
lihc_rna_ucsc_hiseq | molecular | ucsc | rna
lihc_protein_ucsc_rppa | molecular | ucsc | protein
lihc_mut01_ucsc_bcm | molecular | ucsc | mut01

### More Details of Molecular Collections

```

false
```


```

false
```


```

false
```


Collection | Data Source | Data Type | Size | Description
--------- | ----------- | ----------- | ----------- | -----------
undefined | undefined | undefined | undefined | undefined
undefined | undefined | undefined | undefined | undefined
undefined | undefined | undefined | undefined | undefined

## LUAD - Lung adenocarcinoma

Collection Name | Collection Type | Data Source | Data Type
--------- | ----------- | ----------- | -----------
luad_color_tcga_import | category | tcga | color
luad_events_tcga_clinical | clinical | tcga | color
luad_samplemap_tcga_molecular | clinical | tcga | color
luad_patient_tcga_clinical | clinical | tcga | color
luad_drug_tcga_clinical | clinical | tcga | color
luad_radiation_tcga_clinical | clinical | tcga | color
luad_followup_tcga_v1p0 | clinical | tcga | color
luad_newtumor_tcga_clinical | clinical | tcga | color
luad_othermalignancy_tcga_v4p0 | clinical | tcga | color
luad_mut_broad_mutsig2 | molecular | broad | mut
luad_mut01_broad_mutsig2 | molecular | broad | mut01
luad_cnv_ucsc_gistic2thd | molecular | ucsc | cnv
luad_mut01_ucsc_mutationbroadgene | molecular | ucsc | mut01
luad_rna_ucsc_hiseq | molecular | ucsc | rna
luad_protein_ucsc_rppa | molecular | ucsc | protein

### More Details of Molecular Collections

```

{
    "source": "ucsc",
    "type": "cnv",
    "collection": "luad_cnv_ucsc_gistic2thd",
    "RawDataUrl": "http://gdac.broadinstitute.org/runs/analyses__2014_10_17/data/LUAD/20141017/",
    "sampleSize": 515,
    "wrangler": "cgData TCGAscript CopyNumber_Gistic2 processed on 2015-01-27",
    "wranglingProcedure": "FIREHOSE data download from TCGA DCC, processed at UCSC into cgData repository",
    "description": "TCGA lung adenocarcinoma (LUAD) thresholded gene-level copy number variation (CNV) estimated using the GISTIC2 method."
}
```


```

{
    "source": "ucsc",
    "type": "mut01",
    "collection": "luad_mut01_ucsc_mutationbroadgene",
    "RawDataUrl": "https://tcga-data.nci.nih.gov/tcgafiles/ftp_auth/distro_ftpusers/anonymous/tumor/luad/gsc/broad.mit.edu/illuminaga_dnaseq_automated/mutations/",
    "sampleSize": 543,
    "wrangler": "cgData TCGAscript maf processed on 2015-01-27",
    "wranglingProcedure": "Download .maf file from TCGA DCC, processed into gene by sample matrix at UCSC, stored in the UCSC Xena repository",
    "description": "TCGA lung adenocarcinoma (LUAD) somatic mutation data. Sequencing data are generated on a IlluminaGA system. The calls are generated at Broad Institute Genome Sequencing Center using the MutDect method. "
}
```


```

false
```


```

false
```


Collection | Data Source | Data Type | Size | Description
--------- | ----------- | ----------- | ----------- | -----------
luad_cnv_ucsc_gistic2thd | ucsc | cnv | 515 | TCGA lung adenocarcinoma (LUAD) thresholded gene-level copy number variation (CNV) estimated using the GISTIC2 method.
luad_mut01_ucsc_mutationbroadgene | ucsc | mut01 | 543 | TCGA lung adenocarcinoma (LUAD) somatic mutation data. Sequencing data are generated on a IlluminaGA system. The calls are generated at Broad Institute Genome Sequencing Center using the MutDect method. 
undefined | undefined | undefined | undefined | undefined
undefined | undefined | undefined | undefined | undefined

## LUSC - Lung squamous cell carcinoma

Collection Name | Collection Type | Data Source | Data Type
--------- | ----------- | ----------- | -----------
lusc_color_tcga_import | category | tcga | color
lusc_events_tcga_clinical | clinical | tcga | color
lusc_samplemap_tcga_molecular | clinical | tcga | color
lusc_patient_tcga_clinical | clinical | tcga | color
lusc_drug_tcga_clinical | clinical | tcga | color
lusc_radiation_tcga_clinical | clinical | tcga | color
lusc_followup_tcga_v1p0 | clinical | tcga | color
lusc_newtumor_tcga_clinical | clinical | tcga | color
lusc_othermalignancy_tcga_v4p0 | clinical | tcga | color
lusc_mut_broad_mutsig2 | molecular | broad | mut
lusc_mut01_broad_mutsig2 | molecular | broad | mut01
lusc_cnv_ucsc_gistic2thd | molecular | ucsc | cnv
lusc_mut01_ucsc_mutationbroadgene | molecular | ucsc | mut01
lusc_rna_ucsc_hiseq | molecular | ucsc | rna
lusc_protein_ucsc_rppa | molecular | ucsc | protein

### More Details of Molecular Collections

```

{
    "source": "ucsc",
    "type": "cnv",
    "collection": "lusc_cnv_ucsc_gistic2thd",
    "RawDataUrl": "http://gdac.broadinstitute.org/runs/analyses__2014_10_17/data/LUSC/20141017/",
    "sampleSize": 501,
    "wrangler": "cgData TCGAscript CopyNumber_Gistic2 processed on 2015-01-27",
    "wranglingProcedure": "FIREHOSE data download from TCGA DCC, processed at UCSC into cgData repository",
    "description": "TCGA lung squamous cell carcinoma (LUSC) thresholded gene-level copy number variation (CNV) estimated using the GISTIC2 method."
}
```


```

{
    "source": "ucsc",
    "type": "mut01",
    "collection": "lusc_mut01_ucsc_mutationbroadgene",
    "RawDataUrl": "",
    "sampleSize": 408,
    "wrangler": "",
    "wranglingProcedure": "",
    "description": "The dataset is combined from TCGA lung squamous cell carcinoma and lung adenocarcinoma datasets. TCGA lung cancer (LUNG) somatic mutation data. Red (=1) indicates that a non-silent somatic mutation (nonsense, missense, frame-shif indels, splice site mutations, stop codon readthroughs) was identified in the protein coding region of a gene, or any mutation identified in a non-coding gene. White (=0) indicates that none of the above mutation calls were made in this gene for the specific sample."
}
```


```

false
```


```

false
```


Collection | Data Source | Data Type | Size | Description
--------- | ----------- | ----------- | ----------- | -----------
lusc_cnv_ucsc_gistic2thd | ucsc | cnv | 501 | TCGA lung squamous cell carcinoma (LUSC) thresholded gene-level copy number variation (CNV) estimated using the GISTIC2 method.
lusc_mut01_ucsc_mutationbroadgene | ucsc | mut01 | 408 | The dataset is combined from TCGA lung squamous cell carcinoma and lung adenocarcinoma datasets. TCGA lung cancer (LUNG) somatic mutation data. Red (=1) indicates that a non-silent somatic mutation (nonsense, missense, frame-shif indels, splice site mutations, stop codon readthroughs) was identified in the protein coding region of a gene, or any mutation identified in a non-coding gene. White (=0) indicates that none of the above mutation calls were made in this gene for the specific sample.
undefined | undefined | undefined | undefined | undefined
undefined | undefined | undefined | undefined | undefined

## SARC - Sarcoma

Collection Name | Collection Type | Data Source | Data Type
--------- | ----------- | ----------- | -----------
sarc_color_tcga_import | category | tcga | color
sarc_samplemap_tcga_molecular | clinical | tcga | color
sarc_patient_tcga_clinical | clinical | tcga | color
sarc_drug_tcga_clinical | clinical | tcga | color
sarc_radiation_tcga_clinical | clinical | tcga | color
sarc_followup_tcga_v4p0 | clinical | tcga | color
sarc_newtumor_tcga_clinical | clinical | tcga | color
sarc_newtumor-followup_tcga_v4p0 | clinical | tcga | color
sarc_othermalignancy_tcga_v4p0 | clinical | tcga | color
sarc_mut_broad_mutsig2 | molecular | broad | mut
sarc_mut01_broad_mutsig2 | molecular | broad | mut01
sarc_cnv_ucsc_gistic2thd | molecular | ucsc | cnv
sarc_rna_ucsc_hiseq | molecular | ucsc | rna
sarc_protein_ucsc_rppa | molecular | ucsc | protein
sarc_mut01_ucsc_broad | molecular | ucsc | mut01
sarc_methylation_ucsc_hm450 | molecular | ucsc | methylation

### More Details of Molecular Collections

```

{
    "source": "ucsc",
    "type": "cnv",
    "collection": "sarc_cnv_ucsc_gistic2thd",
    "RawDataUrl": " http://gdac.broadinstitute.org/runs/analyses__2014_10_17/data/SARC/20141017/",
    "sampleSize": 257,
    "wrangler": "   cgData TCGAscript CopyNumber_Gistic2 processed on 2015-01-27",
    "wranglingProcedure": "FIREHOSE data download from TCGA DCC, processed at UCSC into cgData repository",
    "description": "TCGA sarcoma (SARC) thresholded gene-level copy number variation (CNV) estimated using the GISTIC2 method."
}
```


```

false
```


```

false
```


```

false
```


```

false
```


Collection | Data Source | Data Type | Size | Description
--------- | ----------- | ----------- | ----------- | -----------
sarc_cnv_ucsc_gistic2thd | ucsc | cnv | 257 | TCGA sarcoma (SARC) thresholded gene-level copy number variation (CNV) estimated using the GISTIC2 method.
undefined | undefined | undefined | undefined | undefined
undefined | undefined | undefined | undefined | undefined
undefined | undefined | undefined | undefined | undefined
undefined | undefined | undefined | undefined | undefined

## PAAD - Pancreatic adenocarcinoma

Collection Name | Collection Type | Data Source | Data Type
--------- | ----------- | ----------- | -----------
paad_color_tcga_import | category | tcga | color
paad_samplemap_tcga_molecular | clinical | tcga | color
paad_patient_tcga_clinical | clinical | tcga | color
paad_drug_tcga_clinical | clinical | tcga | color
paad_radiation_tcga_clinical | clinical | tcga | color
paad_followup_tcga_v4p4 | clinical | tcga | color
paad_newtumor_tcga_clinical | clinical | tcga | color
paad_newtumor-followup_tcga_v4p4 | clinical | tcga | color
paad_othermalignancy_tcga_v4p0 | clinical | tcga | color
paad_mut_broad_mutsig2 | molecular | broad | mut
paad_mut01_broad_mutsig2 | molecular | broad | mut01
paad_cnv_ucsc_gistic2thd | molecular | ucsc | cnv
paad_mut01_ucsc_mutationbroadgene | molecular | ucsc | mut01
paad_rna_ucsc_hiseq | molecular | ucsc | rna
paad_protein_ucsc_rppa | molecular | ucsc | protein

### More Details of Molecular Collections

```

{
    "source": "ucsc",
    "type": "cnv",
    "collection": "paad_cnv_ucsc_gistic2thd",
    "RawDataUrl": "http://gdac.broadinstitute.org/runs/analyses__2014_10_17/data/PAAD/20141017/",
    "sampleSize": 184,
    "wrangler": "cgData TCGAscript CopyNumber_Gistic2 processed on 2015-01-27",
    "wranglingProcedure": "FIREHOSE data download from TCGA DCC, processed at UCSC into cgData repository",
    "description": "TCGA pancreatic adenocarcinoma (PAAD) thresholded gene-level copy number variation (CNV) estimated using the GISTIC2 method."
}
```


```

{
    "source": "ucsc",
    "type": "mut01",
    "collection": "paad_mut01_ucsc_mutationbroadgene",
    "RawDataUrl": "https://tcga-data.nci.nih.gov/tcgafiles/ftp_auth/distro_ftpusers/anonymous/tumor/paad/gsc/hgsc.bcm.edu/illuminaga_dnaseq_automated/mutations/",
    "sampleSize": 131,
    "wrangler": "cgData TCGAscript maf processed on 2015-01-27",
    "wranglingProcedure": "Download .maf file from TCGA DCC, processed into gene by sample matrix at UCSC, stored in the UCSC Xena repository",
    "description": "TCGA pancreatic adenocarcinoma (PAAD) somatic mutation data. Sequencing data are generated on a IlluminaGA system. The calls are generated at Baylor College of Medicine Human Genome Sequencing Center using the Baylor pipeline method. "
}
```


```

false
```


```

false
```


Collection | Data Source | Data Type | Size | Description
--------- | ----------- | ----------- | ----------- | -----------
paad_cnv_ucsc_gistic2thd | ucsc | cnv | 184 | TCGA pancreatic adenocarcinoma (PAAD) thresholded gene-level copy number variation (CNV) estimated using the GISTIC2 method.
paad_mut01_ucsc_mutationbroadgene | ucsc | mut01 | 131 | TCGA pancreatic adenocarcinoma (PAAD) somatic mutation data. Sequencing data are generated on a IlluminaGA system. The calls are generated at Baylor College of Medicine Human Genome Sequencing Center using the Baylor pipeline method. 
undefined | undefined | undefined | undefined | undefined
undefined | undefined | undefined | undefined | undefined

## PRAD - Prostate adenocarcinoma

Collection Name | Collection Type | Data Source | Data Type
--------- | ----------- | ----------- | -----------
prad_color_tcga_import | category | tcga | color
prad_samplemap_tcga_molecular | clinical | tcga | color
prad_patient_tcga_clinical | clinical | tcga | color
prad_drug_tcga_clinical | clinical | tcga | color
prad_radiation_tcga_clinical | clinical | tcga | color
prad_followup_tcga_v1p0 | clinical | tcga | color
prad_newtumor_tcga_clinical | clinical | tcga | color
prad_othermalignancy_tcga_v4p0 | clinical | tcga | color
prad_mut_broad_mutsig2 | molecular | broad | mut
prad_mut01_broad_mutsig2 | molecular | broad | mut01
prad_cnv_ucsc_gistic2thd | molecular | ucsc | cnv
prad_mut01_ucsc_mutationbroadgene | molecular | ucsc | mut01
prad_rna_ucsc_hiseq | molecular | ucsc | rna
prad_protein_ucsc_rppa | molecular | ucsc | protein

### More Details of Molecular Collections

```

{
    "source": "ucsc",
    "type": "cnv",
    "collection": "prad_cnv_ucsc_gistic2thd",
    "RawDataUrl": "http://gdac.broadinstitute.org/runs/analyses__2014_10_17/data/PRAD/20141017/",
    "sampleSize": 492,
    "wrangler": "   cgData TCGAscript CopyNumber_Gistic2 processed on 2015-01-27",
    "wranglingProcedure": "FIREHOSE data download from TCGA DCC, processed at UCSC into cgData repository",
    "description": "TCGA prostate adenocarcinoma (PRAD) thresholded gene-level copy number variation (CNV) estimated using the GISTIC2 method."
}
```


```

{
    "source": "ucsc",
    "type": "mut01",
    "collection": "prad_mut01_ucsc_mutationbroadgene",
    "RawDataUrl": " https://tcga-data.nci.nih.gov/tcgafiles/ftp_auth/distro_ftpusers/anonymous/tumor/prad/gsc/broad.mit.edu/illuminaga_dnaseq_automated/mutations/",
    "sampleSize": 425,
    "wrangler": "cgData TCGAscript maf processed on 2015-01-27",
    "wranglingProcedure": "Download .maf file from TCGA DCC, processed into gene by sample matrix at UCSC, stored in the UCSC Xena repository",
    "description": "TCGA prostate adenocarcinoma (PRAD) somatic mutation data. Sequencing data are generated on a IlluminaGA system. The calls are generated at Broad Institute Genome Sequencing Center using the MutDect method."
}
```


```

false
```


```

false
```


Collection | Data Source | Data Type | Size | Description
--------- | ----------- | ----------- | ----------- | -----------
prad_cnv_ucsc_gistic2thd | ucsc | cnv | 492 | TCGA prostate adenocarcinoma (PRAD) thresholded gene-level copy number variation (CNV) estimated using the GISTIC2 method.
prad_mut01_ucsc_mutationbroadgene | ucsc | mut01 | 425 | TCGA prostate adenocarcinoma (PRAD) somatic mutation data. Sequencing data are generated on a IlluminaGA system. The calls are generated at Broad Institute Genome Sequencing Center using the MutDect method.
undefined | undefined | undefined | undefined | undefined
undefined | undefined | undefined | undefined | undefined

## SKCM - Skin Cutaneous Melanoma

Collection Name | Collection Type | Data Source | Data Type
--------- | ----------- | ----------- | -----------
skcm_color_tcga_import | category | tcga | color
skcm_samplemap_tcga_molecular | clinical | tcga | color
skcm_drug_tcga_clinical | clinical | tcga | color
skcm_followup_tcga_v2p0 | clinical | tcga | color
skcm_newtumor_tcga_clinical | clinical | tcga | color
skcm_othermalignancy_tcga_v4p0 | clinical | tcga | color
skcm_patient_tcga_clinical | clinical | tcga | color
skcm_radiation_tcga_clinical | clinical | tcga | color
skcm_mut_broad_mutsig2 | molecular | broad | mut
skcm_mut01_broad_mutsig2 | molecular | broad | mut01
skcm_rna_ucsc_hiseq | molecular | ucsc | rna
skcm_protein_ucsc_rppa | molecular | ucsc | protein
skcm_mut01_ucsc_broad | molecular | ucsc | mut01

### More Details of Molecular Collections

```

false
```


```

false
```


```

false
```


Collection | Data Source | Data Type | Size | Description
--------- | ----------- | ----------- | ----------- | -----------
undefined | undefined | undefined | undefined | undefined
undefined | undefined | undefined | undefined | undefined
undefined | undefined | undefined | undefined | undefined

## STAD - Stomach adenocarcinoma

Collection Name | Collection Type | Data Source | Data Type
--------- | ----------- | ----------- | -----------
stad_color_tcga_import | category | tcga | color
stad_samplemap_tcga_molecular | clinical | tcga | color
stad_drug_tcga_clinical | clinical | tcga | color
stad_followup_tcga_v1p0 | clinical | tcga | color
stad_newtumor_tcga_clinical | clinical | tcga | color
stad_othermalignancy_tcga_v4p0 | clinical | tcga | color
stad_patient_tcga_clinical | clinical | tcga | color
stad_radiation_tcga_clinical | clinical | tcga | color
stad_mut_broad_mutsig2 | molecular | broad | mut
stad_mut01_broad_mutsig2 | molecular | broad | mut01
stad_mut01_ucsc_mutationbcmgene | molecular | ucsc | mut01
stad_rna_ucsc_hiseq | molecular | ucsc | rna
stad_protein_ucsc_rppa | molecular | ucsc | protein
stad_mut01_ucsc_broadcurated | molecular | ucsc | mut01

### More Details of Molecular Collections

```

{
    "source": "ucsc",
    "type": "mut01",
    "collection": "stad_mut01_ucsc_mutationbcmgene",
    "RawDataUrl": " https://tcga-data.nci.nih.gov/tcgafiles/ftp_auth/distro_ftpusers/anonymous/tumor/stad/gsc/hgsc.bcm.edu/illuminaga_dnaseq_automated/mutations/",
    "sampleSize": 379,
    "wrangler": "cgData TCGAscript maf processed on 2015-01-27",
    "wranglingProcedure": "Download .maf file from TCGA DCC, processed into gene by sample matrix at UCSC, stored in the UCSC Xena repository",
    "description": "TCGA stomach adenocarcinoma (STAD) somatic mutation data. Sequencing data are generated on a IlluminaGA system. The calls are generated at Baylor College of Medicine Human Genome Sequencing Center using the Baylor pipeline method. "
}
```


```

false
```


```

false
```


```

false
```


Collection | Data Source | Data Type | Size | Description
--------- | ----------- | ----------- | ----------- | -----------
stad_mut01_ucsc_mutationbcmgene | ucsc | mut01 | 379 | TCGA stomach adenocarcinoma (STAD) somatic mutation data. Sequencing data are generated on a IlluminaGA system. The calls are generated at Baylor College of Medicine Human Genome Sequencing Center using the Baylor pipeline method. 
undefined | undefined | undefined | undefined | undefined
undefined | undefined | undefined | undefined | undefined
undefined | undefined | undefined | undefined | undefined

## THCA - Thyroid carcinoma

Collection Name | Collection Type | Data Source | Data Type
--------- | ----------- | ----------- | -----------
thca_color_tcga_import | category | tcga | color
thca_samplemap_tcga_molecular | clinical | tcga | color
thca_followup_tcga_v2p0 | clinical | tcga | color
thca_drug_tcga_clinical | clinical | tcga | color
thca_newtumor-followup_tcga_v4p0 | clinical | tcga | color
thca_newtumor_tcga_clinical | clinical | tcga | color
thca_othermalignancy_tcga_v4p0 | clinical | tcga | color
thca_patient_tcga_clinical | clinical | tcga | color
thca_radiation_tcga_clinical | clinical | tcga | color
thca_mut_broad_mutsig2 | molecular | broad | mut
thca_mut01_broad_mutsig2 | molecular | broad | mut01
thca_rna_ucsc_hiseq | molecular | ucsc | rna
thca_protein_ucsc_rppa | molecular | ucsc | protein
thca_mut01_ucsc_broad | molecular | ucsc | mut01

### More Details of Molecular Collections

```

false
```


```

false
```


```

false
```


Collection | Data Source | Data Type | Size | Description
--------- | ----------- | ----------- | ----------- | -----------
undefined | undefined | undefined | undefined | undefined
undefined | undefined | undefined | undefined | undefined
undefined | undefined | undefined | undefined | undefined

## UCEC - Uterine Corpus Endometrial Carcinoma

Collection Name | Collection Type | Data Source | Data Type
--------- | ----------- | ----------- | -----------
ucec_color_tcga_import | category | tcga | color
ucec_samplemap_tcga_molecular | clinical | tcga | color
ucec_followup_tcga_v1p7 | clinical | tcga | color
ucec_drug_tcga_clinical | clinical | tcga | color
ucec_newtumor-followup_tcga_v4p0 | clinical | tcga | color
ucec_newtumor_tcga_clinical | clinical | tcga | color
ucec_othermalignancy_tcga_v4p0 | clinical | tcga | color
ucec_patient_tcga_clinical | clinical | tcga | color
ucec_radiation_tcga_clinical | clinical | tcga | color
ucec_mut_broad_mutsig2 | molecular | broad | mut
ucec_mut01_broad_mutsig2 | molecular | broad | mut01
ucec_rna_ucsc_hiseq | molecular | ucsc | rna
ucec_protein_ucsc_rppa | molecular | ucsc | protein
ucec_mut01_ucsc_pancanaws | molecular | ucsc | mut01

### More Details of Molecular Collections

```

false
```


```

false
```


```

false
```


Collection | Data Source | Data Type | Size | Description
--------- | ----------- | ----------- | ----------- | -----------
undefined | undefined | undefined | undefined | undefined
undefined | undefined | undefined | undefined | undefined
undefined | undefined | undefined | undefined | undefined

## ACC - Adrenocortical carcinoma

Collection Name | Collection Type | Data Source | Data Type
--------- | ----------- | ----------- | -----------
acc_color_tcga_import | category | tcga | color
acc_samplemap_tcga_molecular | clinical | tcga | color
acc_drug_tcga_clinical | clinical | tcga | color
acc_followup_tcga_v4p0 | clinical | tcga | color
acc_newtumor-followup_tcga_v4p0 | clinical | tcga | color
acc_newtumor_tcga_clinical | clinical | tcga | color
acc_othermalignancy_tcga_v4p0 | clinical | tcga | color
acc_patient_tcga_clinical | clinical | tcga | color
acc_radiation_tcga_clinical | clinical | tcga | color
acc_mut_broad_mutsig2 | molecular | broad | mut
acc_mut01_broad_mutsig2 | molecular | broad | mut01
acc_cnv_ucsc_gistic2thd | molecular | ucsc | cnv
acc_rna_ucsc_hiseq | molecular | ucsc | rna
acc_protein_ucsc_rppa | molecular | ucsc | protein
acc_mut01_ucsc_broadcurated | molecular | ucsc | mut01

### More Details of Molecular Collections

```

{
    "source": "ucsc",
    "type": "cnv",
    "collection": "acc_cnv_ucsc_gistic2thd",
    "RawDataUrl": "http://gdac.broadinstitute.org/runs/analyses__2014_10_17/data/ACC/20141017/",
    "sampleSize": 90,
    "wrangler": "cgData TCGAscript CopyNumber_Gistic2 processed on 2015-01-27",
    "wranglingProcedure": "FIREHOSE data download from TCGA DCC, processed at UCSC into cgData repository",
    "description": "TCGA adrenocortical carcinoma (ACC) thresholded gene-level copy number variation (CNV) estimated using the GISTIC2 method."
}
```


```

false
```


```

false
```


```

false
```


Collection | Data Source | Data Type | Size | Description
--------- | ----------- | ----------- | ----------- | -----------
acc_cnv_ucsc_gistic2thd | ucsc | cnv | 90 | TCGA adrenocortical carcinoma (ACC) thresholded gene-level copy number variation (CNV) estimated using the GISTIC2 method.
undefined | undefined | undefined | undefined | undefined
undefined | undefined | undefined | undefined | undefined
undefined | undefined | undefined | undefined | undefined

## BLCA - Bladder Urothelial Carcinoma

Collection Name | Collection Type | Data Source | Data Type
--------- | ----------- | ----------- | -----------
blca_color_tcga_import | category | tcga | color
blca_samplemap_tcga_molecular | clinical | tcga | color
blca_followup_tcga_v2p0 | clinical | tcga | color
blca_patient_tcga_clinical | clinical | tcga | color
blca_drug_tcga_clinical | clinical | tcga | color
blca_radiation_tcga_clinical | clinical | tcga | color
blca_newtumor_tcga_clinical | clinical | tcga | color
blca_newtumor-followup_tcga_v4p0 | clinical | tcga | color
blca_othermalignancy_tcga_v4p0 | clinical | tcga | color
blca_mut_broad_mutsig2 | molecular | broad | mut
blca_mut01_broad_mutsig2 | molecular | broad | mut01
blca_cnv_ucsc_gistic2thd | molecular | ucsc | cnv
blca_mut01_ucsc_mutationbroadgene | molecular | ucsc | mut01
blca_rna_ucsc_hiseq | molecular | ucsc | rna
blca_protein_ucsc_rppa | molecular | ucsc | protein

### More Details of Molecular Collections

```

{
    "source": "ucsc",
    "type": "cnv",
    "collection": "blca_cnv_ucsc_gistic2thd",
    "RawDataUrl": "http://gdac.broadinstitute.org/runs/analyses__2014_10_17/data/BLCA/20141017/",
    "sampleSize": 408,
    "wrangler": "cgData TCGAscript CopyNumber_Gistic2 processed on 2015-01-27",
    "wranglingProcedure": "FIREHOSE data download from TCGA DCC, processed at UCSC into cgData repository",
    "description": "TCGA bladder urothelial carcinoma (BLCA) thresholded gene-level copy number variation (CNV) estimated using the GISTIC2 method."
}
```


```

{
    "source": "ucsc",
    "type": "mut01",
    "collection": "blca_mut01_ucsc_mutationbroadgene",
    "RawDataUrl": " https://tcga-data.nci.nih.gov/tcgafiles/ftp_auth/distro_ftpusers/anonymous/tumor/blca/gsc/broad.mit.edu/illuminaga_dnaseq_automated/mutations/",
    "sampleSize": 238,
    "wrangler": "cgData TCGAscript maf processed on 2015-01-27",
    "wranglingProcedure": "Download .maf file from TCGA DCC, processed into gene by sample matrix at UCSC, stored in the UCSC Xena repository",
    "description": "TCGA bladder urothelial carcinoma (BLCA) somatic mutation data. Sequencing data are generated on a IlluminaGA system. The calls are generated at Broad Institute Genome Sequencing Center using the MutDect method. "
}
```


```

false
```


```

false
```


Collection | Data Source | Data Type | Size | Description
--------- | ----------- | ----------- | ----------- | -----------
blca_cnv_ucsc_gistic2thd | ucsc | cnv | 408 | TCGA bladder urothelial carcinoma (BLCA) thresholded gene-level copy number variation (CNV) estimated using the GISTIC2 method.
blca_mut01_ucsc_mutationbroadgene | ucsc | mut01 | 238 | TCGA bladder urothelial carcinoma (BLCA) somatic mutation data. Sequencing data are generated on a IlluminaGA system. The calls are generated at Broad Institute Genome Sequencing Center using the MutDect method. 
undefined | undefined | undefined | undefined | undefined
undefined | undefined | undefined | undefined | undefined

## CESC - Cervical squamous cell carcinoma and endocervical adenocarcinoma

Collection Name | Collection Type | Data Source | Data Type
--------- | ----------- | ----------- | -----------
cesc_color_tcga_import | category | tcga | color
cesc_samplemap_tcga_molecular | clinical | tcga | color
cesc_followup_tcga_v2p0 | clinical | tcga | color
cesc_drug_tcga_clinical | clinical | tcga | color
cesc_newtumor-followup_tcga_v4p0 | clinical | tcga | color
cesc_newtumor_tcga_clinical | clinical | tcga | color
cesc_othermalignancy_tcga_v4p0 | clinical | tcga | color
cesc_patient_tcga_clinical | clinical | tcga | color
cesc_radiation_tcga_clinical | clinical | tcga | color
cesc_mut_broad_mutsig2 | molecular | broad | mut
cesc_mut01_broad_mutsig2 | molecular | broad | mut01
cesc_cnv_ucsc_gistic2thd | molecular | ucsc | cnv
cesc_rna_ucsc_hiseq | molecular | ucsc | rna
cesc_protein_ucsc_rppa | molecular | ucsc | protein
cesc_mut01_ucsc_ucsc | molecular | ucsc | mut01

### More Details of Molecular Collections

```

{
    "source": "ucsc",
    "type": "cnv",
    "collection": "cesc_cnv_ucsc_gistic2thd",
    "RawDataUrl": "http://gdac.broadinstitute.org/runs/analyses__2014_10_17/data/CESC/20141017/",
    "sampleSize": 295,
    "wrangler": "cgData TCGAscript CopyNumber_Gistic2 processed on 2015-01-27",
    "wranglingProcedure": "FIREHOSE data download from TCGA DCC, processed at UCSC into cgData repository",
    "description": "TCGA cervical squamous cell carcinoma and endocervical adenocarcinoma (CESC) thresholded gene-level copy number variation (CNV) estimated using the GISTIC2 method."
}
```


```

false
```


```

false
```


```

false
```


Collection | Data Source | Data Type | Size | Description
--------- | ----------- | ----------- | ----------- | -----------
cesc_cnv_ucsc_gistic2thd | ucsc | cnv | 295 | TCGA cervical squamous cell carcinoma and endocervical adenocarcinoma (CESC) thresholded gene-level copy number variation (CNV) estimated using the GISTIC2 method.
undefined | undefined | undefined | undefined | undefined
undefined | undefined | undefined | undefined | undefined
undefined | undefined | undefined | undefined | undefined

## CHOL - Cholangiocarcinoma

Collection Name | Collection Type | Data Source | Data Type
--------- | ----------- | ----------- | -----------
chol_color_tcga_import | category | tcga | color
chol_samplemap_tcga_molecular | clinical | tcga | color
chol_drug_tcga_clinical | clinical | tcga | color
chol_followup_tcga_v4p0 | clinical | tcga | color
chol_newtumor-followup_tcga_v4p0 | clinical | tcga | color
chol_newtumor_tcga_clinical | clinical | tcga | color
chol_othermalignancy_tcga_v4p0 | clinical | tcga | color
chol_patient_tcga_clinical | clinical | tcga | color
chol_radiation_tcga_clinical | clinical | tcga | color
chol_mut_broad_mutsig2 | molecular | broad | mut
chol_mut01_broad_mutsig2 | molecular | broad | mut01
chol_cnv_ucsc_gistic2thd | molecular | ucsc | cnv
chol_rna_ucsc_hiseq | molecular | ucsc | rna
chol_protein_ucsc_rppa | molecular | ucsc | protein
chol_mut01_ucsc_broad | molecular | ucsc | mut01

### More Details of Molecular Collections

```

{
    "source": "ucsc",
    "type": "cnv",
    "collection": "chol_cnv_ucsc_gistic2thd",
    "RawDataUrl": " http://gdac.broadinstitute.org/runs/analyses__2014_10_17/data/CHOL/20141017/",
    "sampleSize": 36,
    "wrangler": "cgData TCGAscript CopyNumber_Gistic2 processed on 2015-01-27",
    "wranglingProcedure": "FIREHOSE data download from TCGA DCC, processed at UCSC into cgData repository",
    "description": "TCGA cholangiocarcinoma (CHOL) thresholded gene-level copy number variation (CNV) estimated using the GISTIC2 method."
}
```


```

false
```


```

false
```


```

false
```


Collection | Data Source | Data Type | Size | Description
--------- | ----------- | ----------- | ----------- | -----------
chol_cnv_ucsc_gistic2thd | ucsc | cnv | 36 | TCGA cholangiocarcinoma (CHOL) thresholded gene-level copy number variation (CNV) estimated using the GISTIC2 method.
undefined | undefined | undefined | undefined | undefined
undefined | undefined | undefined | undefined | undefined
undefined | undefined | undefined | undefined | undefined

## DLBC - Lymphoid Neoplasm Diffuse Large B-cell Lymphoma

Collection Name | Collection Type | Data Source | Data Type
--------- | ----------- | ----------- | -----------
dlbc_color_tcga_import | category | tcga | color
dlbc_samplemap_tcga_molecular | clinical | tcga | color
dlbc_drug_tcga_clinical | clinical | tcga | color
dlbc_followup_tcga_v4p4 | clinical | tcga | color
dlbc_newtumor-followup_tcga_v4p4 | clinical | tcga | color
dlbc_newtumor_tcga_clinical | clinical | tcga | color
dlbc_patient_tcga_clinical | clinical | tcga | color
dlbc_radiation_tcga_clinical | clinical | tcga | color
dlbc_mut_broad_mutsig2 | molecular | broad | mut
dlbc_mut01_broad_mutsig2 | molecular | broad | mut01
dlbc_cnv_ucsc_gistic2thd | molecular | ucsc | cnv
dlbc_rna_ucsc_hiseq | molecular | ucsc | rna
dlbc_protein_ucsc_rppa | molecular | ucsc | protein
dlbc_mut01_ucsc_bcm | molecular | ucsc | mut01

### More Details of Molecular Collections

```

{
    "source": "ucsc",
    "type": "cnv",
    "collection": "dlbc_cnv_ucsc_gistic2thd",
    "RawDataUrl": "http://gdac.broadinstitute.org/runs/analyses__2014_10_17/data/DLBC/20141017/",
    "sampleSize": 48,
    "wrangler": "cgData TCGAscript CopyNumber_Gistic2 processed on 2015-01-27",
    "wranglingProcedure": "FIREHOSE data download from TCGA DCC, processed at UCSC into cgData repository",
    "description": "TCGA lymphoid neoplasm diffuse large B-cell lymphoma (DLBC) thresholded gene-level copy number variation (CNV) estimated using the GISTIC2 method."
}
```


```

false
```


```

false
```


```

false
```


Collection | Data Source | Data Type | Size | Description
--------- | ----------- | ----------- | ----------- | -----------
dlbc_cnv_ucsc_gistic2thd | ucsc | cnv | 48 | TCGA lymphoid neoplasm diffuse large B-cell lymphoma (DLBC) thresholded gene-level copy number variation (CNV) estimated using the GISTIC2 method.
undefined | undefined | undefined | undefined | undefined
undefined | undefined | undefined | undefined | undefined
undefined | undefined | undefined | undefined | undefined

## COADREAD - Colon adenocarcinoma & Rectum adenocarcinoma

Collection Name | Collection Type | Data Source | Data Type
--------- | ----------- | ----------- | -----------
coadread_color_tcga_import | category | tcga | color
coadread_events_tcga_clinical | clinical | tcga | color
coadread_samplemap_tcga_molecular | clinical | tcga | color
coadread_cnv_ucsc_gistic2thd | molecular | ucsc | cnv
coadread_mut01_ucsc_mutation | molecular | ucsc | mut01
coadread_rna_ucsc_hiseq | molecular | ucsc | rna

### More Details of Molecular Collections

```

{
    "source": "ucsc",
    "type": "cnv",
    "collection": "coadread_cnv_ucsc_gistic2thd",
    "RawDataUrl": "",
    "sampleSize": 408,
    "wrangler": "",
    "wranglingProcedure": "",
    "description": "The dataset is combined from TCGA lung squamous cell carcinoma and lung adenocarcinoma datasets. TCGA lung cancer (LUNG) somatic mutation data. Red (=1) indicates that a non-silent somatic mutation (nonsense, missense, frame-shif indels, splice site mutations, stop codon readthroughs) was identified in the protein coding region of a gene, or any mutation identified in a non-coding gene. White (=0) indicates that none of the above mutation calls were made in this gene for the specific sample."
}
```


```

{
    "source": "ucsc",
    "type": "mut01",
    "collection": "coadread_mut01_ucsc_mutation",
    "RawDataUrl": "https://www.synapse.org/#!Synapse:syn1729383",
    "sampleSize": 224,
    "wrangler": "",
    "wranglingProcedure": "",
    "description": "TCGA colon & rectum adenocarcinoma (COADREAD) somatic mutation data. Red (=1) indicates that a non-silent somatic mutation (nonsense, missense, frame-shif indels, splice site mutations, stop codon readthroughs) was identified in the protein coding region of a gene, or any mutation identified in a non-coding gene. White (=0) indicates that none of the above mutation calls were made in this gene for the specific sample."
}
```


```

false
```


Collection | Data Source | Data Type | Size | Description
--------- | ----------- | ----------- | ----------- | -----------
coadread_cnv_ucsc_gistic2thd | ucsc | cnv | 408 | The dataset is combined from TCGA lung squamous cell carcinoma and lung adenocarcinoma datasets. TCGA lung cancer (LUNG) somatic mutation data. Red (=1) indicates that a non-silent somatic mutation (nonsense, missense, frame-shif indels, splice site mutations, stop codon readthroughs) was identified in the protein coding region of a gene, or any mutation identified in a non-coding gene. White (=0) indicates that none of the above mutation calls were made in this gene for the specific sample.
coadread_mut01_ucsc_mutation | ucsc | mut01 | 224 | TCGA colon & rectum adenocarcinoma (COADREAD) somatic mutation data. Red (=1) indicates that a non-silent somatic mutation (nonsense, missense, frame-shif indels, splice site mutations, stop codon readthroughs) was identified in the protein coding region of a gene, or any mutation identified in a non-coding gene. White (=0) indicates that none of the above mutation calls were made in this gene for the specific sample.
undefined | undefined | undefined | undefined | undefined

## LUNG - Lung adenocarcinoma & Lung squamous cell carcinoma

Collection Name | Collection Type | Data Source | Data Type
--------- | ----------- | ----------- | -----------
lung_color_tcga_import | category | tcga | color
lung_events_tcga_clinical | clinical | tcga | color
lung_samplemap_tcga_molecular | clinical | tcga | color
lung_facs_demo_flow | molecular | demo | facs
lung_cnv_ucsc_gistic2thd | molecular | ucsc | cnv
lung_mut01_ucsc_mutation | molecular | ucsc | mut01
lung_rna_ucsc_hiseq | molecular | ucsc | rna

### More Details of Molecular Collections

```

{
    "source": "ucsc",
    "type": "cnv",
    "collection": "lung_cnv_ucsc_gistic2thd",
    "RawDataUrl": "",
    "sampleSize": 1016,
    "wrangler": "",
    "wranglingProcedure": "",
    "description": "The dataset is combined from TCGA lung squamous cell carcinoma and lung adenocarcinoma datasets. TCGA lung cancer (LUNG) thresholded gene-level copy number variation (CNV) estimated using the GISTIC2 method."
}
```


```

{
    "source": "ucsc",
    "type": "mut01",
    "collection": "lung_mut01_ucsc_mutation",
    "RawDataUrl": "",
    "sampleSize": 408,
    "wrangler": "",
    "wranglingProcedure": "",
    "description": "The dataset is combined from TCGA lung squamous cell carcinoma and lung adenocarcinoma datasets. TCGA lung cancer (LUNG) somatic mutation data. Red (=1) indicates that a non-silent somatic mutation (nonsense, missense, frame-shif indels, splice site mutations, stop codon readthroughs) was identified in the protein coding region of a gene, or any mutation identified in a non-coding gene. White (=0) indicates that none of the above mutation calls were made in this gene for the specific sample."
}
```


```

false
```


Collection | Data Source | Data Type | Size | Description
--------- | ----------- | ----------- | ----------- | -----------
lung_cnv_ucsc_gistic2thd | ucsc | cnv | 1016 | The dataset is combined from TCGA lung squamous cell carcinoma and lung adenocarcinoma datasets. TCGA lung cancer (LUNG) thresholded gene-level copy number variation (CNV) estimated using the GISTIC2 method.
lung_mut01_ucsc_mutation | ucsc | mut01 | 408 | The dataset is combined from TCGA lung squamous cell carcinoma and lung adenocarcinoma datasets. TCGA lung cancer (LUNG) somatic mutation data. Red (=1) indicates that a non-silent somatic mutation (nonsense, missense, frame-shif indels, splice site mutations, stop codon readthroughs) was identified in the protein coding region of a gene, or any mutation identified in a non-coding gene. White (=0) indicates that none of the above mutation calls were made in this gene for the specific sample.
undefined | undefined | undefined | undefined | undefined

## COAD - Colon adenocarcinoma

Collection Name | Collection Type | Data Source | Data Type
--------- | ----------- | ----------- | -----------
coad_color_tcga_import | category | tcga | color
coad_samplemap_tcga_molecular | clinical | tcga | color
coad_patient_tcga_clinical | clinical | tcga | color
coad_drug_tcga_clinical | clinical | tcga | color
coad_radiation_tcga_clinical | clinical | tcga | color
coad_followup_tcga_v1p0 | clinical | tcga | color
coad_newtumor_tcga_clinical | clinical | tcga | color
coad_newtumor-followup_tcga_v1p0 | clinical | tcga | color
coad_othermalignancy_tcga_v4p0 | clinical | tcga | color
coad_protein_ucsc_rppa | molecular | ucsc | protein
coad_rna_ucsc_hiseq | molecular | ucsc | rna

### More Details of Molecular Collections

```

false
```


```

false
```


Collection | Data Source | Data Type | Size | Description
--------- | ----------- | ----------- | ----------- | -----------
undefined | undefined | undefined | undefined | undefined
undefined | undefined | undefined | undefined | undefined

## HG19 - Genome Platform

Collection Name | Collection Type | Data Source | Data Type
--------- | ----------- | ----------- | -----------
hg19_genesets_hgnc_import | category | hgnc | genesets
hg19_genesets_orghs_1e05 | category | orgHs | genesets

### More Details of Molecular Collections

## LAML - Acute Myeloid Leukemia

Collection Name | Collection Type | Data Source | Data Type
--------- | ----------- | ----------- | -----------
laml_color_tcga_import | category | tcga | color
laml_samplemap_tcga_molecular | clinical | tcga | color
laml_patient_tcga_clinical | clinical | tcga | color
laml_cnv_ucsc_gistic2thd | molecular | ucsc | cnv
laml_mut01_ucsc_mutation | molecular | ucsc | mut01
laml_rna_ucsc_hiseq | molecular | ucsc | rna

### More Details of Molecular Collections

```

{
    "source": "ucsc",
    "type": "cnv",
    "collection": "laml_cnv_ucsc_gistic2thd",
    "RawDataUrl": "http://gdac.broadinstitute.org/runs/analyses__2014_10_17/data/LAML/20141017/",
    "sampleSize": 191,
    "wrangler": "cgData TCGAscript CopyNumber_Gistic2 processed on 2015-01-27",
    "wranglingProcedure": "FIREHOSE data download from TCGA DCC, processed at UCSC into cgData repository",
    "description": "TCGA acute myeloid leukemia (LAML) thresholded gene-level copy number variation (CNV) estimated using the GISTIC2 method."
}
```


```

{
    "source": "ucsc",
    "type": "mut01",
    "collection": "laml_mut01_ucsc_mutation",
    "RawDataUrl": "https://www.synapse.org/#!Synapse:syn1729383",
    "sampleSize": 196,
    "wrangler": "cgData TCGAscript mutationMatrix processed on 2015-01-28",
    "wranglingProcedure": "TCGA PANCAN strictly filtered maf files (file names: *_cleaned_filtered.maf) download from Synapse, processed into gene by sample matrix at UCSC into cgData repository",
    "description": "TCGA acute myeloid leukemia (LAML) somatic mutation data. Red (=1) indicates that a non-silent somatic mutation (nonsense, missense, frame-shif indels, splice site mutations, stop codon readthroughs) was identified in the protein coding region of a gene, or any mutation identified in a non-coding gene. White (=0) indicates that none of the above mutation calls were made in this gene for the specific sample."
}
```


```

false
```


Collection | Data Source | Data Type | Size | Description
--------- | ----------- | ----------- | ----------- | -----------
laml_cnv_ucsc_gistic2thd | ucsc | cnv | 191 | TCGA acute myeloid leukemia (LAML) thresholded gene-level copy number variation (CNV) estimated using the GISTIC2 method.
laml_mut01_ucsc_mutation | ucsc | mut01 | 196 | TCGA acute myeloid leukemia (LAML) somatic mutation data. Red (=1) indicates that a non-silent somatic mutation (nonsense, missense, frame-shif indels, splice site mutations, stop codon readthroughs) was identified in the protein coding region of a gene, or any mutation identified in a non-coding gene. White (=0) indicates that none of the above mutation calls were made in this gene for the specific sample.
undefined | undefined | undefined | undefined | undefined

## READ - Rectum adenocarcinoma

Collection Name | Collection Type | Data Source | Data Type
--------- | ----------- | ----------- | -----------
read_color_tcga_import | category | tcga | color
read_samplemap_tcga_molecular | clinical | tcga | color
read_drug_tcga_clinical | clinical | tcga | color
read_followup_tcga_v1p0 | clinical | tcga | color
read_newtumor-followup_tcga_v1p0 | clinical | tcga | color
read_newtumor_tcga_clinical | clinical | tcga | color
read_othermalignancy_tcga_v4p0 | clinical | tcga | color
read_patient_tcga_clinical | clinical | tcga | color
read_radiation_tcga_clinical | clinical | tcga | color
read_protein_ucsc_rppa | molecular | ucsc | protein
read_rna_ucsc_hiseq | molecular | ucsc | rna

### More Details of Molecular Collections

```

false
```


```

false
```


Collection | Data Source | Data Type | Size | Description
--------- | ----------- | ----------- | ----------- | -----------
undefined | undefined | undefined | undefined | undefined
undefined | undefined | undefined | undefined | undefined

## UCS - Uterine Carcinosarcoma

Collection Name | Collection Type | Data Source | Data Type
--------- | ----------- | ----------- | -----------
ucs_color_tcga_import | category | tcga | color
ucs_samplemap_tcga_molecular | clinical | tcga | color
ucs_drug_tcga_clinical | clinical | tcga | color
ucs_followup_tcga_v4p0 | clinical | tcga | color
ucs_newtumor-followup_tcga_v4p0 | clinical | tcga | color
ucs_newtumor_tcga_clinical | clinical | tcga | color
ucs_othermalignancy_tcga_v4p0 | clinical | tcga | color
ucs_patient_tcga_clinical | clinical | tcga | color
ucs_radiation_tcga_clinical | clinical | tcga | color
ucs_rna_ucsc_hiseq | molecular | ucsc | rna
ucs_protein_ucsc_rppa | molecular | ucsc | protein
ucs_mut01_ucsc_broad | molecular | ucsc | mut01

### More Details of Molecular Collections

```

false
```


```

false
```


```

false
```


Collection | Data Source | Data Type | Size | Description
--------- | ----------- | ----------- | ----------- | -----------
undefined | undefined | undefined | undefined | undefined
undefined | undefined | undefined | undefined | undefined
undefined | undefined | undefined | undefined | undefined

## UVM - Uveal Melanoma

Collection Name | Collection Type | Data Source | Data Type
--------- | ----------- | ----------- | -----------
uvm_color_tcga_import | category | tcga | color
uvm_samplemap_tcga_molecular | clinical | tcga | color
uvm_drug_tcga_clinical | clinical | tcga | color
uvm_followup_tcga_v4p0 | clinical | tcga | color
uvm_newtumor-followup_tcga_v4p0 | clinical | tcga | color
uvm_newtumor_tcga_clinical | clinical | tcga | color
uvm_othermalignancy_tcga_v4p0 | clinical | tcga | color
uvm_patient_tcga_clinical | clinical | tcga | color
uvm_radiation_tcga_clinical | clinical | tcga | color
uvm_rna_ucsc_hiseq | molecular | ucsc | rna
uvm_protein_ucsc_rppa | molecular | ucsc | protein
uvm_mut01_ucsc_broadcurated | molecular | ucsc | mut01

### More Details of Molecular Collections

```

false
```


```

false
```


```

false
```


Collection | Data Source | Data Type | Size | Description
--------- | ----------- | ----------- | ----------- | -----------
undefined | undefined | undefined | undefined | undefined
undefined | undefined | undefined | undefined | undefined
undefined | undefined | undefined | undefined | undefined

## THYM - Thymoma

Collection Name | Collection Type | Data Source | Data Type
--------- | ----------- | ----------- | -----------
thym_color_tcga_import | category | tcga | color
thym_samplemap_tcga_molecular | clinical | tcga | color
thym_drug_tcga_clinical | clinical | tcga | color
thym_followup_tcga_v4p0 | clinical | tcga | color
thym_newtumor-followup_tcga_v4p0 | clinical | tcga | color
thym_newtumor_tcga_clinical | clinical | tcga | color
thym_othermalignancy_tcga_v4p0 | clinical | tcga | color
thym_patient_tcga_clinical | clinical | tcga | color
thym_radiation_tcga_clinical | clinical | tcga | color
thym_rna_ucsc_hiseq | molecular | ucsc | rna
thym_protein_ucsc_rppa | molecular | ucsc | protein
thym_mut01_ucsc_broad | molecular | ucsc | mut01

### More Details of Molecular Collections

```

false
```


```

false
```


```

false
```


Collection | Data Source | Data Type | Size | Description
--------- | ----------- | ----------- | ----------- | -----------
undefined | undefined | undefined | undefined | undefined
undefined | undefined | undefined | undefined | undefined
undefined | undefined | undefined | undefined | undefined

## TGCT - Testicular Germ Cell Tumors

Collection Name | Collection Type | Data Source | Data Type
--------- | ----------- | ----------- | -----------
tgct_color_tcga_import | category | tcga | color
tgct_samplemap_tcga_molecular | clinical | tcga | color
tgct_drug_tcga_clinical | clinical | tcga | color
tgct_followup_tcga_v4p0 | clinical | tcga | color
tgct_newtumor-followup_tcga_v4p0 | clinical | tcga | color
tgct_newtumor_tcga_clinical | clinical | tcga | color
tgct_othermalignancy_tcga_v4p0 | clinical | tcga | color
tgct_patient_tcga_clinical | clinical | tcga | color
tgct_radiation_tcga_clinical | clinical | tcga | color
tgct_rna_ucsc_hiseq | molecular | ucsc | rna
tgct_protein_ucsc_rppa | molecular | ucsc | protein
tgct_mut01_ucsc_broad | molecular | ucsc | mut01

### More Details of Molecular Collections

```

false
```


```

false
```


```

false
```


Collection | Data Source | Data Type | Size | Description
--------- | ----------- | ----------- | ----------- | -----------
undefined | undefined | undefined | undefined | undefined
undefined | undefined | undefined | undefined | undefined
undefined | undefined | undefined | undefined | undefined

## PCPG - Pheochromocytoma and Paraganglioma

Collection Name | Collection Type | Data Source | Data Type
--------- | ----------- | ----------- | -----------
pcpg_color_tcga_import | category | tcga | color
pcpg_samplemap_tcga_molecular | clinical | tcga | color
pcpg_drug_tcga_clinical | clinical | tcga | color
pcpg_followup_tcga_v4p0 | clinical | tcga | color
pcpg_newtumor-followup_tcga_v4p0 | clinical | tcga | color
pcpg_newtumor_tcga_clinical | clinical | tcga | color
pcpg_othermalignancy_tcga_v4p0 | clinical | tcga | color
pcpg_patient_tcga_clinical | clinical | tcga | color
pcpg_radiation_tcga_clinical | clinical | tcga | color
pcpg_rna_ucsc_hiseq | molecular | ucsc | rna
pcpg_protein_ucsc_rppa | molecular | ucsc | protein
pcpg_mut01_ucsc_broad | molecular | ucsc | mut01

### More Details of Molecular Collections

```

false
```


```

false
```


```

false
```


Collection | Data Source | Data Type | Size | Description
--------- | ----------- | ----------- | ----------- | -----------
undefined | undefined | undefined | undefined | undefined
undefined | undefined | undefined | undefined | undefined
undefined | undefined | undefined | undefined | undefined

## OV - Ovarian serous cystadenocarcinoma

Collection Name | Collection Type | Data Source | Data Type
--------- | ----------- | ----------- | -----------
ov_color_tcga_import | category | tcga | color
ov_samplemap_tcga_molecular | clinical | tcga | color
ov_drug_tcga_clinical | clinical | tcga | color
ov_followup_tcga_v1p0 | clinical | tcga | color
ov_newtumor-followup_tcga_v1p0 | clinical | tcga | color
ov_newtumor_tcga_clinical | clinical | tcga | color
ov_othermalignancy_tcga_v4p0 | clinical | tcga | color
ov_patient_tcga_clinical | clinical | tcga | color
ov_radiation_tcga_clinical | clinical | tcga | color
ov_rna_ucsc_hiseq | molecular | ucsc | rna
ov_protein_ucsc_rppa | molecular | ucsc | protein
ov_mut01_ucsc_pancanaws | molecular | ucsc | mut01

### More Details of Molecular Collections

```

false
```


```

false
```


```

false
```


Collection | Data Source | Data Type | Size | Description
--------- | ----------- | ----------- | ----------- | -----------
undefined | undefined | undefined | undefined | undefined
undefined | undefined | undefined | undefined | undefined
undefined | undefined | undefined | undefined | undefined

## MESO - Mesothelioma

Collection Name | Collection Type | Data Source | Data Type
--------- | ----------- | ----------- | -----------
meso_color_tcga_import | category | tcga | color
meso_samplemap_tcga_molecular | clinical | tcga | color
meso_drug_tcga_clinical | clinical | tcga | color
meso_followup_tcga_v4p0 | clinical | tcga | color
meso_newtumor-followup_tcga_v4p0 | clinical | tcga | color
meso_newtumor_tcga_clinical | clinical | tcga | color
meso_othermalignancy_tcga_v4p0 | clinical | tcga | color
meso_patient_tcga_clinical | clinical | tcga | color
meso_radiation_tcga_clinical | clinical | tcga | color
meso_rna_ucsc_hiseq | molecular | ucsc | rna
meso_protein_ucsc_rppa | molecular | ucsc | protein
meso_mut01_ucsc_broad | molecular | ucsc | mut01

### More Details of Molecular Collections

```

false
```


```

false
```


```

false
```


Collection | Data Source | Data Type | Size | Description
--------- | ----------- | ----------- | ----------- | -----------
undefined | undefined | undefined | undefined | undefined
undefined | undefined | undefined | undefined | undefined
undefined | undefined | undefined | undefined | undefined

## BRAIN - Lower Grade Glioma & Glioblastoma multiforme

Collection Name | Collection Type | Data Source | Data Type
--------- | ----------- | ----------- | -----------
brain_color_tcga_import | category | tcga | color
brain_samplemap_tcga_molecular | clinical | tcga | color
brain_events_tcga_clinical | clinical | tcga | color
brain_patient_tcga_clinical | clinical | tcga | color
brain_followup-v1p0_tcga_clinical | clinical | tcga | color
brain_drug_tcga_clinical | clinical | tcga | color
brain_newtumor_tcga_clinical | clinical | tcga | color
brain_othermalignancy-v4p0_tcga_clinical | clinical | tcga | color
brain_radiation_tcga_clinical | clinical | tcga | color
brain_followup_tcga_v1p0 | clinical | tcga | color
brain_newtumor_tcga_clinical | clinical | tcga | color
brain_othermalignancy_tcga_v4p0 | clinical | tcga | color
brain_mut_broad_mutsig2 | molecular | broad | mut
brain_mut01_broad_mutsig2 | molecular | broad | mut01
brain_cnv_ucsc-pnas_gistic | molecular | ucsc-PNAS | cnv
brain_mut01_ucsc-pnas_import | molecular | ucsc-PNAS | mut01
brain_cnv_ucsc_gistic | molecular | ucsc | cnv
brain_mut01_ucsc_import | molecular | ucsc | mut01

### More Details of Molecular Collections

```

{
    "source": "ucsc",
    "type": "cnv",
    "collection": "brain_cnv_ucsc_gistic",
    "RawDataUrl": "",
    "sampleSize": 1090,
    "wrangler": "",
    "wranglingProcedure": "",
    "description": ""
}
```


```

{
    "source": "ucsc",
    "type": "mut01",
    "collection": "brain_mut01_ucsc_import",
    "RawDataUrl": "",
    "sampleSize": 818,
    "wrangler": "",
    "wranglingProcedure": "",
    "description": ""
}
```


Collection | Data Source | Data Type | Size | Description
--------- | ----------- | ----------- | ----------- | -----------
brain_cnv_ucsc_gistic | ucsc | cnv | 1090 | 
brain_mut01_ucsc_import | ucsc | mut01 | 818 | 
