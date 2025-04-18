const FAQ=require("../models/faqModel");

exports.addFAQ=async(req,res)=>{
    try{
        const {question,answer} = req.body;
        const newFAQ = await FAQ.create({question,answer});
        res.status(201).json(newFAQ);
    }
    catch(error){
        res.status(400).json({ message: error.message });
    }
};

exports.getAllFAQs= async (req,res)=>{
    try{
        const faqs=await FAQ.find();
        res.status(200).json(faqs);
    }
    catch(error){
        res.status(500).json({message:error.message});
    }
};