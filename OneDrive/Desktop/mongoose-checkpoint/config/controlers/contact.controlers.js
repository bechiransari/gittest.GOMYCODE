const Contact = require("../models/Contact");

exports.addContact = async(req,res)=>{
   try {

// before saving the new contact we should check if it already exist
const findUser = await Contact.findOne({email: req.body.email});
if (findUser){
    return res.status(400).send({msg:"email should be unique"});
}
 
       const newContact= new Contact({...req.body});
    await newContact.save();
    res.send({msg:"user is saved", newContact});
    console.log(newContact)
       
   }catch (error) {
       res.status(400).send({msg:"can not create contact",error});
   }
    

   
};
exports.getAllContact = async(req,res)=>{
    try {
        const contactList= await Contact.find();
        res.send({contactList, msg:"all contacts gotten"}) 
    } catch (error) {
         res.status(400).send({msg:"cannot get contacts",error})
    }
};
exports.getContacById = async(req,res)=>{
    try {
        const {id}=req.params;
         findContact = await Contact.findById(id)
        res.send({msg:"contct found succ",findContact})
    } catch (error) {
        res.status(400).send({msg:"cannot find the given contact",error})
    }
};
exports.deleteContact = async(req,res)=>{
    try {
        const {id}=req.params;
        await Contact.deleteOne({_id:id});
        res.send("contact deleted")
    } catch (error) {
        res.status(400).send({msg:"cannot delete contact",error})
    }
};
exports.editContact = async(req,res)=>{
    try {
        const{id}=req.params
        await Contact.updateOne({_id:id},{$set:{...req.body}});
        res.send({msg:"contact updated"})
    } catch (error) {
        res.status(400).send({msg:"cannot update contact",error})
    }
};
