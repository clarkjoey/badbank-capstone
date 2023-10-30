const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const path = require('path'); // Don't forget to require path
const dal = require('./dal');

const app = express();

// Middleware
app.use(bodyParser.json());
app.use(cors());

// Check if a user already exists by searching the database for the email
app.get('/account/find/:email', async (req, res) => {
  try {
    const user = await dal.find(req.params.email);
    console.log(user);
    console.log("server")
    res.send(user);
  } catch (error) {
    console.error('Error querying MongoDB:', error);
    res.status(500).json({ error: 'Internal server error Joe' });
  }
});

// Create user account
app.get('/account/create/:name/:email/:password/:balance', async (req, res) => {
  try {
    const user = await dal.create(
      req.params.name,
      req.params.email,
      req.params.password,
      req.params.balance
    );
    console.log(user);
    res.send(user);
  } catch (error) {
    console.error('Error querying MongoDB:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// Deposit into user account
app.get('/account/deposit/:email/:balance', async (req, res) => {
  try {
    const user = await dal.deposit(req.params.email, req.params.balance);
    console.log(user);
    res.send(user);
  } catch (error) {
    console.error('Error querying MongoDB:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// Withdraw from user account
app.get('/account/withdraw/:email/:balance', async (req, res) => {
  try {
    const user = await dal.withdraw(req.params.email, req.params.balance);
    console.log(user);
    res.send(user);
  } catch (error) {
    console.error('Error querying MongoDB:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// User login
app.get('/account/login/:email/:password', async (req, res) => {
  try {
    const user = await dal.login(req.params.email, req.params.password);
    console.log(user);
    res.send(user);
  } catch (error) {
    console.error('Error querying MongoDB:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// User account balance
app.get('/account/balance/:email', async (req, res) => {
  try {
    const user = await dal.balance(req.params.email);
    console.log(user);
    res.send(user);
  } catch (error) {
    console.error('Error querying MongoDB:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// All accounts
app.get('/account/all', async (req, res) => {
  try {
    const docs = await dal.all();
    console.log(docs);
    res.send(docs);
  } catch (error) {
    console.error('Error querying MongoDB:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// Serve the React app
app.use(express.static('client/build'));

// Define a catch-all route to serve the React app
app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
});

const port = process.env.PORT || 3000;

// Connect to MongoDB before starting the server
dal.connectToMongoDB()
  .then(() => {
    app.listen(port, () => {
      console.log(`Server is running on port ${port}`);
    });
  })
  .catch((error) => {
    console.error('Error starting server:', error);
  });

// Handle graceful shutdown
process.on('SIGINT', () => {
  dal.closeMongoDBConnection()
    .catch((error) => {
      console.error('Error closing MongoDB connection during server shutdown:', error);
    })
    .finally(() => {
      process.exit(0);
    });
});