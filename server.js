const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');



const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(express.json());

// Connect to MongoDB Atlas
mongoose.connect('mongodb+srv://321swaroop0062:Sambhaji2@cluster0.xk2sux7.mongodb.net/', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() => {
  console.log('MongoDB Atlas connected successfully.');
}).catch((error) => {
  console.error('MongoDB Atlas connection error:', error);
});

// Import user routes
const userRoutes = require('./routes/userRoutes');

// Use user routes
app.use('/api/user', userRoutes);

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
