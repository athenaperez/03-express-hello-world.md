var express = require('express');
var app = express();

app.get('/',function(req, res) {
	res.send('<h1>Hello World</h1>')
});

var server = app.listen(8080, function() {
	console.log('Listening on port 3000');
})
