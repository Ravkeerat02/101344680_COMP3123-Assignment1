const mongoose = require('mongoose');
/* SAMPLE DATE
{
    username : "p@p.com",
    "password" : "password$123",
    "email" : ""abc@gmail.com"

}
*/

//creating schema to store the objects
const userSchema = new mongoose.Schema({
    
    username :{
        type: String,
        required: true,            
        primaryKey: true,
        max: 100,
    },

    email:{
        type: String, 
        required:true,
        max:100
    },
    
    password:{
        type:String,
        required:true,
        unique: true
    }

});
const mongoose = require('mongoose');