
## Mongo DB Connection

```javascript
mongoose.connect("mongodb://oncoscape-dev-db1.sttrcancer.io:27017,oncoscape-dev-db2.sttrcancer.io:27017,oncoscape-dev-db3.sttrcancer.io:27017/pancan12?authSource=admin",{user: "oncoscapeRead",pass: "i1f4d9botHD4xnZ"});
var connection = mongoose.connection;
var db = connection.db;
```


## Example of fields from one record

> Fields for most of records in gbm_patient_tcga_clinical


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
  'new_tumor_event_diagnosis',
  'age_at_initial_pathologic_diagnosis',
  'anatomic_organ_subdivision',
  'days_to_diagnosis',
  'disease_code',
  'histologic_diagnosis',
  'icd_10',
  'icd_3_histology',
  'icd_3',
  'tissue_source_site_code',
  'tumor_tissue_site' ]
```


## Get the count of records in the collection

### HTTP Request

`GET http://dev.oncoscape.sttrcancer.io/api/gbm_patient_tcga_clinical/count`


> Count of records in gbm_patient_tcga_clinical


```

596
```


## Query detail information from collection gbm_patient_tcga_clinical

Filter by gender and race and only show the selected fields

### HTTP Request

`GET http://dev.oncoscape.sttrcancer.io/api/gbm_patient_tcga_clinical/?q={"gender":"MALE", "race":"WHITE","$fields":["gender","race","patient_ID"],"$skip":5,"$limit":2}`


only show gender, race and patient_ID

`"$fields":["gender","race","patient_ID"]`


skip the first five records

`"$skip":5`


limit the final output to two records.

`"$limit":2`


> Male White patients result: 


```

[
    {
        "_id": "57bce8ec1debbd62f4bf350e",
        "patient_ID": "TCGA-02-0024-01",
        "gender": "MALE",
        "race": "WHITE",
        "histologic_diagnosis": "GLIOBLASTOMA MULTIFORME TREATED PRIMARY"
    },
    {
        "_id": "57bce8ec1debbd62f4bf350f",
        "patient_ID": "TCGA-02-0025-01",
        "gender": "MALE",
        "race": "WHITE",
        "histologic_diagnosis": "GLIOBLASTOMA MULTIFORME UNTREATED PRIMARY"
    }
]
```


> Count of the records meet this criteria


```

2
```


## Fetch JSON formatted data

> Fetch JSON formatted data using R, Python, or javascript


```shell
collection = db.collection("gbm_patient_tcga_clinical");
collection.find({"gender":"MALE", "race":"WHITE"}, {"patient_ID":true, "gender":true,
 "race":true, "histologic_diagnosis":true})
          .limit(2).skip(5).toArray(function(err, doc){);
console.log(JSON.stringify(doc, null, 4));
```


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
brca_color_tcga_import | category | tcga | color
brca_patient_tcga_clinical | clinical | tcga | color
brca_drug_tcga_clinical | clinical | tcga | color
brca_radiation_tcga_clinical | clinical | tcga | color
brca_followup-v1p5_tcga_clinical | clinical | tcga | color
brca_followup-v2p1_tcga_clinical | clinical | tcga | color
brca_followup-v4p0_tcga_clinical | clinical | tcga | color
brca_newtumor_tcga_clinical | clinical | tcga | color
brca_newtumor-followup-v4p0_tcga_clinical | clinical | tcga | color
brca_othermalignancy-v4p0_tcga_clinical | clinical | tcga | color
brca_events_tcga_clinical | clinical | tcga | color
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

```

{
    "source": "ucsc",
    "type": "cnv",
    "collection": "brca_cnv_ucsc_gistic2thd",
    "RawDataUrl": "http://gdac.broadinstitute.org/runs/analyses__2014_10_17/data/BRCA/20141017/",
    "sampleSize": 1079,
    "wrangler": "cgData TCGAscript CopyNumber_Gistic2 processed on 2015-01-27",
    "wranglingProcedure": "FIREHOSE data download from TCGA DCC, processed at UCSC into cgData repository",
    "desc": "TCGA breast invasive carcinoma (BRCA) thresholded gene-level copy number variation (CNV) estimated using the GISTIC2 method."
}
```


```

{
    "source": "ucsc",
    "type": "mut",
    "collection": "brca_mut_ucsc_mutationcuratedwustlgene",
    "RawDataUrl": "https://tcga-data.nci.nih.gov/tcgafiles/ftp_auth/distro_ftpusers/anonymous/tumor/brca/gsc/genome.wustl.edu/illuminaga_dnaseq_curated/mutations/",
    "sampleSize": 982,
    "wrangler": "cgData TCGAscript maf processed on 2015-01-27",
    "wranglingProcedure": "Download .maf file from TCGA DCC, processed into gene by sample matrix at UCSC, stored in the UCSC Xena repository",
    "desc": "TCGA breast invasive carcinoma (BRCA) somatic mutation data. Sequencing data are generated on a IlluminaGA system. The calls are generated at Genome Institute at Washington University Sequencing Center using the WashU pipeline method. "
}
```


