import mongoose from 'mongoose';

import Exercise from './exercises';

const connectDb = () => {
  return mongoose.connect(`mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0-y3rbb.mongodb.net/${process.env.COLLECTION}?retryWrites=true`,
    { useNewUrlParser: true });
};

const models = { Exercise };

export { connectDb };

export default models;
