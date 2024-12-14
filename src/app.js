import express from "express";
import morgan from "morgan";

const app = express();

// custom formatter for the logging
const morganFormat = ":method👍 :url :status :response-time✅ ms";
// morgan middleware ... logs info about every request that hits the server
app.use(
  morgan(morganFormat, {
    stream: {
      write: (message) => {
        const logObject = {
          method: message.split(" ")[0],
          url: message.split(" ")[1],
          status: message.split(" ")[2],
          responseTime: message.split(" ")[3],
        };
        logger.info(JSON.stringify(logObject));
      },
    },
  })
);

export { app };
