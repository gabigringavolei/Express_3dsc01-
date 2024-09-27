const express = require("express");
const app = express();

const PORT = 3300;

app.get("/", function (re, res) {
  res.send("Ola!.....");
});
app.listen(PORT, () => {
  console.log("running...");
});
