const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/to_do');
mongoose.Promise = global.Promise;

module.exports = {
    mongoose
};
