const mongoose = require("mongoose");
const Schema = mongoose.Schema
// per office hours

// create objects based off the seed.js file for each key used within the [{ type, name etc.}]
const exerciseSchema = new mongoose.Schema({
  type: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  duration: {
    type: Number,
    required: true,
  },
  weight: {
    type: Number,
  },
  reps: {
    type: Number,
  },
  sets: {
    type: Number,
  },
  distance: {
    type: Number,
  },
});

const workoutSchema = new mongoose.Schema({
  day: {
    type: Date,
    default: new Date(),
  },
  exerise: [exerciseSchema],
});
const workout = mongoose.model("workouts", workoutSchema);

module.exports = workout;
