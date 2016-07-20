---
title: API Reference

language_tabs:
  - shell
  - R
  - python
  - javascript

toc_footers:
  - <a href='#'>Sign Up for a Developer Key</a>
  - <a href='https://github.com/tripit/slate'>Documentation Powered by Slate</a>

includes:
  - errors

search: true
---

# Introduction

[Oncoscape](https://oncoscape.sttrcancer.org/#/) is a web application that hosts an integrated suite of analysis tools for users to explore hypotheses related to molecular and clinical data in order to better understand cancer biology and treatment options. Oncoscape is as an SPA -- a single page web application -- using JavaScript in the browser and R (primarily) on the backend server for statistical calculations. For more detailed information, please read [wiki](https://github.com/FredHutch/Oncoscape).

# Authentication

> To authorize, use this code:

```R
require 'kittn'

api = Kittn::APIClient.authorize!('meowmeowmeow')
```

```python
import kittn

api = kittn.authorize('meowmeowmeow')
```

```shell
# With shell, you can just pass the correct header with each request
curl "api_endpoint_here"
  -H "Authorization: meowmeowmeow"
```

```javascript
const kittn = require('kittn');

let api = kittn.authorize('meowmeowmeow');
```

> Make sure to replace `meowmeowmeow` with your API key.

Kittn uses API keys to allow access to the API. You can register a new Kittn API key at our [developer portal](http://example.com/developers).

Kittn expects for the API key to be included in all API requests to the server in a header that looks like the following:

`Authorization: meowmeowmeow`

<aside class="notice">
You must replace <code>meowmeowmeow</code> with your personal API key.
</aside>

# Rest API Queries

## Database Connection

```shell
cd <mongodb installation dir>
./bin/mongo
db
use oncoscape
db.getCollection("clinical_tcga_gbm_pt")

```

```R
install.packages("rmongodb")
library(devtools)
install_github(repo = "mongosoup/rmongodb")
library(rmongodb)
help("mongo.create")
mongo <- mongo.create()
```

```python
import pymongo
mongod
from pymongo import MongoClient
client = MongoClient('localhost', 27017)
db = client.oncoscape
```

```javascript
// Retrieve
var MongoClient = require('mongodb').MongoClient;

// Connect to the db
MongoClient.connect("mongodb://localhost:27017/oncoscape", function(err, db) {
  if(err) { return console.dir(err); }

  db.collection('test', function(err, collection) {});

  db.collection('test', {w:1}, function(err, collection) {});

  db.createCollection('test', function(err, collection) {});

  db.createCollection('test', {w:1}, function(err, collection) {});

});
```

> The above command returns JSON structured like this:

```json
[
  {
    "id": 1,
    "name": "Fluffums",
    "breed": "calico",
    "fluffiness": 6,
    "cuteness": 7
  },
  {
    "id": 2,
    "name": "Max",
    "breed": "unknown",
    "fluffiness": 5,
    "cuteness": 10
  }
]
```

This endpoint retrieves all kittens.

### HTTP Request

`GET http://example.com/api/kittens`

### Query Parameters

Parameter | Default | Description
--------- | ------- | -----------
include_cats | false | If set to true, the result will also include cats.
available | true | If set to false, the result will include kittens that have already been adopted.

<aside class="success">
Now you are connected to Oncoscape Mongo Database through Restful API
</aside>

## Disease Types

#### Source 

`https://tcga-data.nci.nih.gov/docs/publications/tcga/`

Disease | Code
------------ | -----------
Acute Myeloid Leukemia |LAML    
Adrenocortical carcinoma |ACC
Bladder Urothelial Carcinoma |BLCA  
Brain Lower Grade Glioma |LGG   
Breast invasive carcinoma |BRCA
Cervical squamous cell carcinoma and endocervical adenocarcinoma |CESC  
Cholangiocarcinoma |CHOL
Colon adenocarcinoma |COAD  
Esophageal carcinoma |ESCA  
Glioblastoma multiforme |GBM    
Head and Neck squamous cell carcinoma |HNSC 
Kidney Chromophobe |KICH
Kidney renal clear cell carcinoma |KIRC 
Kidney renal papillary cell carcinoma |KIRP 
Liver hepatocellular carcinoma |LIHC    
Lung adenocarcinoma |LUAD   
Lung squamous cell carcinoma |LUSC  
Lymphoid Neoplasm Diffuse Large B-cell Lymphoma |DLBC
Mesothelioma |MESO
Ovarian serous cystadenocarcinoma |OV   
Pancreatic adenocarcinoma |PAAD 
Pheochromocytoma and Paraganglioma |PCPG    
Prostate adenocarcinoma |PRAD   
Rectum adenocarcinoma |READ 
Sarcoma |SARC   
Skin Cutaneous Melanoma |SKCM   
Stomach adenocarcinoma |STAD    
Testicular Germ Cell Tumors |TGCT   
Thymoma |THYM   
Thyroid carcinoma |THCA 
Uterine Carcinosarcoma |UCS
Uterine Corpus Endometrial Carcinoma |UCEC  
Uveal Melanoma |UVM

```shell
db.getCollection('lookup_oncoscape_datasources').find({})
```

## Collections for Each Disease Type 

Disease | Collection_Type | Collection_Name
--------- | ------- | -----------
gbm|drug | clinical_tcga_acc_drug
gbm|f1 | clinical_tcga_acc_f1
gbm|nte | clinical_tcga_acc_nte
gbm|nte_f1 | clinical_tcga_acc_nte_f1
gbm|omf | clinical_tcga_acc_omf
gbm|pt | clinical_tcga_acc_pt
gbm|rad | clinical_tcga_acc_rad

`localhost:80/api/lookup_oncoscape_datasources`

> The above command returns JSON structured like this:

```json
{
    "_id" : ObjectId("5776eeea171709ceb0555fc6"),
    "disease" : "acc",
    "collections" : {
        "drug" : "clinical_tcga_acc_drug",
        "f1" : "clinical_tcga_acc_f1",
        "nte" : "clinical_tcga_acc_nte",
        "nte_f1" : "clinical_tcga_acc_nte_f1",
        "omf" : "clinical_tcga_acc_omf",
        "pt" : "clinical_tcga_acc_pt",
        "rad" : "clinical_tcga_acc_rad"
    }
}
{
    "_id" : ObjectId("5776eeea171709ceb0555fc7"),
    "disease" : "blca",
    "collections" : {
        "drug" : "clinical_tcga_blca_drug",
        "f1" : "clinical_tcga_blca_f1",
        "f2" : "clinical_tcga_blca_f2",
        "nte" : "clinical_tcga_blca_nte",
        "nte_f1" : "clinical_tcga_blca_nte_f1",
        "omf" : "clinical_tcga_blca_omf",
        "pt" : "clinical_tcga_blca_pt",
        "rad" : "clinical_tcga_blca_rad"
    }
}
```


## How to query? 

![Oncoscape_API_explorer](/images/oncoscape_explore_home.png)

### HTTP Request:

`http://localhost:80/api/clinical_tcga_gbm_drug/?q={"$fields":["gender:Male","race:Asian"]}`

### count: 

`localhost:80/api/clinical_tcga_gbm_pt?count`

### $field

`http://localhost:80/api/clinical_tcga_gbm_drug/?q={"$fields":["patient_ID","race","gender"]}`

### $limit

`http://localhost:80/api/clinical_tcga_gbm_drug/?q={"$limit":10}`

### $skip

`http://localhost:80/api/clinical_tcga_gbm_drug/?q={"$skip":20}`

### combine

`http://localhost:80/api/clinical_tcga_gbm_drug/?q={"gender":"Male", "race":"Asian","$fields":["patient_ID","race","gender"],"$limit":10,"$skip":20}`


# Clinical Data

## Common Clinical Collections in each disease type

Parameter | Description
--------- | -----------
clinical_tcga_gbm_pt | collection of TCGA Glioblastoma (GBM) patients 
clinical_tcga_gbm_drug | collection of chemo drug administered on each patient
clinical_tcga_gbm_rad | collection of radiation administered on each patient
clinical_tcga_gbm_omf | other malignant form 
clinical_tcga_gbm_nte | new tumor event
tcg_gbm_f1 | the first follow up table
tcg_gbm_nte_f1 | new tumor events follow up table

## common fields

## 


# Molecular Data

## Copy Number Variation

## Mutation Data

## Methylation Data

## Expression Data

