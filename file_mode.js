const fs = require('fs')

// read and write mode
// fs.open('example.txt', 'r+', (err, data)=>{
//   if(err) {
//     console.error("error while opening file: ", err)
//     return;
//   }
//   console.log("file open for reading and writing mode"); 
// });
fs.open("demo.txt", 'a+', (err, data)=>{
    if (err){
        console.error("error while appending data: ", err)
             return;
    }
    console.log("file open for append mode"); 
    fs.close(data, (err)=>{
        if (err){
            console.error("error while closing file: ", err)
                 return;
        }
        console.log("file closed successfully"); 
    })
})