const express = require("express");
const bodyParser = require("body-parser");
const router = require("./index");

const app = express();

app.get("/", function (req, res) {
  res.set("Content-Type", "application/json");
  res.end(
    JSON.stringify({
      msg: "app is successfully running...",
    })
  );
});

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(router);

app.listen(3000, () => {
  console.log("App Running at http://localhost:3000");
});