```

{
    "source": "ucsc",
    "type": "mut01",
    "collection": "brca_mut01_ucsc_import",
    "RawDataUrl": "https://tcga-data.nci.nih.gov/tcgafiles/ftp_auth/distro_ftpusers/anonymous/tumor/brca/gsc/genome.wustl.edu/illuminaga_dnaseq_curated/mutations/",
    "sampleSize": 982,
    "wrangler": "cgData TCGAscript maf processed on 2015-01-27",
    "wranglingProcedure": "Download .maf file from TCGA DCC, processed into gene by sample matrix at UCSC, stored in the UCSC Xena repository",
    "desc": "TCGA breast invasive carcinoma (BRCA) somatic mutation data. Sequencing data are generated on a IlluminaGA system. The calls are generated at Genome Institute at Washington University Sequencing Center using the WashU pipeline method. "
}
```


## ESCA - Esophageal carcinoma

Collection Name | Collection Type | Data Source | Data Type
--------- | ----------- | ----------- | -----------
esca_cnv_ucsc_gistic2thd | molecular | ucsc | cnv

```

{
    "source": "ucsc",
    "type": "cnv",
    "collection": "esca_cnv_ucsc_gistic2thd",
    "RawDataUrl": " http://gdac.broadinstitute.org/runs/analyses__2014_10_17/data/ESCA/20141017/",
    "sampleSize": 184,
    "wrangler": "cgData TCGAscript CopyNumber_Gistic2 processed on 2015-01-27",
    "wranglingProcedure": "FIREHOSE data download from TCGA DCC, processed at UCSC into cgData repository",
    "desc": "TCGA esophageal carcinoma (ESCA) thresholded gene-level copy number variation (CNV) estimated using the GISTIC2 method."
}
```


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

```

{
    "source": "ucsc",
    "type": "cnv",
    "collection": "lung_cnv_ucsc_gistic2thd",
    "RawDataUrl": "",
    "sampleSize": 1016,
    "wrangler": "",
    "wranglingProcedure": "",
    "desc": "The dataset is combined from TCGA lung squamous cell carcinoma and lung adenocarcinoma datasets. TCGA lung cancer (LUNG) thresholded gene-level copy number variation (CNV) estimated using the GISTIC2 method."
}
```


```

{
    "source": "ucsc",
    "type": "mut",
    "collection": "lung_mut_ucsc_mutation",
    "RawDataUrl": "",
    "sampleSize": 408,
    "wrangler": "",
    "wranglingProcedure": "",
    "desc": "The dataset is combined from TCGA lung squamous cell carcinoma and lung adenocarcinoma datasets. TCGA lung cancer (LUNG) somatic mutation data. Red (=1) indicates that a non-silent somatic mutation (nonsense, missense, frame-shif indels, splice site mutations, stop codon readthroughs) was identified in the protein coding region of a gene, or any mutation identified in a non-coding gene. White (=0) indicates that none of the above mutation calls were made in this gene for the specific sample."
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
    "desc": "The dataset is combined from TCGA lung squamous cell carcinoma and lung adenocarcinoma datasets. TCGA lung cancer (LUNG) somatic mutation data. Red (=1) indicates that a non-silent somatic mutation (nonsense, missense, frame-shif indels, splice site mutations, stop codon readthroughs) was identified in the protein coding region of a gene, or any mutation identified in a non-coding gene. White (=0) indicates that none of the above mutation calls were made in this gene for the specific sample."
}
```


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

```

{
    "source": "ucsc",
    "type": "cnv",
    "collection": "gbm_cnv_ucsc_gistic2thd",
    "RawDataUrl": "http://gdac.broadinstitute.org/runs/analyses__2014_10_17/data/GBM/20141017/",
    "sampleSize": 577,
    "wrangler": "cgData TCGAscript CopyNumber_Gistic2 processed on 2015-01-27",
    "wranglingProcedure": "FIREHOSE data download from TCGA DCC, processed at UCSC into cgData repository",
    "desc": "TCGA glioblastoma multiforme (GBM) thresholded gene-level copy number variation (CNV) estimated using the GISTIC2 method."
}
```


```

{
    "source": "ucsc",
    "type": "mut",
    "collection": "gbm_mut_ucsc_mutationbroadgene",
    "RawDataUrl": "https://tcga-data.nci.nih.gov/tcgafiles/ftp_auth/distro_ftpusers/anonymous/tumor/gbm/gsc/broad.mit.edu/illuminaga_dnaseq/mutations/",
    "sampleSize": 291,
    "wrangler": "cgData TCGAscript maf processed on 2015-01-27",
    "wranglingProcedure": "Download .maf file from TCGA DCC, processed into gene by sample matrix at UCSC, stored in the UCSC Xena repository",
    "desc": "TCGA glioblastoma multiforme (GBM) somatic mutation data. Sequencing data are generated on a IlluminaGA system. The calls are generated at Broad Institute Genome Sequencing Center using the MutDect method. "
}
```


