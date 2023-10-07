const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');



const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(morgan("dev"));
app.use(cors({ origin: true, credentials: true }));
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
const port = 4000;
const server = app.listen(port, () =>
  console.log(`Server is running on port ${port}`)
);
