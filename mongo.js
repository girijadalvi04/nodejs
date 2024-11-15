const mongoose = require('mongoose')
const mongoUrl = "mongodb+srv://girijadalvi:Girija%40123@cluster0.hq5sc.mongodb.net/Node"

mongoose.connect(mongoUrl)
console.log("connected successfully");

const db = mongoose.connections;

db.on('error',console.error.bind(console,'MongoDB Connection error'));

db.once('open', () => {
    console.log("connection successful");

    db.createCollection('database', (err, result) => {
        if (err) {
            console.error("Error while creating collection:", err)
        }
        else {
            console.log("collection created")
        }

        mongoose.connection.close();
    })


})
