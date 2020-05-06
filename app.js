var http = require('http');
var mongoose = require('mongoose');
var port = process.env.PORT || 3000;
var mongodb_uri = process.env.MONGOLAB_URI || process.env.MONGOHQ_URL || 'mongodb://localhost/HelloMongoose';

mongoose.connect(mongodb_uri, function (error, response) {
  if (error) { 
    console.log ('ERROR connecting to: ' + mongodb_uri + '. ' + error);
  } else {
    console.log ('Succeeded connected to: ' + mongodb_uri);
  }
});

var userSchema = new mongoose.Schema({
  name: {
    first: String,
    last: { type: String, trim: true }
  },
  age: { type: Number, min: 0}
});

var User = mongoose.model('User', userSchema);

User.remove({}, function(error) {
  if (error) {
    console.log ('ERROR deleting old data.');
  }
});

var user = new User({
  name: { first: 'Nico', last: 'Vazquez' },
  age: 32
});
 
user.save(function (error) {
	if (error) 
		console.log (error)
});

var server = http.createServer(function(request, response) {
	User.find({}).exec(function(error, result) {
	  response.end(JSON.stringify(result));
	});
});

server.listen(port);

console.log("Server running at http://localhost:%d", port);
