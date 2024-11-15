const express = require('express');
const app = express();

app.use(express.json());
const mongoose = require('mongoose')



const router = require('./route')
app.use("/user",router)



// mongoose.set('strictQuery', true)
// mongoose.connect("mongodb+srv://girijadalvi:Girija%40123@cluster0.hq5sc.mongodb.net/web_database?retryWrites=true&w=majority&appName=Cluster0",(err, data)=>{

//  if(err) throw err
//    console.log(("Connection created"));
// })
  mongoose.connect("mongodb+srv://girijadalvi:Girija%40123@cluster0.hq5sc.mongodb.net/web_database?retryWrites=true&w=majority&appName=Cluster0")
  .then(()=>{
    console.log("connection successful")
  })

  .catch((err)=>{
    console.log( `There will be some error ${err}`);
  })
// To access data
// app.get('/',(req, res)=>{
// res.send("Hello World..!")
// })
// app.post('/',(req, res)=>{
//   res.send("post mtd"); 
// })

app.listen(4000);

