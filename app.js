const path = require("os");

var totalMemory = path.totalmem();
var freeMemory = path.freemem();
// console.log(totalMemory);
// console.log(freeMemory);

// ES6 feature
console.log(`Total Memory ${totalMemory}`);
console.log(`Free Memory ${freeMemory}`);
