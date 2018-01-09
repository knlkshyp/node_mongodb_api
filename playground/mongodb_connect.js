// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, Object} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/to_do_app', (err, db) => {
    if (err)
        return console.log('Unable to connect to the mongoDB server.', err);

    console.log('Connnected to the mongoDB server.');

    const mydb = db.db('to_do_app');

    mydb.collection('to_do').insertOne({
        text: 'Something to do',
        completed: false
    }, (err, res) => {
        if (err)
            return console.log('Unable to insert to_do', err);

        console.log(JSON.stringify(res.ops, undefined, 2));
    });

    mydb.collection('users').insertOne({
        name: 'Kunal Kashyap',
        age: 22,
        location: 'Bhopal'
    }, (err, res) => {
        if (err)
            return console.log('Unable to insert users', err);

        console.log(JSON.stringify(res.ops, undefined, 2));
    });

    db.close();
});
