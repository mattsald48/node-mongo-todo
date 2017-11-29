var mongoose = require('mongoose');

//old way to connect
// mongoose.Promise = global.Promise;
// mongoose.connect('mongodb://localhost:27017/ToDoApp');

mongoose.Promise = global.Promise;
var promise = mongoose.connect('mongodb://localhost:27017/ToDoApp', {
	useMongoClient: true,
});

var Todo = mongoose.model('Todo', {
	text: {
   	  type: String
	},
	completed: {
      type: Boolean
	},
	completedAt: {
     type: Number
	}
});

//creating a new instance is not enough to update database
// var newTodo = new Todo({
// 	text: "Cook dinner for Arica."
// });

// //this saves it
// newTodo.save().then((doc) => {
//  console.log("Saved todo", doc);
//  }, (e) => {
// 	console.log("Unable to save todo");
// });

var otherTodo = new Todo({
	text: "Do cool stuff",
	completed: true,
	completedAt: 123
});

otherTodo.save().then((doc) => {
	console.log(JSON.stringify(doc, undefined, 2));
}, (e) => {
	console.log("Unable to save", e);
});