const { sendFormPage } = require("./routes");
const { parseBody } = require("./parse-body");
let server;

/******************************************************************************/
/******************* DO NOT CHANGE THE CODE ABOVE THIS LINE *******************/

// Your code here
const http = require('node:http');
const port = 3030;
server = http.createServer((req, res) => {
    // Request items
    req.body = "";

    req.on('data', (data) => {
        req.body += data;
    });

    console.log(req.body)

    req.on('end', () => {
        console.log(req.method, req.url);
        if (req.body) {
            req.body = parseBody(req.body);
            console.log(req.body)
        }
        sendFormPage(req, res);
    });
});

server.listen(port, () => {
    console.log('Successfully started the server on port 3030');
});

/******************************************************************************/
/******************* DO NOT CHANGE THE CODE BELOW THIS LINE *******************/

module.exports = { server };