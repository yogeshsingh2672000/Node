const fs = require("fs");
const path = require("path");

const dirPath = path.join(__dirname, "crud");
const filePath = `${dirPath}/apple.txt`;

// fs.writeFileSync(filePath, "this is a first file created using file handling");
fs.readFile(filePath, "utf8", (err, items) => {
  console.log(items);
});
