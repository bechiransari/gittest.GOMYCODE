const express =require("express");
const { getAllContact, addContact, getContacById, deleteContact, editContact } = require("../config/controlers/contact.controlers");
const Contact = require("../config/models/Contact");
const router=express.Router();
// test
//router.get("/",(req,res)=>{
   // res.send("hi")
//})
// create new contact

router.post("/",addContact);

//read => GET

router.get("/",getAllContact);

// get by id

router.get("/:id",getContacById);

//deletee by id

router.delete("/:id",deleteContact);

// update contact
// req .params req.body
router.put("/:id",editContact)



module.exports=router;