const http = require('http');
const fs = require('fs');

function getData(url) {
	let data = 0;

	data = fs.readFileSync(__dirname + url)

	return data;
}

const server = http.createServer(function (req, res) {
	switch(req.url) {
		case "/":
				res.writeHead(200, {'Content-Type': 'text/html'});
				res.end(getData(req.url + "index.html"));
            break
		case "/index.html":
				res.writeHead(200, {'Content-Type': 'text/html'});
				res.end(getData(req.url));
            break
		case "/script.js":
				res.writeHead(200, {'Content-Type': 'text/javascript'});
				res.end(getData(req.url));
            break
		case "/styles.css":
				res.writeHead(200, {'Content-Type': 'text/css'});
				res.end(getData(req.url));
            break
	}
	
}).listen(8080);