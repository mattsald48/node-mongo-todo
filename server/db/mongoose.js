var mongoose = require('mongoose');

mongoose.Promise = global.Promise;
var promise = mongoose.connect('mongodb://localhost:27017/ToDoApp', {
	useMongoClient: true,
});

module.exports = {mongoose};