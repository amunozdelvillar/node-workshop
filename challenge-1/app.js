// load module dependencies
var http = require('http'),
    fs = require('fs');

http.createServer(function(request,response) {
    //: Find the Async, non-blocking API for reading a file.
    fs.readFile('./data.csv','utf-8', function(err,data){
        var responseData = {};

        //Basic JS: Work with the data in the file, and create the response
        var lines = data.split('\n');


        //Note the native support for array in Node!
        lines.forEach(function(line){
            var parts = line.split(',');
            responseData[parts[0]] = parts[1];
        });

        //: How do we set the content type we're sending back?
        response.writeHead(200, {
            'Content-Type':'application/json'
        });

        //: How do we serialize responseData to a JSON string?
        response.end(JSON.stringify(responseData));
    });
}).listen(3000);

console.log('node server running in port 3000.');