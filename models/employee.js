const mongoose = require('mongoose');
// //creating a schema to store the object
// {SAMPLE
// //     "first_name" : "John",
//         "last_name" : "Doe",
//         "email" : "john@example.com
//         "salary" : 100000.00
//         "gender" : "male"   
// // }
const employeeSchema = mongoose.Schema({

    first_name:{
        type:String,
        required: true,
        max:100
    },

    last_name:{
        type:String,
        required: true,
        max:50
    },

    email:{
        type:String,
        required: true,
        unique: true,
        max:50
         
    },

    salary:{
        type:Number,
        required: true
    },

    gender:{
        type: String,
        //enum - sets to predefined values - here it refers to different gender
        emum :['Male','Female','Other' ],
        max:25,

    }
})

module.exports = mongoose.model('employee', employeeSchema);