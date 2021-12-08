const http = require("http");

const server = http.createServer((req, res) => {
    res.writeHead(200, { "content-type": "text/html" });
    const read = req.url
    if (read === "/about") {
        res.write("Welcome to about us page")
        res.end();
    }
    else if (read === "/contact") {
        res.write("Welcome to contact us page")
        res.end();
    }
    else {
        res.write("Hello world");
        res.end();
    }
});

server.on("listening", () => {
    console.log("port 8000");
});

server.listen(8000);