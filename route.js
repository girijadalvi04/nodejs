const express = require('express').Router();
const route = require('express').Router();

const userModule = require('./module')
//  encryption
const bcrypt = require('bcrypt')
// 

// valid
const { registerValidation } = require('./validation')


route.post('/register', async (req, res) => {
    const { error } = registerValidation(req.body)
    if (error) return res.status(404).send(error.details[0].message)
    // 


    //    encrp
const salt = await bcrypt.genSalt(10)
 

const hashpassword = await bcrypt.hash(req.body.password, salt)
// 

    //  chk if email id is repeat
    const emailExist = await userModule.findOne({ email: req.body.email })
    if (emailExist) return res.status(404).send("email already exists")
    // 

    const newUser = new userModule({
        name: req.body.name,
        email: req.body.email,
        mobile: req.body.mobile,
        // password: req.body.password

        password : hashpassword 
    })
    try {
        const saveData = await newUser.save();
        res.send(saveData)

    }

    catch (error) {
        console.log(error);

    }
})

// showdata
route.get("/showData", async (req, res) => {
    try {
        const showdata = await userModule.find();
        res.send(showdata)
    }
    catch (error) {
        console.log(error);
    }
})
//    deletedata
route.delete("/delete", async (req, res) => {
    let id = req.query.id;
    try {
        const deleteData = await userModule.findByIdAndDelete(id)
        res.send('Delete data successfully')
    } catch (error) {
        console.log(error);
    }

})
//  updatedata

route.post("/update", async (req, res) => {
    let _id = req.body._id;
    try {
        const updateData = await userModule.findByIdAndUpdate(_id, req.body)
        res.send("Data updated successfully")
    } catch (error) {
        console.log(error);
    }
})
// showdone user
route.get("/showOne", async (req, res) => {
    const id = req.query.id
    try {
        const showdone = await userModule.findById(id)
        res.send(showdone)
    } catch (error) {
        console.log(error);
    }
})
module.exports = route;
