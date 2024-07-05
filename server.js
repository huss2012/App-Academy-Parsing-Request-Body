const { sendFormPage } = require("./routes");
const { parseBody } = require("./parse-body");
let server;

/******************************************************************************/
/******************* DO NOT CHANGE THE CODE ABOVE THIS LINE *******************/
const http = require('http');
// Your code here
//1.Create the server:
server = http.createServer((req, res) => {

    let bodyStr = '';
    req.on('data', data => bodyStr += data);

    req.on('end', () => {
        req.body = parseBody(bodyStr);

        sendFormPage(req, res);
    });
});

//2.Create the port:
let port = 8000;

//3.Make he server to listen for the port:
server.listen(port, () => console.log(`Successfully started the server on port ${port}`));
/******************************************************************************/
/******************* DO NOT CHANGE THE CODE BELOW THIS LINE *******************/

module.exports = { server };
