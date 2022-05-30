const EventEmitter = require("events"); // this is a class

const Logger = require("./logger");
const logger = new Logger();

// registering the Listner
logger.on("messageLogged", (args) => {
  console.log(`Logging in.... ${args.username} (${args.name})`);
});

logger.log("message");
