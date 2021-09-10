const os = require("os");
const path = require("path");
const _ = require("lodash");

const items = [1, [2, [3, [4]]]];
const newItems = _.flattenDeep(items);
console.log(newItems);
// console.log(os.userInfo());

// console.log(os.uptime());

// const currentOS = {
// 	name: os.type(),
// 	release: os.release(),
// 	totalMem: os.totalmem(),
// 	freeMem: os.freemem(),
// 	current: os.platform(),
// };
// console.log(currentOS);
