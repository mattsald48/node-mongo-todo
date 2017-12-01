const{ObjectID} = require('mongodb');

const {mongoose} = require("./../server/db/mongoose");
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

// Todo.remove({}).then((result) => {
// 	console.log(result);
// });

//Work the same
//Todo.findOneAndRemove
//Todo.findByIDAndRemove

Todo.findByIdAndRemove('5a20d0e6692573a4e91924c4').then((todo) => {
 console.log(todo);
});