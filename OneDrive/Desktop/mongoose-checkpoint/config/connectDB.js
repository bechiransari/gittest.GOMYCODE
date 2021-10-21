const mongoose=require("mongoose");

const connectDB= async ()=>{
    try { 
        await mongoose.connect('mongodb://localhost:27017/contactList');

 console.log("database is connected")
        
    } catch (error) {
        console.log("database is not connected")
    }

};

module.exports=connectDB;