const express = require('express');
const router = express.Router();
const User = require('./models/User'); // Import your User model

router.post('/signup', async (req, res) => {
  try {
    const { username, email, password } = req.body;
    // You can add validation and hashing of the password here
    
    // Create a new user in MongoDB
    const user = new User({ username, email, password });
    await user.save();
    
    res.status(201).json({ message: 'Signup successful' });
  } catch (error) {
    console.error('Signup error:', error);
    res.status(500).json({ message: 'Signup failed' });
  }
});

module.exports = router;
