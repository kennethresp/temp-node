const { readFileSync, writeFileSync } = require("fs");

const file1 = readFileSync("./content/subfolder/text.txt", "utf8");
console.log(file1);

writeFileSync("./content/subfolder/text2.txt", file1, { flag: "a" });
