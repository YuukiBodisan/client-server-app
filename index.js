const { readFileSync } = require("fs")
const { createServer } = require("http")
const server = createServer()
const port = 5637

server.listen(port)

server.on("request", handleRequest)

function handleRequest(request, response) {
    console.log("request:", request.method, request.url)

    if (request.url == '/') {
        const html = readFileSync('index.html')
        response.end(html)
    } else if (request.url == '/style.css') {
        const css = readFileSync('style.css')
        response.end(css)
    } else if (request.url == '/favicon.ico') {
        const icon = readFileSync('favicon.ico')
        response.end(icon)
    } else if (request.url == '/script.js') {
        const js = readFileSync('script.js')
        response.end(js)
    } else {
        response.statusCode = 404
        response.end('file not found: ' + request.url)
    }

}