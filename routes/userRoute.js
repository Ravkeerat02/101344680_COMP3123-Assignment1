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
        const newUser = new userModel({username: request.body.username, email: request.body.email,password:request.body.password});
        await newUser.save()
        response.status(201).send(newUser)
        
    } catch (error) {
        response.status(500).json({
            message: error.message
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
        response.status(200).json({"username": user.username, "password": user.password})
    }
    else {
        response.status(400).json('Invalid username or Incorrect password');
    }
});
 
module.exports = routes;