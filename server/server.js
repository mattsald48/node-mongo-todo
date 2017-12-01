var express = require('express');
var bodyParser = require('body-parser');
var {ObjectID} = require('mongodb');

var {mongoose} = require('./db/mongoose');
var {Todo} = require('./models/todo');
var {User} = require('./models/user');

//initialize express
var app = express();

//middleware
app.use(bodyParser.json());

//Resorce Creation. POST
app.post('/todos', (req, res) => {
 
  var todo = new Todo({
  	text: req.body.text
  });

  todo.save().then((doc) =>{
  	res.send(doc);
   }, (e) => {
  	res.status(400).send(e);
  })
});

//GET route
app.get('/todos', (req, res) => {
	Todo.find().then((todos) => {
	  res.send({todos})
	}, (e) => {
      res.status(400).send(e);
	});
});

//GET /todos/12345
app.get('/todos/:id', (req, res) => {
	var id = req.params.id;

   if(!ObjectID.isValid(id)) {
   	return res.status(404).send();
   }

   Todo.findById(id).then((todo) => {
    
    if (!todo) {
    	return res.status(404).send();
    }

    res.send({todo});
   }).catch((e) => {
   	  res.status(404).send();
   });
});

//server start
app.listen(3000, () =>{
	console.log('Server started on port 3000');
});


module.exports = {app};