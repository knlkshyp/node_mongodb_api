// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/to_do_app', (err, db) => {
    if (err)
        return console.log('Unable to connect to the mongoDB server.', err);

    console.log('Connnected to the mongoDB server.');

    const mydb = db.db('to_do_app');

    // mydb.collection('to_do').find({
    //     _id: new ObjectID('5a547cbc84c1291260bdf873')
    // }).toArray().then((docs) => {
    //     console.log('.....to_dos.....');
    //     console.log(JSON.stringify(docs, undefined, 2));
    // }, (err) => {
    //     console.log('Unable to find docs',err);
    // });

    mydb.collection('to_do').find().count().then((count) => {
        console.log(`to_do count : ${count}`);
    }, (err) => {
        console.log('Unable to count to_do',err);
    });


    // db.close();
});
