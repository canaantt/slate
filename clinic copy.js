const _=require("underscore"),mongoose=require("mongoose");var format={h1:function(o){console.log(),console.log("# "+o)},h2:function(o){console.log(),console.log("## "+o)},h3:function(o){console.log(),console.log("### "+o)},h4:function(o){console.log(),console.log("#### "+o)},text:function(o){console.log(o)},url:function(o){console.log(),console.log("`"+o+"`"),console.log()},codeStart:function(){console.log(),console.log("```")},codeComment:function(o){console.log(),console.log(">"+o)},codeStop:function(){console.log(),console.log("```")},code:function(o){console.log('"'+o+'"')},jsonfy:function(o){console.log("{"+o+"}")},codeRStart:function(o){console.log("```r"),console.log(o)},codeMongoStart:function(o){console.log("```mongo"),console.log(o)},codeJSStart:function(o){console.log("```javascript"),console.log(o)},codePyStart:function(o){console.log("```python"),console.log(o)}},disease_code={LAML:"Acute Myeloid Leukemia",ACC:"Adrenocortical carcinoma",BLCA:"Bladder Urothelial Carcinoma",LGG:"Brain Lower Grade Glioma",BRCA:"Breast invasive carcinoma",CESC:"Cervical squamous cell carcinoma and endocervical adenocarcinoma",CHOL:"Cholangiocarcinoma","COAD ":"Colon adenocarcinoma",ESCA:"Esophageal carcinoma",GBM:"Glioblastoma multiforme",HNSC:"Head and Neck squamous cell carcinoma",KICH:"Kidney Chromophobe",KIRC:"Kidney renal clear cell carcinoma",KIRP:"Kidney renal papillary cell carcinoma",LICH:"Liver hepatocellular carcinoma",LUAD:"Lung adenocarcinoma",LUSC:"Lung squamous cell carcinoma",DLBC:"Lymphoid Neoplasm Diffuse Large B-cell Lymphoma",MESO:"Mesothelioma",OV:"Ovarian serous cystadenocarcinoma",PAAD:"Pancreatic adenocarcinoma",PCPG:"Pheochromocytoma and Paraganglioma",PRAD:"Prostate adenocarcinoma",READ:"Rectum adenocarcinoma",SARC:"Sarcoma",SKCM:"Skin Cutaneous Melanoma",STAD:"Stomach adenocarcinoma",TGCT:"Testicular Germ Cell Tumors",THYM:"Thymoma",THCA:"Thyroid carcinoma",UCS:"Uterine Carcinosarcoma",UCEC:"Uterine Corpus Endometrial Carcinoma",UVM:"Uveal Melanoma"};format.h2("Mongo DB Connection"),format.codeJSStart('const mongoose = require("mongoose");'),format.code('mongoose.connect("mongodb://oncoscape-dev-db1.sttrcancer.io:27017,oncoscape-dev-db2.sttrcancer.io:27017,oncoscape-dev-db3.sttrcancer.io:27017/pancan12?authSource=admin",{user: "oncoscapeRead",pass: "i1f4d9botHD4xnZ"});'),format.code("var connection = mongoose.connection;"),format.code("var db = connection.db;"),format.codeStop(),format.h2("Clinical Collections by Disease"),mongoose.connect("mongodb://oncoscape-dev-db1.sttrcancer.io:27017,oncoscape-dev-db2.sttrcancer.io:27017,oncoscape-dev-db3.sttrcancer.io:27017/pancan12?authSource=admin",{db:{native_parser:!0},server:{poolSize:5,reconnectTries:Number.MAX_VALUE},replset:{rs_name:"rs0"},user:"oncoscapeRead",pass:"i1f4d9botHD4xnZ"});var connection=mongoose.connection;connection.once("open",function(){var o=connection.db;collection=o.collection("lookup_oncoscape_datasources"),collection.find().toArray(function(e,c){e&&console.dir(e),c.forEach(function(o){format.h3(o.disease),format.text(disease_code[o.disease.toUpperCase()]),format.codeComment("List of collections"),format.codeStart(),format.text(JSON.stringify(o.collections,null,4)),format.codeStop()}),collection=o.collection("clinical_tcga_acc_pt"),collection.find().toArray(function(e,c){var t=0,a=0,n=0;c.forEach(function(o){o.length>a&&(a=o.length,t=n),n+=1}),format.h3("List of fields that most records have"),format.codeComment("Fields for most of records in clinical_tcga_acc_pt"),format.codeStart(),format.text(Object.keys(c[t])),format.codeStop(),format.h3("Get the count of records in the collection"),format.h4("HTTP Request"),format.url("GET http://oncoscape.sttrcancer.io/api/clinical_tcga_acc_pt/count"),format.codeComment("Count of records in clinical_tcga_acc_pt"),format.codeStart(),format.text(c.length),format.codeStop(),format.h3("Query detail information from collection clinical_tcga_acc_pt"),collection=o.collection("clinical_tcga_acc_pt");var r='{"gender":"MALE", "race":"WHITE","$fields":["gender","race","patient_ID"],"$skip":5,"$limit":2}';collection.find({gender:"MALE",race:"WHITE"},{patient_ID:!0,gender:!0,race:!0,histologic_diagnosis:!0}).limit(2).skip(5).toArray(function(o,e){format.text("Filter by gender and race and only show the selected fields"),format.h4("HTTP Request"),format.url("GET http://oncoscape.sttrcancer.io/api/clinical_tcga_acc_pt/?q="+r),format.text("only show gender, race and patient_ID"),format.url('"$fields":["gender","race","patient_ID"]'),format.text("skip the first five records"),format.url('"$skip":5'),format.text("limit the final output to two records."),format.url('"$limit":2'),format.codeComment("Male White patients result: "),format.codeStart(),format.text(JSON.stringify(e,null,4)),format.codeStop(),format.codeComment("Count of the records meet this criteria"),format.codeStart(),format.text(e.length),format.codeStop(),format.codeJSStart('collection = db.collection("clinical_tcga_acc_pt");'),format.code('collection.find({"gender":"MALE", "race":"WHITE"},{"patient_ID":true, "gender":true, "race":true, "histologic_diagnosis":true}).limit(2).skip(5).toArray(function(err, doc){);console.log(JSON.stringify(doc, null, 4));'),format.codeStop(),format.codeMongoStart('db.getCollection("clinical_tcga_acc_pt").find({"gender":"MALE", "race":"WHITE"},{"patient_ID":true, "gender":true, "race":true, "histologic_diagnosis":true}).skip(5).limit(2)'),format.codeStop(),format.codeRStart('install.packages("rmongodb")'),format.code("library(rmongodb)"),format.codeStop(),format.codePyStart("pip install pymongo"),format.code("from pymongo import MongoClient"),format.code('client = MongoClient("mongodb://oncoscape-dev-db1.sttrcancer.io:27017,oncoscape-dev-db2.sttrcancer.io:27017,oncoscape-dev-db3.sttrcancer.io:27017/pancan12?authSource=admin")'),format.code("db = client.os"),format.code('db["clinical_tcga_acc_pt"]'),format.codeStop(),process.exit(0)})})})});