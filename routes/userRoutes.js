// routes/userRoutes.js
const express = require('express');
const router = express.Router();
const User = require('../models/userModel');

// Route to handle user details and BMI calculation
router.post('/user', async (req, res) => {
  try {
    const { name, height, weight } = req.body;

    // Calculate BMI (Body Mass Index)
    const bmi = weight / ((height / 100) ** 2);

    // Save user details to the database
    const user = new User({
      name,
      height,
      weight,
    });
    await user.save();

    res.json({ bmi });
  } catch (error) {
    res.status(500).json({ error: 'Error saving user details.' });
  }
});

module.exports = router;
