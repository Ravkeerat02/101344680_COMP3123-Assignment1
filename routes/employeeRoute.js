//initializing var here 
const express = require("express");
const mongoose = require("mongoose");
const routes = express.Router()
//connects routes to model
const employeeModel = require("../models/employee")

//gets all employee list
routes.get('/employees',async(request,response) =>{
    
    try{
        const employee = await employeeModel.find()
        response.status(200).json(employee);
    }catch(error){
        response.status(500).json({message:error.message});
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
       const getEmployee = await employeeModel.findById(request.params.empID,request.body)
       response.send(getEmployee)
    }catch(error){
        response.status(400).json({message:error.message});
    }
});
 //Updating employee
 routes.put('/employees/:empID' ,async(request,response) =>{
    try{
        const updateEmployee = await employeeModel.findByIdAndUpdate(request.params.empID,request.body)
        response.send(updateEmployee)
    }
    catch(error){
        response.status(400).json({message:error.message})
    }
})

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