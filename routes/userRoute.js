const { response } = require("express");
const express = require("express");
const mongoose = require("mongoose");
const routes = express.Router()

const userModel = require("../models/user")

routes.post('/signup', async (req, res) => {
    try {
        const newUser = new userModel(req.body)
        await newUser.save()
        res.status(201).send({
            created_user: newUser
        })
    } catch (err) {
        res.status(500).send({
            "status": false, 
            "message": err.message
        })
    }
});


//TODO - Login
routes.post('/login', async (req, res) => {
    // try{
    //     const user = new UserModel.findOne(req.body.username)
    //     if(!user){
    //         res.status(404).send("No user found!")
    //     }response.status(2).send(user)
    // }catch(err){
    //     res.status(500).send(err)
    // }
    
    const { username, password } = req.body;
    const user = await userModel.findOne({

        username: username,
    })

    if(user.password === password) {
        res.status(200).json({"username": user.username, "password": user.password})
    }
    else {

        res.status(400).send('Invalid username or Incorrect password');
    }
});
 
module.exports = routes