```

{
    "source": "ucsc",
    "type": "mut01",
    "collection": "gbm_mut01_ucsc_import",
    "RawDataUrl": "https://tcga-data.nci.nih.gov/tcgafiles/ftp_auth/distro_ftpusers/anonymous/tumor/gbm/gsc/broad.mit.edu/illuminaga_dnaseq/mutations/",
    "sampleSize": 291,
    "wrangler": "cgData TCGAscript maf processed on 2015-01-27",
    "wranglingProcedure": "Download .maf file from TCGA DCC, processed into gene by sample matrix at UCSC, stored in the UCSC Xena repository",
    "desc": "TCGA glioblastoma multiforme (GBM) somatic mutation data. Sequencing data are generated on a IlluminaGA system. The calls are generated at Broad Institute Genome Sequencing Center using the MutDect method. "
}
```


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

```

{
    "source": "ucsc",
    "type": "cnv",
    "collection": "coadread_cnv_ucsc_gistic2thd",
    "RawDataUrl": "",
    "sampleSize": 408,
    "wrangler": "",
    "wranglingProcedure": "",
    "desc": "The dataset is combined from TCGA lung squamous cell carcinoma and lung adenocarcinoma datasets. TCGA lung cancer (LUNG) somatic mutation data. Red (=1) indicates that a non-silent somatic mutation (nonsense, missense, frame-shif indels, splice site mutations, stop codon readthroughs) was identified in the protein coding region of a gene, or any mutation identified in a non-coding gene. White (=0) indicates that none of the above mutation calls were made in this gene for the specific sample."
}
```


```

{
    "source": "ucsc",
    "type": "mut",
    "collection": "coadread_mut_ucsc_mutation",
    "RawDataUrl": "https://www.synapse.org/#!Synapse:syn1729383",
    "sampleSize": 224,
    "wrangler": "",
    "wranglingProcedure": "",
    "desc": "TCGA colon & rectum adenocarcinoma (COADREAD) somatic mutation data. Red (=1) indicates that a non-silent somatic mutation (nonsense, missense, frame-shif indels, splice site mutations, stop codon readthroughs) was identified in the protein coding region of a gene, or any mutation identified in a non-coding gene. White (=0) indicates that none of the above mutation calls were made in this gene for the specific sample."
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
    "desc": "TCGA colon & rectum adenocarcinoma (COADREAD) somatic mutation data. Red (=1) indicates that a non-silent somatic mutation (nonsense, missense, frame-shif indels, splice site mutations, stop codon readthroughs) was identified in the protein coding region of a gene, or any mutation identified in a non-coding gene. White (=0) indicates that none of the above mutation calls were made in this gene for the specific sample."
}
```


## HNSC - Head and Neck squamous cell carcinoma

Collection Name | Collection Type | Data Source | Data Type
--------- | ----------- | ----------- | -----------
hnsc_color_tcga_import | category | tcga | color
hnsc_patient_tcga_na | clinical | tcga | color
hnsc_drug_tcga_na | clinical | tcga | color
hnsc_radiation_tcga_na | clinical | tcga | color
hnsc_followup-v1p0_tcga_na | clinical | tcga | color
hnsc_followup-v4p8_tcga_na | clinical | tcga | color
hnsc_newtumor_tcga_na | clinical | tcga | color
hnsc_newtumor-followup-v4p8_tcga_na | clinical | tcga | color
hnsc_othermalignancy-v4p0_tcga_na | clinical | tcga | color
hnsc_events_tcga_clinical | clinical | tcga | color
hnsc_cnv_ucsc_gistic2thd | molecular | ucsc | cnv
hnsc_mut_ucsc_mutationbroadgene | molecular | ucsc | mut
hnsc_mut01_ucsc_mutationbroadgene | molecular | ucsc | mut01
hnsc_cnv_cbio_gistic | molecular | cBio | cnv
hnsc_mut_cbio_mut | molecular | cBio | mut
hnsc_mut01_cbio_mut | molecular | cBio | mut01
hnsc_methylation_cbio_methylationhm450 | molecular | cBio | methylation
hnsc_rna_cbio_rnaseq | molecular | cBio | rna
hnsc_protein_cbio_rppa | molecular | cBio | protein

```

{
    "source": "ucsc",
    "type": "cnv",
    "collection": "hnsc_cnv_ucsc_gistic2thd",
    "RawDataUrl": " http://gdac.broadinstitute.org/runs/analyses__2014_10_17/data/HNSC/20141017/",
    "sampleSize": 522,
    "wrangler": "cgData TCGAscript CopyNumber_Gistic2 processed on 2015-01-27",
    "wranglingProcedure": "FIREHOSE data download from TCGA DCC, processed at UCSC into cgData repository",
    "desc": "TCGA head & neck squamous cell carcinoma (HNSC) thresholded gene-level copy number variation (CNV) estimated using the GISTIC2 method."
}
```


