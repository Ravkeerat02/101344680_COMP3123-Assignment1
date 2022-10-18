//initializing var here 
const { response } = require("express");
const express = require("express");
const mongoose = require("mongoose");
const routes = express.Router()

//connecting route to model 
const userModel = require("../models/user")

//Signup
routes.post('/signup', async (request, response) => {
    try {
        const newUser = new userModel(request.body)
        await newUser.save()
        response.status(201).send({
            created_user: newUser
        })
    } catch (err) {
        response.status(500).send({
            "status": false, 
            "message": err.message
        })
    }
});


//TODO - Login
routes.post('/login', async (request, response) => {

    const { username, password } = request.body;
    const user = await userModel.findOne({
        username: username,
        password : password
    })

    if(user.password === password) {
        res.status(200).json({"username": user.username, "password": user.password})
    }
    else {
        response.status(400).send('Invalid username or Incorrect password');
    }
});
 
module.exports = routes