const fs = require('fs')
const http = require('http')

http.createServer((req, res) => {
    // appending in file/
    // fs.appendFile('index.html','<h1>This is append file example</h1>',(err, data)=>{

    //   if (err)throw err
    //   console.log("file updated");
    //   return res.end()
    // })
 
    // file reading op
    // fs.readFile('index.html', (err, data) => {
    //     res.writeHead(200, { 'content-type': 'text/plain' });
    //     res.write(data)
    //     res.end();

    // })

}).listen(4000)


