const express = require("express");

const app = express();

const port = 3010;

app.get("/", (req, res, next) => {
  res.status(200).json({
    statusCode: 200,
    message: "OK",
    metadata: {
      message: "Init successfully",
    },
  });
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
