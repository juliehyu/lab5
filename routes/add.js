var data = require("../data.json");

exports.addFriend = function(request, res) {    
	// Your code goes here'
	var nameToAdd = request.query.name;
	var descriptiontoAdd = request.query.description;
	var imagetoAdd = "http://lorempixel.com/400/400/people";
	var newFriend = {"name": nameToAdd, "description": descriptiontoAdd, "imageURL": imagetoAdd};
	data.friends.push(newFriend);
	console.log(nameToAdd + "\n" + descriptiontoAdd);
	res.render('index', data);

 }