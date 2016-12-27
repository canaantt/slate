
# Data Access

Oncoscape provides the API service based on the traditional RESTful API data structure. Data are secured with exposed by API Gateway Kong.. The privacy is managed at collection level. You can acess the public datasets through appending 'apikey=password'.

## Example to access one collection from browser


**HTTP Request**

Collections are accessable at the host: http://dev.oncoscape.sttrcancer.io/api/

The endpoint of oncoscape API is a unique URL. Every endpoint points to a unique collection.
Below lists more details of the organization of the Oncoscape Mongo Database and the collections organized by disease type.

`GET http://dev.oncoscape.sttrcancer.io/api/gbm_patient_tcga_clinical/?q=&apikey=password`


## Query Collection from Browser


**HTTP Request**

Filter by gender and race and only show the selected fields

`GET http://dev.oncoscape.sttrcancer.io/api/gbm_patient_tcga_clinical/?q={"gender":"MALE", "race":"WHITE","$fields":["gender","race","patient_ID"],"$skip":5,"$limit":2}&apikey=password`


only show gender, race and patient_ID

`"$fields":["gender","race","patient_ID"]`


skip the first five records

`"$skip":5`


limit the final output to two records.

`"$limit":2`


## Explore the Oncoscape Database


**<a target='_blank' href='http://resources.sttrcancer.org/api/data-explorer/'>Data Explorer</a>**
