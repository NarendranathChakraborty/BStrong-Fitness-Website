// controllers/userController.js
const User = require('../models/User');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

// Signup function
const signup = async (req, res) => {
  try {
    const { username, email, password } = req.body;

    // Check if a user with the same email or username already exists
    const existingUser = await User.findOne({ $or: [{ username }, { email }] });
    if (existingUser) {
      return res.status(400).json({ message: 'Username or email already in use.' });
    }

    // Hash the password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create a new user in the database
    const newUser = new User({ username, email, password: hashedPassword });
    await newUser.save();

    // Create and sign a JWT token
    const token = jwt.sign({ userId: newUser._id }, 'your-secret-key', { expiresIn: '1h' });

    // Return the token and user data
    res.status(201).json({ token, user: { _id: newUser._id, username: newUser.username } });
  } catch (error) {
    // Handle errors
    console.error('Signup error:', error);
    res.status(500).json({ message: 'Signup failed. Please try again later.' });
  }
};

// Login function
const login = async (req, res) => {
  try {
    const { username, password } = req.body;

    // Find the user by username
    const user = await User.findOne({ username });
    if (!user) {
      return res.status(401).json({ message: 'Invalid username or password.' });
    }

    // Compare the provided password with the stored hashed password
    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      return res.status(401).json({ message: 'Invalid username or password.' });
    }

    // Create and sign a JWT token
    const token = jwt.sign({ userId: user._id }, 'your-secret-key', { expiresIn: '1h' });

    // Return the token and user data
    res.status(200).json({ token, user: { _id: user._id, username: user.username } });
  } catch (error) {
    // Handle errors
    console.error('Login error:', error);
    res.status(500).json({ message: 'Login failed. Please try again later.' });
  }
};

module.exports = { signup, login };
