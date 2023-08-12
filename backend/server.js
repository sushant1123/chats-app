const app = require("./app");
const dotenv = require("dotenv");
const http = require("http");
const mongoose = require("mongoose");

dotenv.config();

process.on("uncaughtException", (err) => {
  console.log(err);
  process.exit(1);
});

const port = process.env.PORT || 8000;

const server = http.createServer(app);

const dbURI = process.env.DB_URI.replace("<username>", process.env.DB_USERNAME).replace(
  "<password>",
  process.env.DB_PASSWORD
);

mongoose
  .connect(dbURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("mongodb connection is successful....."))
  .catch((error) => {
    console.log(error);
  });

server.listen(port, () => {
  console.log("Server is running on port", port);
});

process.on("unhandledRejection", (err) => {
  console.log(err);
  server.close(() => {
    process.exit(1);
  });
});
