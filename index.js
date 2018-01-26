var fs = require('fs');
var colors = require('colors');

fs.readdir('./', function(err, data) {

	if (err) throw err;
	console.log('Dane przed zapisem!'.yellow);
	console.log(data);
	
	fs.writeFile('./dir.txt', data, function(err, data) {
		
		if (err) throw err;
		console.log('Zapisano!'.red);

	});
	
	fs.readFile('./dir.txt', 'utf-8', function(err, data) {

		if (err) throw err;
		console.log('Dane po zapisie'.green)
		console.log(data);

	});

});