```

{
    "source": "ucsc",
    "type": "mut",
    "collection": "hnsc_mut_ucsc_mutationbroadgene",
    "RawDataUrl": "https://tcga-data.nci.nih.gov/tcgafiles/ftp_auth/distro_ftpusers/anonymous/tumor/hnsc/gsc/broad.mit.edu/illuminaga_dnaseq_automated/mutations/",
    "sampleSize": 509,
    "wrangler": "cgData TCGAscript maf processed on 2015-01-27",
    "wranglingProcedure": "Download .maf file from TCGA DCC, processed into gene by sample matrix at UCSC, stored in the UCSC Xena repository",
    "desc": "TCGA head & neck squamous cell carcinoma (HNSC) somatic mutation data. Sequencing data are generated on a IlluminaGA system. The calls are generated at Broad Institute Genome Sequencing Center using the MutDect method. "
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
    "desc": "TCGA head & neck squamous cell carcinoma (HNSC) somatic mutation data. Sequencing data are generated on a IlluminaGA system. The calls are generated at Broad Institute Genome Sequencing Center using the MutDect method. "
}
```


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

```

{
    "source": "ucsc",
    "type": "cnv",
    "collection": "lgg_cnv_ucsc_gistic2thd",
    "RawDataUrl": "http://gdac.broadinstitute.org/runs/analyses__2014_10_17/data/LGG/20141017/",
    "sampleSize": 513,
    "wrangler": "cgData TCGAscript CopyNumber_Gistic2 processed on 2015-01-27",
    "wranglingProcedure": "FIREHOSE data download from TCGA DCC, processed at UCSC into cgData repository",
    "desc": "TCGA brain lower grade glioma (LGG) thresholded gene-level copy number variation (CNV) estimated using the GISTIC2 method."
}
```


```

{
    "source": "ucsc",
    "type": "mut",
    "collection": "lgg_mut_ucsc_mutationbroadgene",
    "RawDataUrl": "",
    "sampleSize": 408,
    "wrangler": "",
    "wranglingProcedure": "",
    "desc": "The dataset is combined from TCGA lung squamous cell carcinoma and lung adenocarcinoma datasets. TCGA lung cancer (LUNG) somatic mutation data. Red (=1) indicates that a non-silent somatic mutation (nonsense, missense, frame-shif indels, splice site mutations, stop codon readthroughs) was identified in the protein coding region of a gene, or any mutation identified in a non-coding gene. White (=0) indicates that none of the above mutation calls were made in this gene for the specific sample."
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
    "desc": "The dataset is combined from TCGA lung squamous cell carcinoma and lung adenocarcinoma datasets. TCGA lung cancer (LUNG) somatic mutation data. Red (=1) indicates that a non-silent somatic mutation (nonsense, missense, frame-shif indels, splice site mutations, stop codon readthroughs) was identified in the protein coding region of a gene, or any mutation identified in a non-coding gene. White (=0) indicates that none of the above mutation calls were made in this gene for the specific sample."
}
```


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

```

{
    "source": "ucsc",
    "type": "cnv",
    "collection": "luad_cnv_ucsc_gistic2thd",
    "RawDataUrl": "http://gdac.broadinstitute.org/runs/analyses__2014_10_17/data/LUAD/20141017/",
    "sampleSize": 515,
    "wrangler": "cgData TCGAscript CopyNumber_Gistic2 processed on 2015-01-27",
    "wranglingProcedure": "FIREHOSE data download from TCGA DCC, processed at UCSC into cgData repository",
    "desc": "TCGA lung adenocarcinoma (LUAD) thresholded gene-level copy number variation (CNV) estimated using the GISTIC2 method."
}
```


```

{
    "source": "ucsc",
    "type": "mut",
    "collection": "luad_mut_ucsc_mutationbroadgene",
    "RawDataUrl": "https://tcga-data.nci.nih.gov/tcgafiles/ftp_auth/distro_ftpusers/anonymous/tumor/luad/gsc/broad.mit.edu/illuminaga_dnaseq_automated/mutations/",
    "sampleSize": 543,
    "wrangler": "cgData TCGAscript maf processed on 2015-01-27",
    "wranglingProcedure": "Download .maf file from TCGA DCC, processed into gene by sample matrix at UCSC, stored in the UCSC Xena repository",
    "desc": "TCGA lung adenocarcinoma (LUAD) somatic mutation data. Sequencing data are generated on a IlluminaGA system. The calls are generated at Broad Institute Genome Sequencing Center using the MutDect method. "
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
    "desc": "TCGA lung adenocarcinoma (LUAD) somatic mutation data. Sequencing data are generated on a IlluminaGA system. The calls are generated at Broad Institute Genome Sequencing Center using the MutDect method. "
}
```


