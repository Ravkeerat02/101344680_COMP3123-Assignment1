//initializing var here 
const express = require("express");
const mongoose = require("mongoose");
const routes = express.Router()
//connects routes to model
const employeeModel = require("../models/employee")

//gets all employee list
routes.get('/employees',async(request,response) =>{
    const employee = new employeeModel(request.body);
    try{
        await employee.save();
        response.status(200).send(employee);
    }catch(error){
        response.status(400).send(employee);
    }
})

//POST /api/emp/employees
routes.post('/employees',async(request,response) =>{
    const employee = new employeeModel(request.body);
    try{
        await employee.save();
        response.status(201).send(employee);
    }catch(error){
        response.status(400).send(employee);
    }
});

//GET - Gettign employee through ID
routes.get('/employees/:empID',async(request,response) =>{
    try{
        response.send(await employeeModel.findById(request.params.empID,request.body));
    }catch(error){
        response.status(400).send(error);
    }
});
 //Updating employee
 routes.put("/employees/:empID",async(request,response) =>{
    if(!request.body.content){
        return response.status(400).send({
            message: "Employee cant be empty",
        })
    }else{
        await employeeModel.findByIdAndUpdate(request.params.empID,request.body.content);
        response.send("Updated Sucessfully");
    }
    });

//Deleting an employee
routes.delete("/employees/:empID",async(request,response) =>{
    try{
        await employeeModel.findByIdAndDelete(request.params.empID);
        response.send("Deleted Sucessfully");
    }catch(error){
        response.status(400).send(error);
    }
});

module.exports = routes