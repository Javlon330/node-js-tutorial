const http = require('http');
const path = require('path');
const fs = require('fs')



const server = http.createServer( 
  (req, res) => {
    if(req.url == '/'){
      res.writeHead(200,)
    }
    console.log(req.url);

});

server.listen(3033, () => {
  console.log(`server is running port ${3033}`)
})