## LUSC - Lung squamous cell carcinoma

Collection Name | Collection Type | Data Source | Data Type
--------- | ----------- | ----------- | -----------
lusc_color_tcga_import | category | tcga | color
lusc_patient_tcga_na | clinical | tcga | color
lusc_drug_tcga_na | clinical | tcga | color
lusc_radiation_tcga_na | clinical | tcga | color
lusc_followup-v1p0_tcga_na | clinical | tcga | color
lusc_newtumor_tcga_na | clinical | tcga | color
lusc_othermalignancy-v4p0_tcga_na | clinical | tcga | color
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

```

{
    "source": "ucsc",
    "type": "cnv",
    "collection": "lusc_cnv_ucsc_gistic2thd",
    "RawDataUrl": "http://gdac.broadinstitute.org/runs/analyses__2014_10_17/data/LUSC/20141017/",
    "sampleSize": 501,
    "wrangler": "cgData TCGAscript CopyNumber_Gistic2 processed on 2015-01-27",
    "wranglingProcedure": "FIREHOSE data download from TCGA DCC, processed at UCSC into cgData repository",
    "desc": "TCGA lung squamous cell carcinoma (LUSC) thresholded gene-level copy number variation (CNV) estimated using the GISTIC2 method."
}
```


```

{
    "source": "ucsc",
    "type": "mut",
    "collection": "lusc_mut_ucsc_mutationbroadgene",
    "RawDataUrl": "",
    "sampleSize": 408,
    "wrangler": "",
    "wranglingProcedure": "",
    "desc": "The dataset is combined from TCGA lung squamous cell carcinoma and lung adenocarcinoma datasets. TCGA lung cancer (LUNG) somatic mutation data. Red (=1) indicates that a non-silent somatic mutation (nonsense, missense, frame-shif indels, splice site mutations, stop codon readthroughs) was identified in the protein coding region of a gene, or any mutation identified in a non-coding gene. White (=0) indicates that none of the above mutation calls were made in this gene for the specific sample."
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
    "desc": "The dataset is combined from TCGA lung squamous cell carcinoma and lung adenocarcinoma datasets. TCGA lung cancer (LUNG) somatic mutation data. Red (=1) indicates that a non-silent somatic mutation (nonsense, missense, frame-shif indels, splice site mutations, stop codon readthroughs) was identified in the protein coding region of a gene, or any mutation identified in a non-coding gene. White (=0) indicates that none of the above mutation calls were made in this gene for the specific sample."
}
```


## PRAD - Prostate adenocarcinoma

Collection Name | Collection Type | Data Source | Data Type
--------- | ----------- | ----------- | -----------
prad_color_tcga_import | category | tcga | color
prad_patient_tcga_na | clinical | tcga | color
prad_drug_tcga_na | clinical | tcga | color
prad_radiation_tcga_na | clinical | tcga | color
prad_followup-v1p0_tcga_na | clinical | tcga | color
prad_newtumor_tcga_na | clinical | tcga | color
prad_othermalignancy-v4p0_tcga_na | clinical | tcga | color
prad_cnv_ucsc_gistic2thd | molecular | ucsc | cnv
prad_mut_ucsc_mutationbroadgene | molecular | ucsc | mut
prad_mut01_ucsc_mutationbroadgene | molecular | ucsc | mut01
prad_cnv_cbio_gistic | molecular | cBio | cnv
prad_mut_cbio_mut | molecular | cBio | mut
prad_mut01_cbio_mut | molecular | cBio | mut01
prad_methylation_cbio_methylationhm450 | molecular | cBio | methylation
prad_rna_cbio_microarray-agilent | molecular | cBio | rna
prad_protein_cbio_rppa | molecular | cBio | protein

```

{
    "source": "ucsc",
    "type": "cnv",
    "collection": "prad_cnv_ucsc_gistic2thd",
    "RawDataUrl": "http://gdac.broadinstitute.org/runs/analyses__2014_10_17/data/PRAD/20141017/",
    "sampleSize": 492,
    "wrangler": "   cgData TCGAscript CopyNumber_Gistic2 processed on 2015-01-27",
    "wranglingProcedure": "FIREHOSE data download from TCGA DCC, processed at UCSC into cgData repository",
    "desc": "TCGA prostate adenocarcinoma (PRAD) thresholded gene-level copy number variation (CNV) estimated using the GISTIC2 method."
}
```


