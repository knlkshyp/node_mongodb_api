var {mongoose} = require('./../server/db/mongoose.js');
var {list} = require('./../server/models/todo.js');
var {ObjectID} = require('mongodb');

var id = '5a5f29f23d720b196813ab21';

if(!ObjectID.isValid(id)){
    console.log('Invalid Id');
}

// list.find({
//     _id: id
// }).then((todos) => {
//     console.log('todos',todos);
// });

// list.findOne({
//     _id: id
// }).then((todo) => {
//     console.log('todo',todo);
// });

list.findById(id).then((todo) => {
    if(!todo){
        console.log('Id is incorrect');
    }
    console.log('todo by id',todo);
}).catch((err) => {
    console.log(err);
});
