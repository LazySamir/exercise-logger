import mongoose from 'mongoose';

const exercisesSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  reps: {
    type: Number,
    required: true,
  },
  createdAt: {
    type: Date,
    default: new Date(),
  }
});

const Exercise = mongoose.model('Exercises', exercisesSchema);

export default Exercise;