```

{
    "source": "ucsc",
    "type": "mut",
    "collection": "prad_mut_ucsc_mutationbroadgene",
    "RawDataUrl": " https://tcga-data.nci.nih.gov/tcgafiles/ftp_auth/distro_ftpusers/anonymous/tumor/prad/gsc/broad.mit.edu/illuminaga_dnaseq_automated/mutations/",
    "sampleSize": 425,
    "wrangler": "cgData TCGAscript maf processed on 2015-01-27",
    "wranglingProcedure": "Download .maf file from TCGA DCC, processed into gene by sample matrix at UCSC, stored in the UCSC Xena repository",
    "desc": "TCGA prostate adenocarcinoma (PRAD) somatic mutation data. Sequencing data are generated on a IlluminaGA system. The calls are generated at Broad Institute Genome Sequencing Center using the MutDect method."
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
    "desc": "TCGA prostate adenocarcinoma (PRAD) somatic mutation data. Sequencing data are generated on a IlluminaGA system. The calls are generated at Broad Institute Genome Sequencing Center using the MutDect method."
}
```


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

```

{
    "source": "ucsc",
    "type": "cnv",
    "collection": "paad_cnv_ucsc_gistic2thd",
    "RawDataUrl": "http://gdac.broadinstitute.org/runs/analyses__2014_10_17/data/PAAD/20141017/",
    "sampleSize": 184,
    "wrangler": "cgData TCGAscript CopyNumber_Gistic2 processed on 2015-01-27",
    "wranglingProcedure": "FIREHOSE data download from TCGA DCC, processed at UCSC into cgData repository",
    "desc": "TCGA pancreatic adenocarcinoma (PAAD) thresholded gene-level copy number variation (CNV) estimated using the GISTIC2 method."
}
```


```

{
    "source": "ucsc",
    "type": "mut",
    "collection": "paad_mut_ucsc_mutationbroadgene",
    "RawDataUrl": "https://tcga-data.nci.nih.gov/tcgafiles/ftp_auth/distro_ftpusers/anonymous/tumor/paad/gsc/hgsc.bcm.edu/illuminaga_dnaseq_automated/mutations/",
    "sampleSize": 131,
    "wrangler": "cgData TCGAscript maf processed on 2015-01-27",
    "wranglingProcedure": "Download .maf file from TCGA DCC, processed into gene by sample matrix at UCSC, stored in the UCSC Xena repository",
    "desc": "TCGA pancreatic adenocarcinoma (PAAD) somatic mutation data. Sequencing data are generated on a IlluminaGA system. The calls are generated at Baylor College of Medicine Human Genome Sequencing Center using the Baylor pipeline method. "
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
    "desc": "TCGA pancreatic adenocarcinoma (PAAD) somatic mutation data. Sequencing data are generated on a IlluminaGA system. The calls are generated at Baylor College of Medicine Human Genome Sequencing Center using the Baylor pipeline method. "
}
```


## ACC - Adrenocortical carcinoma

Collection Name | Collection Type | Data Source | Data Type
--------- | ----------- | ----------- | -----------
acc_cnv_ucsc_gistic2thd | molecular | ucsc | cnv

```

{
    "source": "ucsc",
    "type": "cnv",
    "collection": "acc_cnv_ucsc_gistic2thd",
    "RawDataUrl": "http://gdac.broadinstitute.org/runs/analyses__2014_10_17/data/ACC/20141017/",
    "sampleSize": 90,
    "wrangler": "cgData TCGAscript CopyNumber_Gistic2 processed on 2015-01-27",
    "wranglingProcedure": "FIREHOSE data download from TCGA DCC, processed at UCSC into cgData repository",
    "desc": "TCGA adrenocortical carcinoma (ACC) thresholded gene-level copy number variation (CNV) estimated using the GISTIC2 method."
}
```


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

```

{
    "source": "ucsc",
    "type": "cnv",
    "collection": "blca_cnv_ucsc_gistic2thd",
    "RawDataUrl": "http://gdac.broadinstitute.org/runs/analyses__2014_10_17/data/BLCA/20141017/",
    "sampleSize": 408,
    "wrangler": "cgData TCGAscript CopyNumber_Gistic2 processed on 2015-01-27",
    "wranglingProcedure": "FIREHOSE data download from TCGA DCC, processed at UCSC into cgData repository",
    "desc": "TCGA bladder urothelial carcinoma (BLCA) thresholded gene-level copy number variation (CNV) estimated using the GISTIC2 method."
}
```


```

{
    "source": "ucsc",
    "type": "mut",
    "collection": "blca_mut_ucsc_mutationbroadgene",
    "RawDataUrl": " https://tcga-data.nci.nih.gov/tcgafiles/ftp_auth/distro_ftpusers/anonymous/tumor/blca/gsc/broad.mit.edu/illuminaga_dnaseq_automated/mutations/",
    "sampleSize": 238,
    "wrangler": "cgData TCGAscript maf processed on 2015-01-27",
    "wranglingProcedure": "Download .maf file from TCGA DCC, processed into gene by sample matrix at UCSC, stored in the UCSC Xena repository",
    "desc": "TCGA bladder urothelial carcinoma (BLCA) somatic mutation data. Sequencing data are generated on a IlluminaGA system. The calls are generated at Broad Institute Genome Sequencing Center using the MutDect method. "
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
    "desc": "TCGA bladder urothelial carcinoma (BLCA) somatic mutation data. Sequencing data are generated on a IlluminaGA system. The calls are generated at Broad Institute Genome Sequencing Center using the MutDect method. "
}
```


