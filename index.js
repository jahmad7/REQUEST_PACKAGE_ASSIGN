// require `request` and the Node `fs` (filesystem) module
var request = require('request');
var fs = require('fs');

request.get('https://sytantris.github.io/http-examples/future.jpg')               // Note 1
       .on('error', function (err) {                                   // Note 2
         throw err; 
       })
       .on('response', function (response) {                           // Note 3
         console.log('Response Status Code: ', response.statusCode);
         console.log("message: ", response.statusMessage);
         console.log(response.headers['content-type'])
       })
       .pipe(fs.createWriteStream('./future.jpg'));               // Note 4
       console.log("completed");

// Notes:
// 1. `request.get` is equivalent to `request()`
// 2. `request.on('error', callback)` handles any error
// 3. `request.on('response, callback)` handles the response
// 4. allows us to use fs's write stream to create a file with the content we want at given file name 