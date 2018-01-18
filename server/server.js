var express = require('express');
var bodyParser = require('body-parser');

var {mongoose} = require('./db/mongoose.js');
var {list} = require('./models/todo.js');
var {user} = require('./models/user.js');

var app = express();
app.use(bodyParser.json());

app.post('/lists',(req, res) => {
    var newList = new list({
        text: req.body.text
    });
    newList.save().then((doc) => {
        res.status(200).send(doc);
    }, (err) => {
        res.status(400).send(err);
    });
});

app.get('/lists',(req, res) => {
    list.find().then((todos) => {
        res.send({todos});
    }, (err) => {
        res.send(err);
    });
});

app.listen(3000, () => {
    console.log('Up');
});
