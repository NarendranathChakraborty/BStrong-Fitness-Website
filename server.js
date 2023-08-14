// server.js
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 3000; // Change the port number


// Middleware
app.use(cors());
app.use(express.json());



// Connect to MongoDB Atlas
mongoose.connect('mongodb+srv://swaroop:Sambhaji2@cluster0.t5xti2g.mongodb.net/', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() => {
  console.log('MongoDB Atlas connected successfully.');
}).catch((error) => {


  console.error('MongoDB Atlas connection error:', error);
});

// Define your routes and other app logic here

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
