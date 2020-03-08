import express, { Request, Response, Application } from 'express';
import reqID from './middlewares/reqID';
import requestLogger from './middlewares/requestLogger';
import reqTime from './middlewares/reqTime';
import errorHandler from './middlewares/errorHandler';
import config from './config/config';
import controlers from './controlers';
// import errors from './helpers/Errors';
// import requestValidator from './middlewares/requestValidator';
// import Joi from '@hapi/joi';
// import asyncRoute from './middlewares/asyncRoute';
import mongoDB from './providers/mongoDB';
// Our Express APP config
const app: Application = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
mongoDB({ dbURI: config.mongoDbURI });
//middlewares
app.use(reqID, reqTime, requestLogger);

// API Endpoints
controlers.init(app);
//error handler
app.use(errorHandler);

const server = app.listen(config.port, () => {
  console.log('App is running on http://localhost:%d', config.port);
});
module.exports = server;
