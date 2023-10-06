const express = require("express");
const mongoose = require("mongoose");
const morgan = require("morgan");
const cors = require("cors");
const bcrypt = require('bcrypt');
require("dotenv").config();

const userRoutes = require("./routes/user");
const User = require('./models/user'); 

const app = express();

// Connect to MongoDB
mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("DB CONNECTED"))
  .catch((err) => console.log("DB CONNECTION ERROR", err));

// Middleware
app.use(morgan("dev"));
app.use(cors({ origin: true, credentials: true }));
app.use(express.json());

// Routes
app.use("/api/users", userRoutes);

// Signup route
app.post('/api/signup', async (req, res) => {
  const {
    username,
    email,
    password
  } = req.body;

  try {
    // Check if the email is already registered
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: 'Email already in use' });
    }

    // Hash the password before storing it
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create a new user in MongoDB
    await User.create({
      username,
      email,
      password: hashedPassword, // Store the hashed password
    });

    res.status(201).json({ message: 'Signup successful' });
  } catch (error) {
    console.error('Signup error:', error);
    res.status(500).json({ message: 'Signup failed' });
  }
});

// Start the server
const port = 4000;
const server = app.listen(port, () =>
  console.log(`Server is running on port ${port}`)
);
