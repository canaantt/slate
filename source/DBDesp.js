var comongo = require('co-mongodb');
var co = require('co');
var disease_tables = [];
var db, collection, db_collections, collection_name, count, manifest, manifest_arr, lookup, lookup_arr;
var format = {
	h1: function(text) { console.log(); console.log('# '+text); },
	h2: function(text) { console.log(); console.log('## '+text); },
	h3: function(text) { console.log(); console.log('### '+text); },
	h4: function(text) { console.log(); console.log('#### '+text); },
	textbold: function(text) { console.log(); console.log(); console.log('**'+ text+'**'); },
	textlist: function(text){ console.log(); console.log('- '+ text);  },
	textsublist: function(text){ console.log('  * '+ text);  },
	text: function(text){ console.log(); console.log(text);  },
	url: function(text) {console.log(); console.log('`' + text + '`'); console.log();},
	codeStart: function() { console.log(); console.log('```'); },
	codeComment: function(text) {console.log(); console.log('> ' + text); console.log(); },
	codeStop: function() {console.log('```');  console.log(); },
	code: function(text) { console.log('"'+ text + '"'); },
	jsonfy: function(text) { console.log('{' + text + '}');},
	codeRStart: function(text) {  console.log(); console.log("```r");},
	codeMongoStart: function(text) {  console.log(); console.log("```shell"); },
	codeJSStart: function(text) {  console.log(); console.log("```javascript"); },
	codePyStart: function(text) {  console.log(); console.log("```python"); },
	codeJSONStart: function(text) {  console.log(); console.log("```json"); },
	table: function(text){ console.log(text);  }
};

Array.prototype.unique = function() {
      var arr = [];
      for(var i = 0; i < this.length; i++) {
          if(arr.indexOf(this[i]) == -1) {
              arr.push(this[i]);
          }
      }
      return arr; 
  };

var onerror = function(e){
    console.log(e);
  };


