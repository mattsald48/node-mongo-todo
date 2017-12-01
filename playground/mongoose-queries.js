const{ObjectID} = require('mongodb');

const {mongoose} = require("./../server/db/mongoose");
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

// var id  = "5a20ad3d90197d13a46a561d";

// if(!ObjectID.isValid(id)) {
// 	console.log('ID is not valid');
// }

// Todo.find({
// 	_id: id
// }).then((todos) => {
// 	console.log('Todos', todos);
// });

// Todo.findOne({
// 	_id: id
// }).then((todo) => {
// 	console.log('Todo', todo);
// });

//just pass in id
// Todo.findById(id).then((todo) => {
// 	if (!todo) {
// 		return console.log('ID not found');
// 	}
// 	console.log('Todo By ID', todo);
// }).catch((e) => console.log(e));

User.findById("5a205e620dd1201650831375").then((result) => {
	if(!result) {
		return console.log("User not found");
	}
	console.log('User by Id', result);
}).catch((e) => console.log(e));