## CESC - Cervical squamous cell carcinoma and endocervical adenocarcinoma

Collection Name | Collection Type | Data Source | Data Type
--------- | ----------- | ----------- | -----------
cesc_cnv_ucsc_gistic2thd | molecular | ucsc | cnv

```

{
    "source": "ucsc",
    "type": "cnv",
    "collection": "cesc_cnv_ucsc_gistic2thd",
    "RawDataUrl": "http://gdac.broadinstitute.org/runs/analyses__2014_10_17/data/CESC/20141017/",
    "sampleSize": 295,
    "wrangler": "cgData TCGAscript CopyNumber_Gistic2 processed on 2015-01-27",
    "wranglingProcedure": "FIREHOSE data download from TCGA DCC, processed at UCSC into cgData repository",
    "desc": "TCGA cervical squamous cell carcinoma and endocervical adenocarcinoma (CESC) thresholded gene-level copy number variation (CNV) estimated using the GISTIC2 method."
}
```


## CHOL - Cholangiocarcinoma

Collection Name | Collection Type | Data Source | Data Type
--------- | ----------- | ----------- | -----------
chol_cnv_ucsc_gistic2thd | molecular | ucsc | cnv

```

{
    "source": "ucsc",
    "type": "cnv",
    "collection": "chol_cnv_ucsc_gistic2thd",
    "RawDataUrl": " http://gdac.broadinstitute.org/runs/analyses__2014_10_17/data/CHOL/20141017/",
    "sampleSize": 36,
    "wrangler": "cgData TCGAscript CopyNumber_Gistic2 processed on 2015-01-27",
    "wranglingProcedure": "FIREHOSE data download from TCGA DCC, processed at UCSC into cgData repository",
    "desc": "TCGA cholangiocarcinoma (CHOL) thresholded gene-level copy number variation (CNV) estimated using the GISTIC2 method."
}
```


## DLBC - Lymphoid Neoplasm Diffuse Large B-cell Lymphoma

Collection Name | Collection Type | Data Source | Data Type
--------- | ----------- | ----------- | -----------
dlbc_cnv_ucsc_gistic2thd | molecular | ucsc | cnv

```

{
    "source": "ucsc",
    "type": "cnv",
    "collection": "dlbc_cnv_ucsc_gistic2thd",
    "RawDataUrl": "http://gdac.broadinstitute.org/runs/analyses__2014_10_17/data/DLBC/20141017/",
    "sampleSize": 48,
    "wrangler": "cgData TCGAscript CopyNumber_Gistic2 processed on 2015-01-27",
    "wranglingProcedure": "FIREHOSE data download from TCGA DCC, processed at UCSC into cgData repository",
    "desc": "TCGA lymphoid neoplasm diffuse large B-cell lymphoma (DLBC) thresholded gene-level copy number variation (CNV) estimated using the GISTIC2 method."
}
```


## LAML - Acute Myeloid Leukemia

Collection Name | Collection Type | Data Source | Data Type
--------- | ----------- | ----------- | -----------
laml_patient_tcga_na | clinical | TCGA | 
laml_cnv_ucsc_gistic2thd | molecular | ucsc | cnv
laml_mut_ucsc_mutation | molecular | ucsc | mut
laml_mut01_ucsc_mutation | molecular | ucsc | mut01

```

{
    "source": "ucsc",
    "type": "cnv",
    "collection": "laml_cnv_ucsc_gistic2thd",
    "RawDataUrl": "http://gdac.broadinstitute.org/runs/analyses__2014_10_17/data/LAML/20141017/",
    "sampleSize": 191,
    "wrangler": "cgData TCGAscript CopyNumber_Gistic2 processed on 2015-01-27",
    "wranglingProcedure": "FIREHOSE data download from TCGA DCC, processed at UCSC into cgData repository",
    "desc": "TCGA acute myeloid leukemia (LAML) thresholded gene-level copy number variation (CNV) estimated using the GISTIC2 method."
}
```