co(function *() {

	db = yield comongo.client.connect('mongodb://oncoscapeRead:i1f4d9botHD4xnZ@oncoscape-dev-db1.sttrcancer.io:27017,oncoscape-dev-db2.sttrcancer.io:27017,oncoscape-dev-db3.sttrcancer.io:27017/tcga?authSource=admin&replicaSet=rs0');

	/* REST API Query on gbm_patient_tcga_clinical */
	manifest = yield comongo.db.collection(db, 'manifest_9-16-16');
	manifest_arr = yield manifest.find({}).toArray();
	//console.log(manifest_arr.length);

	lookup = yield comongo.db.collection(db, 'lookup_oncoscape_datasources');
	lookup_arr = yield lookup.find({}).toArray();
	var manifest_keys = Object.keys(manifest_arr[0]);
	var manifest_length = manifest_arr.length;
	// for(var i=1; i<manifest_length; i++){
	// 	//console.log(i);
	// 	manifest_keys.concat(Object.keys(manifest_arr[i]));
	// }
	// var manifest_keys_unique = manifest_keys.unique();  
	var manifest_elem = {};
	manifest_elem.dataset = [];
	manifest_elem.dataType = [];
	manifest_elem.date = [];
	manifest_elem.source = [];
	manifest_elem.process = [];
	manifest_elem.processName = [];
	manifest_elem.parent = [];
	for(i=0; i<manifest_length; i++){
		//console.log(i);
		manifest_elem.dataset.push(manifest_arr[i].dataset);
		manifest_elem.dataType.push(manifest_arr[i].dataType);
		manifest_elem.date.push(manifest_arr[i].date);
		manifest_elem.source.push(manifest_arr[i].source);
		manifest_elem.processName.push(manifest_arr[i].processName);
		//manifest_elem.parent.push(manifest_arr[i].parent);
	}
	manifest_elem.dataset = manifest_elem.dataset.unique();
	manifest_elem.dataType = manifest_elem.dataType.unique();
	manifest_elem.date = manifest_elem.date.unique();
	manifest_elem.source = manifest_elem.source.unique();
	manifest_elem.processName = manifest_elem.processName.unique();

	var lookup_keys = Object.keys(lookup_arr[0]);
	var lookup_length = lookup_arr.length;
	// for(var j=0;j<lookup_length;j++){
	// 	//console.log(j);
	// 	lookup_keys.concat(Object.keys(lookup_arr[j]));
	// }
	// var lookup_keys_unique = lookup_keys.unique();
	var lookup_elem = {};
	lookup_elem.disease = [];
	lookup_elem.source = [];
	lookup_elem.beta = [];
	lookup_elem.name = [];
	lookup_elem.img = [];
	lookup_elem.clinical = [];
	lookup_elem.category = {};
	lookup_elem.category.source = [];
	lookup_elem.category.type = [];
	lookup_elem.category.collection = [];

	lookup_elem.molecular = {};
	lookup_elem.molecular.source = [];
	lookup_elem.molecular.type = [];
	lookup_elem.calculated = {};
	lookup_elem.calculated.source = [];
	lookup_elem.calculated.type = [];
	lookup_elem.edges = {};
	lookup_elem.edges.name = [];
	lookup_elem.edges.source = [];
	lookup_elem.edges.edges = [];
	lookup_elem.edges.patientWeights = [];
	lookup_elem.edges.genesWeights = [];

	for(var j=0;j<lookup_length;j++){
		//console.log(j);
		lookup_elem.disease.push(lookup_arr[j].disease);
		lookup_elem.source.push(lookup_arr[j].source);
		lookup_elem.beta.push(lookup_arr[j].beta);
		lookup_elem.name.push(lookup_arr[j].name);
		lookup_elem.img.push(lookup_arr[j].img);
		if("category" in lookup_arr[j]){
			lookup_arr[j].category.forEach(function(cat){
				lookup_elem.category.source.push(cat.source);
				lookup_elem.category.type.push(cat.type);
			})
		}
		if("molecular" in lookup_arr[j]){
			lookup_arr[j].molecular.forEach(function(mol){
				lookup_elem.molecular.source.push(mol.source);
				lookup_elem.molecular.type.push(mol.type);
			})
		}
		if("calculated" in lookup_arr[j]){
			lookup_arr[j].calculated.forEach(function(cal){
				lookup_elem.calculated.source.push(cal.source);
				lookup_elem.calculated.type.push(cal.type);
			})
		}
		if("edges" in lookup_arr[j]){
			lookup_arr[j].edges.forEach(function(ed){
				lookup_elem.edges.name.push(ed.name);
				lookup_elem.edges.source.push(ed.source);
				lookup_elem.edges.edges.push(ed.edges);
				lookup_elem.edges.patientWeights.push(ed.patientWeights);
				lookup_elem.edges.genesWeights.push(ed.genesWeights);
			})
		}
		lookup_elem.category.source = lookup_elem.category.source.unique();
		lookup_elem.category.type = lookup_elem.category.type.unique();
		lookup_elem.molecular.source = lookup_elem.molecular.source.unique();
		lookup_elem.molecular.type = lookup_elem.molecular.type.unique();
		lookup_elem.calculated.source = lookup_elem.calculated.source.unique();
		lookup_elem.calculated.type = lookup_elem.calculated.type.unique();
		lookup_elem.edges.name = lookup_elem.edges.name.unique();
		lookup_elem.edges.source = lookup_elem.edges.source.unique();
		lookup_elem.edges.edges = lookup_elem.edges.edges.unique();
		lookup_elem.edges.patientWeights = lookup_elem.edges.patientWeights.unique();
		lookup_elem.edges.genesWeights = lookup_elem.edges.genesWeights.unique();
	}
	lookup_elem.source = lookup_elem.source.unique();
	lookup_elem.beta = lookup_elem.beta.unique();
	lookup_elem.name = lookup_elem.name.unique();
	lookup_elem.img = lookup_elem.img.unique();


	format.h1("DataBase Description");
	format.h2("From Collection Perspective");
	format.text(manifest_elem.dataset);
	format.h2("From Disease Perspective");
	format.text(lookup_elem.disease);
	format.text(lookup_elem.source);

 	yield comongo.db.close(db);
}).catch(onerror);
  

// jsonfile.writeFile("ajvMsg.json", ajvMsg, {spaces: 2}, function(err){ console.error(err);});
// jsonfile.writeFile("tool_schemas.json", tool_schemas, {spaces: 2},  function(err){ console.error(err);});
 