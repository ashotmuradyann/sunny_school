import express from "express";
import { json } from "body-parser";
import "express-async-errors";
import { router } from "./api/routes";
import {
  Logger,
  ConsoleTransport,
  createLoggerMiddleware,
} from "@voskan/context-aware-logger";
import { NotFoundError, errorHandler } from "@ashot-muradyan/common";

const app = express();
const logger = new Logger();
logger.addTransport(new ConsoleTransport());

app.use(json());
app.use(createLoggerMiddleware(logger));

app.use("/api/post", router);

app.all("*", async () => {
  throw new NotFoundError();
});

app.use(errorHandler);

export { app, logger };
