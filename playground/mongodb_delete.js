// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/to_do_app', (err, db) => {
    if (err)
        return console.log('Unable to connect to the mongoDB server.', err);

    console.log('Connnected to the mongoDB server.');

    const mydb = db.db('to_do_app');

    // mydb.collection('to_do').deleteMany({
    //     text: 'Something to do'
    // }).then((res) => {
    //     console.log(res);
    // });

    // mydb.collection('to_do').deleteOne({
    //     text: 'one'
    // }).then((res) => {
    //     console.log(res);
    // });

    mydb.collection('to_do').findOneAndDelete({
        text: 'one'
    }).then((res) => {
        console.log(res);
    });

    db.close();
});
