import express from "express";
import cors from "cors";
import morgan from "morgan";

const app = express();

// middleware to help connection with frontend 
app.use(cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true,
}))

// middleware to allow only json data to pass through and also limit the size of that data
app.use(express.json({limit: "16kb"}))

// middleware to encode url when passed , use qs package under the hood
app.use(express.urlencoded({ extended: true , limit : "16kb"}))

// middleware to serve static files
app.use(express.static("public"));

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
