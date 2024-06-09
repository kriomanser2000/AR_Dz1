const http = require("http");
const url = require("url");
const address = "http://localhost:8080/default.htm?year=2017&month=february";
const parsedUrl = url.parse(address, true);
http.createServer((request, response) => 
{
    response.writeHead(200, {"Content-Type": "text/html"});
    const host = parsedUrl.host;
    const pathname = parsedUrl.pathname;
    const query = parsedUrl.query;
    response.write(`<h1>Parsed URL Information</h1>`);
    response.write(`<p>Host: ${host}</p>`);
    response.write(`<p>Pathname: ${pathname}</p>`);
    response.write(`<p>Query Parameters:</p>`);
    response.write(`<ul>`);
    for (const key in query) 
    {
        response.write(`<li>${key}: ${query[key]}</li>`);
    }
    response.write(`</ul>`);
    response.end();
}).listen(3000);
console.log("Server running at http://localhost:3000/");