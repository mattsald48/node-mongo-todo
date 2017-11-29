const {MongoClient, ObjectID} = require('mongodb');



//localhost but could be heroku
MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) =>{
	if(err) {
	 return	console.log('Unable to connect to MongoDB server.');
	}

	console.log("Connected to MongoDB server.");
  
  // db.collection("Todos").findOneAndUpdate(
  //  { _id: new ObjectID("5a1e4c5d79b2c282de2d707a")}, 
  //  {$set: {completed: true}}, 
  //  {returnOriginal: false}
  // ).then((result) => {
  //   console.log(result);
  // });

  db.collection("Users").findOneAndUpdate(
   { _id: new ObjectID("5a1e3a3fceb2390794998153")}, 
   {$set: {name: "Matt"}, $inc: {age: 1}}, 
   {returnOriginal: false}
  ).then((result) => {
    console.log(result);
  });

	//db.close();
});