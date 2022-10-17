const mongoose = require('mongoose');

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

module.exports = mongoose.model('user', userSchema);