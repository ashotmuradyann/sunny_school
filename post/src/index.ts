import { app, logger } from "./app";

const start = async () => {
  if (!process.env.POST_PORT) {
    throw new Error("POST_PORT must be defined.");
  }
  console.log(process.env.POST_PORT);

  app.listen(process.env.POST_PORT, () => {
    logger.info("POST SERVICE: Listening on port " + process.env.POST_PORT);
  });
};

start();
