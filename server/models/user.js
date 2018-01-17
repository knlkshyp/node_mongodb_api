const mongoose = require('mongoose');

var user = mongoose.model('user',{
    email:{
        type: String,
        required: true,
        trim: true,
        minlength: 1,
        default: 'm@gmail.com'
    }
});

// var data = new user({
//     email: 'wildstone@gmail.com'
// });

// var moreData = new user();
//
// moreData.save().then((docs) => {
//     console.log('Saved.',docs);
// }, (err) => {
//     console.log('Unable to save.',err);
// });

module.exports = {
    user
};
