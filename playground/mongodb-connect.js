//const MongoClient = require('mongodb').MongoClient;
//same as above
const {MongoClient, ObjectID} = require('mongodb');



//localhost but could be heroku
MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) =>{
	if(err) {
	 return	console.log('Unable to connect to MongoDB server.');
	}

	console.log("Connected to MongoDB server.");

    // db.collection('Todos').insertOne({
   	// 	text: 'Something to do',
   	// 	completed: 'false'
    // }, (err, result) => {
    // 	if(err) {
    // 		return console.log("Unableto insert todo", err);
    // 	}

    // 	console.log(JSON.stringify(result.ops, undefined, 2));
    // });

    // db.collection('Users').insertOne({
   	// 	name: 'Matt',
   	// 	age: 31,
   	// 	location: "Houston"
    // }, (err, result) => {
    // 	if(err) {
    // 		return console.log("Unableto insert user", err);
    // 	}

    // 	console.log(JSON.stringify(result.ops, undefined, 2));
    // });
	db.close();
});