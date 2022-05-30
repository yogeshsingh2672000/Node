const EventEmitter = require("events"); // this is a class
const emitter = new EventEmitter();

// registering the Listner
emitter.on("messageLogged", function () {
  console.log("Listner Called");
});

// Raise an event
emitter.emit("messageLogged");
