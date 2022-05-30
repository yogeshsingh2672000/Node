const EventEmitter = require("events"); // this is a class

var url = "http://mylogger.io/log";

class Logger extends EventEmitter {
  log(message) {
    // send an HTTP request
    console.log(message);

    this.emit("messageLogged", {
      username: "yogesh.k",
      name: "Yogesh Kumar",
    });
  }
}

module.exports = Logger;
