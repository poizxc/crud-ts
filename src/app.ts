import express, { Request, Response } from "express";
import reqID from "./middlewares/reqID";
import requestLogger from "./middlewares/requestLogger";
import reqTime from "./middlewares/reqTime";
import errorLogger from "./middlewares/errorLogger";
import config from "./config/config"
// Our Express APP config
const app = express();
app.use(express.json());

//middlewares
app.use(reqID, reqTime, requestLogger)

// API Endpoints
app.get("/", (req: Request, res: Response) => {
  res.send("hello:)");
});

//error handler
app.use(errorLogger)

const server = app.listen(config.port, () => {
  console.log("App is running on http://localhost:%d", config.port);
});
module.exports = server