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
        response.status(200).json(employee);
    }catch(error){
        response.status(400).json(employee);
    }
})

//POST /api/emp/employees
routes.post('/employees',async(request,response) =>{
    const employee = new employeeModel(request.body);
    try{
        await employee.save();
        response.status(201).json(employee);
    }catch(error){
        response.status(400).json(employee);
    }
});

//GET - Gettign employee through ID
routes.get('/employees/:empID',async(request,response) =>{
    try{
        response.json(await employeeModel.findById(request.params.empID,request.body));
    }catch(error){
        response.status(400).json(error);
    }
});
 //Updating employee
 routes.put("/employees/:empID",async(request,response) =>{
    if(!request.body.content){
        return response.status(400).json({
            message: "Employee cant be empty",
        })
    }else{
        await employeeModel.findByIdAndUpdate(request.params.empID,request.body.content);
        response.json("Updated Sucessfully");
    }
    });

//Deleting an employee
routes.delete("/employees/:empID",async(request,response) =>{
    try{
        await employeeModel.findByIdAndDelete(request.params.empID);
        response.json("Deleted Sucessfully");
    }catch(error){
        response.status(400).json(error);
    }
});

module.exports = routes