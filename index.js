const express = require("express");
const app = express();

const reqFilter = (req, res, next) => {
  if (!req.query.age) {
    res.send("please provide age");
  } else if (req.query.age < 18) {
    res.send("you are too young for this website");
  } else if (req.query.age >= 18) {
    // res.send("<h1>Welcome</h1>");
    next();
  }
};

app.use(reqFilter);
app.get("", (req, res) => {
  res.send("Welcome to Home Page");
});

app.get("/users", (req, res) => {
  res.send("Welcome to Users Page");
});

app.listen(4500);
