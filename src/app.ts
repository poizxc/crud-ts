import express, { Request, Response } from "express";
import reqID from "./middlewares/reqID";
import requestLogger from "./middlewares/requestLogger";
import reqTime from "./middlewares/reqTime";
import errorHandler from "./middlewares/errorHandler";
import config from "./config/config"
import errors from './helpers/Errors';
// Our Express APP config
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }))

//middlewares
app.use(reqID, reqTime, requestLogger)

// API Endpoints
app.get("/test-route", (req: Request, res: Response) => {
  throw errors.notFound();
  console.log("headers")
});

//error handler
app.use(errorHandler)

const server = app.listen(config.port, () => {
  console.log("App is running on http://localhost:%d", config.port);
});
module.exports = server