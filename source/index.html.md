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

## Connect to Oncoscape Mongo Database?

```R
install.packages("rmongodb")

library(devtools)
install_github(repo = "mongosoup/rmongodb")

library(rmongodb)

help("mongo.create")
mongo <- mongo.create()
mongo
```

```python
import kittn

api = kittn.authorize('meowmeowmeow')
api.kittens.get()
```

```shell
curl "http://example.com/api/kittens"
  -H "Authorization: meowmeowmeow"
```

```javascript
const kittn = require('kittn');

let api = kittn.authorize('meowmeowmeow');
let kittens = api.kittens.get();
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

## Database Collections

### HTTP Request: 

`localhost:3000/api/_collections`

> The above command returns JSON structured like this:

```json
[ 
  {
            "name" : "brca",
            "tables" : [ 
                {
                    "created" : ISODate("2016-06-01T18:19:36.214Z"),
                    "name" : "drug",
                    "records" : 2406,
                    "collection" : "tcga_brca_drug"
                }, 
                {
                    "created" : ISODate("2016-06-01T18:19:36.215Z"),
                    "name" : "f1",
                    "records" : 114,
                    "collection" : "tcga_brca_f1"
                }, 
                {
                    "created" : ISODate("2016-06-01T18:19:36.215Z"),
                    "name" : "f2",
                    "records" : 523,
                    "collection" : "tcga_brca_f2"
                }, 
                {
                    "created" : ISODate("2016-06-01T18:19:36.216Z"),
                    "name" : "f3",
                    "records" : 716,
                    "collection" : "tcga_brca_f3"
                }, 
                {
                    "created" : ISODate("2016-06-01T18:19:36.217Z"),
                    "name" : "nte",
                    "records" : 119,
                    "collection" : "tcga_brca_nte"
                }, 
                {
                    "created" : ISODate("2016-06-01T18:19:36.219Z"),
                    "name" : "nte",
                    "records" : 82,
                    "collection" : "tcga_brca_nte_f1"
                }, 
                {
                    "created" : ISODate("2016-06-01T18:19:36.219Z"),
                    "name" : "omf",
                    "records" : 82,
                    "collection" : "tcga_brca_omf"
                }, 
                {
                    "created" : ISODate("2016-06-01T18:19:36.220Z"),
                    "name" : "pt",
                    "records" : 1097,
                    "collection" : "tcga_brca_pt"
                }, 
                {
                    "created" : ISODate("2016-06-01T18:19:36.221Z"),
                    "name" : "rad",
                    "records" : 618,
                    "collection" : "tcga_brca_rad"
                }
            ]
        }
    ] 
```

### Disease Types
Disease Code | Description
------------ | -----------
BRCA | Breast Invasive Carcinoma
GBM | Glioblastoma Multiforme
OV | Ovarian Serous Cystadenocarcinoma 
LUAD | Lung Adenocarcinoma
UCEC | Uterine Corpus Endometrial Carcinoma 
KIRC | Kidney Renal Clear Cell Carcinoma  
HNSC | Head and Neck Squamous Cell Carcinoma  
LGG | Brain Lower Grade Glioma  
THCA | Thyroid Carcinoma  

## How to query? 

### HTTP Request:

`http://localhost:3000/api/tcga_gbm_drug/?q={"$fields":["gender:Male","race:Asian"]}`

### count: 

`localhost:3000/api/tcga_gbm_pt?count`

### $field

`http://localhost:3000/api/tcga_gbm_drug/?q={"$fields":["patient_ID","race","gender"]}`

### $limit

`http://localhost:3000/api/tcga_gbm_drug/?q={"$limit":10}`

### $skip

`http://localhost:3000/api/tcga_gbm_drug/?q={"$skip":20}`

### combine

`http://localhost:3000/api/tcga_gbm_drug/?q={"gender":"Male", "race":"Asian","$fields":["patient_ID","race","gender"],"$limit":10,"$skip":20}`


# Clinical Data

## Common Clinical Collections in each disease type

Parameter | Description
--------- | -----------
tcga_gbm_pt | collection of TCGA Glioblastoma (GBM) patients 
tcga_gbm_drug | collection of chemo drug administered on each patient
tcga_gbm_rad | collection of radiation administered on each patient
tcga_gbm_omf | other malignant form 
tcga_gbm_nte | new tumor event
tcg_gbm_f1 | the first follow up table
tcg_gbm_nte_f1 | new tumor events follow up table

## common fields

## 


# Molecular Data

## Copy Number Variation

## Mutation Data

## Methylation Data

## Expression Data

