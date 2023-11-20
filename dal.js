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
// /account/create/:name/:email/:password/:balance
async function create(name, email, password, balance) {
    try {
        balance = parseInt(balance); // add starting value to new account
        const doc = { name, email, password, balance };
        const collection = db.collection('BadBankCollection');
        // add to the DB
        const insertResult = await collection.insertOne(doc);
        // return the account info
        if (insertResult.acknowledged) {
            const findResult = await collection.find({ "email": email }).toArray();
            return findResult;
        } else {
            return { error: "No documents inserted" }; // no documents were inserted
        }
    } catch (error) {
        throw error;
    }
}

// deposit into database
// /account/deposit/:email/:balance
async function deposit(email, balance) {
    try {
        balance = parseInt(balance); // add to account
        const collection = db.collection('BadBankCollection');
        // update the DB
        const updateResult = await collection.updateOne(
            { "email": email },
            { $inc: { "balance": balance } }
        );
        // return the account info
        if (updateResult.modifiedCount > 0) {
            const findResult = await collection.find({ "email": email }).toArray();
            return findResult;
        } else {
            return { error: "No documents updated" }; // no documents were updated
        }
    } catch (error) {
        throw error;
    }  
}

// withdraw from database
// /account/withdraw/:email/:balance
async function withdraw(email, balance) {
    try {
        balance = -parseInt(balance); // subtract from account
        const collection = db.collection('BadBankCollection');
        // update the DB
        const updateResult = await collection.updateOne(
            { "email": email },
            { $inc: { "balance": balance } }
        );
        // return the account info
        if (updateResult.modifiedCount > 0) {
            const findResult = await collection.find({ "email": email }).toArray();
            return findResult;
        } else {
            return { error: "No documents updated" }; // no documents were updated
        }
    } catch (error) {
        throw error;
    }   
}

// find user account balance
// /account/balance/:email
async function balance(email) {
    try {
        const collection = db.collection('BadBankCollection');
        const result = await collection.find({ "email": email }).toArray();
        return result;
    } catch (error) {
        throw error;
    }  
}

// find user with given email and password, returns an empty array if doesn't exist
// /account/login/:email/:password
async function login(email, password) {
    try {
        const collection = db.collection('BadBankCollection');
        const result = await collection.find({ 
            $and: [
                {"email": {$eq: email}}, 
                {"password": {$eq: password}}
            ]
        }).toArray();
        return result;
    } catch (error) {
        throw error;
    }  
}

// find user account
// /account/find/:email
async function find(email) {
    try {
        const collection = db.collection('BadBankCollection');
        const result = await collection.find({ "email": email }).toArray();
        return result;
    } catch (error) {
        throw error;
    }
}

// all users
// /account/all
async function all(){
    try {
        const collection = db.collection('BadBankCollection');
        const result = await collection.find({}).toArray();
        return result;
    } catch (error) {
        throw error;
    }
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