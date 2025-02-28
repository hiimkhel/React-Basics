const express = require("express");
const router = express.Router();
const Contact = require("../models/models");

//Get all Contacts
router.get("/", async (req, res) =>{
    try{
        const contacts = await Contact.find();
        res.json(contacts);
    }
    catch(err){
        res.status(500).json({error: err.message});
    }
});

//Add new contact
router.post("/", async(req, res) =>{
    const {name, email} = req.body;
    try{
        const newContact =  new Contact({name, email});
        await newContact.save();
        res.status(201).json(newContact);
    }
    catch(err){
        res.status(400).json({error: err.message});
    }
});

//Get specific Contact
router.get("/:id", async(req, res) =>{
    const contact = await Contact.findById(req.params.id);

    if(!contact){
        res.status(400);
        throw new Error("Contact is not found!");
    }
    res.status(200).json(taskName);
});

//Update specific contact
router.put("/:id", async(req, res) =>{
    
    try{
        const contactToUpdate = await Contact.findByIdAndUpdate(req.params.id, req.body, {new: true});
        res.json(contactToUpdate);
    }
    catch(err){
        res.status(400).json({error: err.message})
    }
});

//Delete specific Contact
router.delete("/:id", async(req, res) =>{
    try{
        await Contact.findByIdAndDelete(req.params.id);
        res.json({message: "Contact deleted"});
    }
    catch(err){
        res.status(400).json({ error: err.message });
    }
})

module.exports = router;

