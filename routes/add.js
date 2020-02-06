var data = require("../data.json");

exports.addFriend = function(request, response) {    
	// Your code goes here
	var nameToAdd = request.query.name;
	var descriptiontoAdd = request.query.description;
	console.log(nameToAdd + "\n" + descriptiontoAdd);
	res.render('index', {'name': nameToAdd, 'description': descriptiontoAdd});

 }