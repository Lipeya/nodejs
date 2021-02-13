const http = require('http');
const { URL } = require('url');
const querystring = require('querystring');

const serverOrigin = 'http://localhost:3000';

const server = http.createServer(function(request, response){

	var _url = request.url;
	var url = new URL(_url,serverOrigin);

	var query = querystring.parse(url.search.substr(1));
	var description = query.id;
	
	var template = `
	<!doctype html>
	<html>
	<head>
		<meta charset = "utf-8">
	</head>
	<body>
		${description}
	</body>
	</html>
	`;

	response.writeHead(200);
	response.end(template);
});

server.listen(3000);
	

