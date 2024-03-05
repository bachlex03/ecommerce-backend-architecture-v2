const express = require("express");
const morgan = require("morgan");
const helmet = require("helmet");
const compression = require("compression");

const app = express();

// middlewares
app.use(morgan("dev"));
app.use(helmet());
app.use(compression());
app.use(express.json());
app.use(
  express.urlencoded({
    extended: true,
  })
);

// init database

// init routes

app.get("/", (req, res, next) => {
  res.status(200).json({
    statusCode: 200,
    message: "OK",
    metadata: {
      message: "Init successfully",
    },
  });
});

module.exports = {
  app,
};
