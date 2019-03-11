import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import exercises from './routes/exercises';
import routes from './routes';

const app = express();

app.use(bodyParser.json());
app.use(cors());

app.use('/exercises', routes.exercises);

module.exports = app;
