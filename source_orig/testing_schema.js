var jsonfile = require("jsonfile");
var testing_schemas = {};

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


jsonfile.readFile("schemas.json", function(err, obj) {
  // collection_counts.json is generated by running test2.js
  testing_schemas = obj;
  Object.keys(testing_schemas).forEach(function(k){
  	format.h2(k);
  	format.codeStart();
    format.text(JSON.stringify(testing_schemas[k], null, 4)); 
    format.codeStop();
  });
});

format.h1("Testing Schemas");


