const http = require("http");
const server = http.createServer((req, res) => {
	if (req.url === "/") {
		res.end("welcome to the server");
	}
	if (req.url === "/about") {
		res.end("welcome to About us page");
	}
	res.end("Opps! Wrong page");
});
server.listen(5000);
