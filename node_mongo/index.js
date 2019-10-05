const mongo = require('mongodb').MongoClient;
const assert = require('assert');

const dbOperations = require('./operations');

const dbSever = 'mongodb://localhost:27017/';
const dbname = 'node_mongo';

mongo.connect(dbSever).then((client) => {
    console.log("connected");

    const db = client.db(dbname);

    dbOperations.insertDocument(db,{"name": "isuru boya", "discription": "hi isueu"}, "dishes")
    .then((result) =>{
        console.log(result.result.n, "sent to front end");
        return dbOperations.findDocuments(db, "dishes");
    })
    .then((docs) =>{
        console.log("Found : ", docs);
        return dbOperations.updateDocument(db,{discription:"hi isueu"},{discription:"hi isuru"}, "dishes");
    })
    .then((result) =>{
        console.log("Updated : ", result.result)
        return dbOperations.findDocuments(db, "dishes");
    })
    .then((docs) =>{
        console.log("Found : ", docs);
        return dbOperations.removeDocument(db,{discription:"hi isuru"}, "dishes");
    })
    .then((result) =>{
        return client.close();
    })
    .catch((err) => {
        console.log(err);
    });
})
.catch((err) => {
    console.log(err);
});