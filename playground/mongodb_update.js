// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/to_do_app', (err, db) => {
    if (err)
        return console.log('Unable to connect to the mongoDB server.', err);

    console.log('Connnected to the mongoDB server.');

    const mydb = db.db('to_do_app');

    // mydb.collection('to_do').findOneAndUpdate({
    //     _id: new ObjectID('5a55d7516aadfb23a043c754')
    // },{
    //     $set: {
    //         text: 'one'
    //     }
    // },{
    //     returnOriginal: false
    // }).then((res) => {
    //     console.log(res);
    // });

    mydb.collection('users').findOneAndUpdate({
        _id: new ObjectID('5a548670a5c726205c528118'),
    },{
        $set: {
            name: 'Wild Stone',
        }, $inc:{
            age: 0
        }
    },{
        returnOriginal: false
    }).then((res) => {
        console.log(res);
    });

    db.close();
});
