const express = require("express");
const morgan = require("morgan"); // http request logger middlware
const rateLimit = require("express-rate-limit"); // limit repeated requests to public APIs/endpoints e.g. password reset.
const helmet = require("helmet"); // setting HTTP response headers to secure the apps.
const xss = require("xss"); // to filter input from users to prevent XSS attacks.
const cors = require("cors"); // enable CORS with various options.
const mongoSanitize = require("express-mongo-sanitize"); // setting HTTP response headers to secure the apps.

const app = express();

const limiter = rateLimit({
  windowMs: 60 * 60 * 1000, // 60 minutes
  max: 3000, // Limit each IP to 3000 requests per `window` (here, per 15 minutes)
  message: "Too many requests from the same IP, please try again in an hour",
});

//  -------------------------------------------------------------------------------------------------------
// middlewares
app.use(express.json({ limit: "10kb" }));
app.use(express.urlencoded({ extended: true }));
if (process.env.NODE_ENV === "development") {
  app.use(morgan("dev"));
}
app.use(
  cors({
    origin: "*",
    methods: ["GET", "PATCH", "POST", "DELETE", "PUT"],
    credentials: true,
  })
);

app.use(xss);
app.use(helmet());
app.use(mongoSanitize());
app.use("/talk", limiter); // Apply the rate limiting middleware to all requests

//  -------------------------------------------------------------------------------------------------------
module.exports = app;
