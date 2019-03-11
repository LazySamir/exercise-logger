import 'dotenv/config';
import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import exercises from './routes/exercises';
import models, { connectDb } from './models';
import routes from './routes';

const app = express();

app.use(bodyParser.json());
app.use(cors());

// passes the models as context to all of the Express routes
app.use(async (req, res, next) => {
  req.context = {
    models
  };
  next();
});

app.use('/exercises', routes.exercises);

module.exports = app;
