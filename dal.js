require('dotenv').config();
const { MongoClient } = require('mongodb');

const uri = process.env.MONGODB_URI;
const dbName = 'BadBankDB'; // Replace with your database name

let client; // Declare a single MongoDB client instance

let isConnected = false; // Add a flag to track the connection status
let db; // Declare the 'db' variable here to make it accessible

async function connectToMongoDB() {
    try {
        if (!isConnected) { // Only connect if not already connected
            // Create a new MongoClient if it doesn't exist
            if (!client) {
                client = new MongoClient(uri);
            }

            // Connect to the MongoDB server
            await client.connect();
            console.log('Connected successfully to MongoDB server');

            // Set up the database
            db = client.db(dbName);
            isConnected = true; // Set the flag to true
        }

        return db;
    } catch (error) {
        console.error('Error connecting to MongoDB:', error);
        throw error; // Rethrow the error to handle it elsewhere if needed
    }
}

async function closeMongoDBConnection() {
    try {
        if (isConnected) { // Only close if connected
            await client.close();
            console.log('Disconnected from MongoDB Atlas');
            isConnected = false; // Reset the flag
        }
    } catch (error) {
        console.error('Error closing MongoDB Atlas connection:', error);
    }
}

// create user account
function create(name, email, password, balance){
    return new Promise((resolve, reject) => {    
        const collection = db.collection('BadBankCollection');
        balance = parseInt(balance);
        const doc = {name, email, password, balance};
        collection.insertOne(doc, {w:1}, function(err, result) {
            err ? reject(err) : resolve(doc);
        });    
    })
}

// deposit into database
function deposit(email, balance) {
    return new Promise((resolve, reject) => {
        const collection = db.collection('BadBankCollection');        
        balance = parseInt(balance);
        collection.updateOne(
                {"email":email}, 
                {$inc: {"balance":balance}},
                function(err, result) {err ? reject(err) : resolve(result);}
            )
    });   
}

// withdraw from database
function withdraw(email, balance) {
    return new Promise((resolve, reject) => {
        const collection = db.collection('BadBankCollection');        
        balance = -parseInt(balance);
        collection.updateOne(
                {"email":email}, 
                {$inc: {"balance":balance}},
                function(err, result) {err ? reject(err) : resolve(result);}
            )
    });   
}

// find user account balance
function balance(email) {
    return new Promise((resolve, reject) => {
        const collection = db.collection('BadBankCollection');        
        collection.find({"email":email})
            .toArray(function(err, docs) {
                err ? reject(err) : resolve(docs);
            }); 
    });   
}

// find user with given email and password, returns an empty array if doesn't exist
function login(email, password) {
    return new Promise((resolve, reject) => {
        const collection = db.collection('BadBankCollection');        
        collection.find({
            $and: [
                {"email": {$eq: email}}, 
                {"password": {$eq: password}}
            ]
        })
        .toArray(function(err, docs) {
            err ? reject(err) : resolve(docs);
        }); 
    });   
}

// find user account
// FIXED
async function find(email) {
    try {
        const collection = db.collection('BadBankCollection');
        const result = await collection.find({ "email": email }).toArray();
        return result;
    } catch (error) {
        throw error; // Propagate the error to the caller
    }
}

// all users
function all(){
    return new Promise((resolve, reject) => {    
        const customers = db
            .collection('BadBankCollection')
            .find({})
            .toArray(function(err, docs) {
                err ? reject(err) : resolve(docs);
        });    
    })
}

module.exports = {
    create,
    all,
    deposit,
    withdraw,
    balance,
    login,
    find,
    client, // Export the MongoDB client
    connectToMongoDB, // Export the connectToMongoDB function
    closeMongoDBConnection, // Export the closeMongoDBConnection function
};