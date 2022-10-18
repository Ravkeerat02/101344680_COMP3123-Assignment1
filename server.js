const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const employeeRouter = require('./routes/employeeRoute');
const userRouter = require('./routes/userRoute');

const SERVER_PORT = 4000 //port numberer initialized

//DB connection string
const DB_URL = "mongodb+srv://RK_02:crazyShit@cluster0.iu4uasl.mongodb.net/assignment_db?retryWrites=true&w=majority"

const app = express();

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

mongoose.Promise = global.Promise;

mongoose.connect(DB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log("Successfully connected to the database mongoDB Atlas Server");    
}).catch(err => {
    console.log('Could not connect to the database. Exiting now...', err);
    process.exit();
});

app.use("/api/emp/",employeeRouter) //For the employee page

app.use("/api/user/",userRouter) // For the user page

app.route("/").get((req,res)=>{
    res.send("<h1>Assignment 1 - MongoDb using NodeJS and Express</h1>");
})
    
//Refers to the port beign used 
app.listen(SERVER_PORT, () =>{
    console.log(`Server running at http://localhost:${SERVER_PORT}/`)
})