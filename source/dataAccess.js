var helper = require("./testingHelper.js");

/* REST API Query on gbm_patient_tcga_clinical */
helper.format.h1("Data Access");
helper.format.text("Oncoscape provides the API service based on the traditional RESTful API data structure. Data are secured with exposed by API Gateway Kong.. The privacy is managed at collection level. You can acess the public datasets through appending 'apikey=password'.");
helper.format.h2("Example to access one collection from browser");
helper.format.textbold("HTTP Request");
helper.format.text("Collections are accessable at the host: http://dev.oncoscape.sttrcancer.io/api/");
helper.format.text("The endpoint of oncoscape API is a unique URL. Every endpoint points to a unique collection.");
helper.format.table("Below lists more details of the organization of the Oncoscape Mongo Database and the collections organized by disease type.");
helper.format.url("GET http://dev.oncoscape.sttrcancer.io/api/gbm_patient_tcga_clinical/?q=&apikey=password");
helper.format.h2("Query Collection from Browser");
helper.format.textbold("HTTP Request");
var query = '{"gender":"MALE", "race":"WHITE","$fields":["gender","race","patient_ID"],"$skip":5,"$limit":2}'; 
helper.format.text("Filter by gender and race and only show the selected fields");
helper.format.url("GET http://dev.oncoscape.sttrcancer.io/api/gbm_patient_tcga_clinical/?q=" + query + "&apikey=password");
helper.format.text("only show gender, race and patient_ID");
helper.format.url('"$fields":["gender","race","patient_ID"]');
helper.format.text("skip the first five records");
helper.format.url('"$skip":5');
helper.format.text("limit the final output to two records.");
helper.format.url('"$limit":2');
helper.format.h2("Explore the Oncoscape Database");
helper.format.textbold("<a target='_blank' href='http://resources.sttrcancer.org/api/data-explorer/'>Data Explorer</a> is an interactive web application to explore the clinical collections in the database.");
  

