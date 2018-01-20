var express = require('express');
var bodyParser = require('body-parser');
const {ObjectID} = require('mongodb');

var {
    mongoose
} = require('./db/mongoose.js');
var {
    list
} = require('./models/todo.js');
var {
    user
} = require('./models/user.js');

var app = express();
app.use(bodyParser.json());

app.post('/lists', (req, res) => {
    var newList = new list({
        text: req.body.text
    });
    newList.save().then((doc) => {
        res.status(200).send(doc);
    }, (err) => {
        res.status(400).send(err);
    });
});

app.get('/lists', (req, res) => {
    list.find().then((todos) => {
        res.send({
            todos
        });
    }, (err) => {
        res.send(err);
    });
});

app.get('/lists/:id', (req, res) => {

    var id = req.params.id;

    if (!ObjectID.isValid(id)) {
        return res.status(404).send();
    }
    list.findById(id).then((todo) => {
        if (!todo) {
            return res.status(404).send();
        }

        res.status(200).send({todo});

    }).catch((err) => {
        res.status(400).send(err);
    });

});

app.listen(3000, () => {
    console.log('Up');
});
