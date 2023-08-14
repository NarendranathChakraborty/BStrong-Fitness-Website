// models/exerciseModel.js
const mongoose = require('mongoose');

const exerciseSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  muscleGroup: {
    type: String,
    required: true,
  },
  // Add more fields as needed for each exercise.
});

const Exercise = mongoose.model('Exercise', exerciseSchema);

module.exports = Exercise;
