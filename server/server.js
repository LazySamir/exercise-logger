const app = require('./app')
import models, { connectDb } from './models';

connectDb().then(async () => {
  app.listen(process.env.API_PORT, () =>
    console.log(`Example app listening on port ${process.env.API_PORT}!`),
  );
});
