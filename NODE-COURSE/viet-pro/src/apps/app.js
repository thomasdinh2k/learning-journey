var http = require('http');


http.createServer( function(req,res) {
    // console.log(`Hello on port ${port}`);
    res.write(`<h1>PORT ${port}</h1>`);
    res.write(`Hello NodeJS on port ${port}\n`);
    res.end();
}).listen(port=8000);