```

{
    "source": "ucsc",
    "type": "mut",
    "collection": "laml_mut_ucsc_mutation",
    "RawDataUrl": "https://www.synapse.org/#!Synapse:syn1729383",
    "sampleSize": 196,
    "wrangler": "cgData TCGAscript mutationMatrix processed on 2015-01-28",
    "wranglingProcedure": "TCGA PANCAN strictly filtered maf files (file names: *_cleaned_filtered.maf) download from Synapse, processed into gene by sample matrix at UCSC into cgData repository",
    "desc": "TCGA acute myeloid leukemia (LAML) somatic mutation data. Red (=1) indicates that a non-silent somatic mutation (nonsense, missense, frame-shif indels, splice site mutations, stop codon readthroughs) was identified in the protein coding region of a gene, or any mutation identified in a non-coding gene. White (=0) indicates that none of the above mutation calls were made in this gene for the specific sample."
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
    "desc": "TCGA acute myeloid leukemia (LAML) somatic mutation data. Red (=1) indicates that a non-silent somatic mutation (nonsense, missense, frame-shif indels, splice site mutations, stop codon readthroughs) was identified in the protein coding region of a gene, or any mutation identified in a non-coding gene. White (=0) indicates that none of the above mutation calls were made in this gene for the specific sample."
}
```


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

```

{
    "source": "ucsc",
    "type": "cnv",
    "collection": "sarc_cnv_ucsc_gistic2thd",
    "RawDataUrl": " http://gdac.broadinstitute.org/runs/analyses__2014_10_17/data/SARC/20141017/",
    "sampleSize": 257,
    "wrangler": "   cgData TCGAscript CopyNumber_Gistic2 processed on 2015-01-27",
    "wranglingProcedure": "FIREHOSE data download from TCGA DCC, processed at UCSC into cgData repository",
    "desc": "TCGA sarcoma (SARC) thresholded gene-level copy number variation (CNV) estimated using the GISTIC2 method."
}
```


## STAD - Stomach adenocarcinoma

Collection Name | Collection Type | Data Source | Data Type
--------- | ----------- | ----------- | -----------
stad_mut_ucsc_mutationbcmgene | molecular | ucsc | mut
stad_mut01_ucsc_mutationbcmgene | molecular | ucsc | mut01

```

{
    "source": "ucsc",
    "type": "mut",
    "collection": "stad_mut_ucsc_mutationbcmgene",
    "RawDataUrl": " https://tcga-data.nci.nih.gov/tcgafiles/ftp_auth/distro_ftpusers/anonymous/tumor/stad/gsc/hgsc.bcm.edu/illuminaga_dnaseq_automated/mutations/",
    "sampleSize": 379,
    "wrangler": "cgData TCGAscript maf processed on 2015-01-27",
    "wranglingProcedure": "Download .maf file from TCGA DCC, processed into gene by sample matrix at UCSC, stored in the UCSC Xena repository",
    "desc": "TCGA stomach adenocarcinoma (STAD) somatic mutation data. Sequencing data are generated on a IlluminaGA system. The calls are generated at Baylor College of Medicine Human Genome Sequencing Center using the Baylor pipeline method. "
}
```


```

{
    "source": "ucsc",
    "type": "mut01",
    "collection": "stad_mut01_ucsc_mutationbcmgene",
    "RawDataUrl": " https://tcga-data.nci.nih.gov/tcgafiles/ftp_auth/distro_ftpusers/anonymous/tumor/stad/gsc/hgsc.bcm.edu/illuminaga_dnaseq_automated/mutations/",
    "sampleSize": 379,
    "wrangler": "cgData TCGAscript maf processed on 2015-01-27",
    "wranglingProcedure": "Download .maf file from TCGA DCC, processed into gene by sample matrix at UCSC, stored in the UCSC Xena repository",
    "desc": "TCGA stomach adenocarcinoma (STAD) somatic mutation data. Sequencing data are generated on a IlluminaGA system. The calls are generated at Baylor College of Medicine Human Genome Sequencing Center using the Baylor pipeline method. "
}
```


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
brain_color_tcga_import | category | tcga | color
brain_patient_tcga_clinical | clinical | tcga | color
brain_followup-v1p0_tcga_clinical | clinical | tcga | color
brain_drug_tcga_clinical | clinical | tcga | color
brain_newtumor_tcga_clinical | clinical | tcga | color
brain_othermalignancy-v4p0_tcga_clinical | clinical | tcga | color
brain_events_tcga_clinical | clinical | tcga | color
brain_cnv_ucsc_gistic | molecular | ucsc | cnv
brain_mut01_ucsc_import | molecular | ucsc | mut01
brain_cnv_cbio_gistic | molecular | cBio | cnv
brain_mut_cbio_wxs | molecular | cBio | mut
brain_mut01_cbio_import | molecular | cBio | mut01
brain_methylation_cbio_hm27 | molecular | cBio | methylation
brain_rna_cbio_rnaseq-bc | molecular | cBio | rna
brain_protein_cbio_rppa-zscore | molecular | cBio | protein

```

{
    "source": "ucsc",
    "type": "cnv",
    "collection": "brain_cnv_ucsc_gistic",
    "RawDataUrl": "",
    "sampleSize": 1090,
    "wrangler": "",
    "wranglingProcedure": "",
    "desc": ""
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
    "desc": ""
}
```

