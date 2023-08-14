// models/userModel.js
const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  height: {
    type: Number,
    required: true,
  },
  weight: {
    type: Number,
    required: true,
  },
  // You can add more fields like age, gender, etc. as needed.
});

const User = mongoose.model('User', userSchema);

module.exports = User;
