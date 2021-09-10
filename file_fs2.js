const { readFile, writeFile } = require("fs");

readFile("./content/subfolder/text2.txt", "utf-8", (err, result) => {
	if (err) {
		console.log(err);
	}
	console.log(result);

	const firstfile = result;
	readFile("./content/subfolder/text.txt", "utf-8", (err, result) => {
		if (err) {
			console.log(err);
		}

		const secondfile = result;

		if (firstfile == secondfile) {
		} else {
			console.log("same");
		}
	});
});
