const assert = require('assert');


exports.insertDocument = (db, document, collection, callback) =>{
    const dbCollection = db.collection(collection);
    return dbCollection.insertOne(document);
};

exports.findDocuments = (db, collection, callback) =>{
    const dbCollection = db.collection(collection);
    return dbCollection.find({}).toArray();
};

exports.removeDocument = (db, document, collection, callback) =>{
    const dbCollection = db.collection(collection);
    return dbCollection.deleteOne(document);
};

exports.updateDocument = (db, document, update, collection, callback) =>{
    const dbCollection = db.collection(collection);
    return dbCollection.updateOne(document, {$set : update}, null);
    
}; 