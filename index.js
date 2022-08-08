const express = require("express");
const path = require("path");

const publicPath = path.join(__dirname, "public");

const app = express();
// app.use(express.static(publicPath));
app.get("", (_, res) => {
  res.sendFile(`${publicPath}/home.html`);
});

app.get("/about", (_, res) => {
  res.sendFile(`${publicPath}/about.html`);
});

app.get("*", (_, res) => {
  res.send("this page is not found go to home page");
});

app.listen(4500);
