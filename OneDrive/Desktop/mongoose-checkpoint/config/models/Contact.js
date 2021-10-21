const mongoose = require("mongoose");
const {Schema}=mongoose;
constmongoose = require("mongoose");

const contactschema = new Schema({
    name: String,
    lastname:{
        type: String,
        required:true,
    },
    email:{
        type:String,
        required:true,
    },
    phonenumber:Number,
    
    adress:String,
     
    

})

module.exports= contact= mongoose.model("contact", contactschema);