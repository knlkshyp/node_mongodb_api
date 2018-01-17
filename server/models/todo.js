const mongoose = require('mongoose');

var list = mongoose.model('list',{
    text:{
        type: String,
        required: true
    },completed:{
        type: Boolean
    }
});

// var new_doc = new list({
//     text: 'Good food'
// });
//
// new_doc.save().then((docs) => {
//     console.log('Saved doc.',docs);
// },(err) => {
//     console.log('Unable to save the doc.',err);
// });
//
// var again = new list({
//     text: 'More food',
//     completed: true
// });
//
// again.save().then((docs) => {
//     console.log('Saved doc.',docs);
// },(err) => {
//     console.log('Unable to save the doc.',err);
// });

module.exports = {
    list
};
