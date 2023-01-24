const router = require("express").Router();
const pdf = require("../models/Pdf");

router.get("/test",(req,res)=>{
    res.send("pdfs test is successfull");
});
router.post("/add",async(req,res)=>{
    const {pdfurl} = req.body;
    const verfpdf = new pdf ({
        pdfurl:pdfurl
      });
    try {
      const savedpdf = await verfpdf.save();
      res.status(200).json(savedpdf);
    } catch (error) {
      res.status(500).json(error.message)
    }
  });
router.get("/getall",async(req,res)=>{
    try {
      const all =await pdf.find({});
      res.status(200).json({
        "Pdfs": all
      });
    } catch (error) {
      res.status(500).json(error);
    }
    
  
  });
  router.post("/delete",async(req,res)=>{
    const {deletedid}=req.body;
   
    try {
      const resultat = await pdf.findOneAndRemove({_id: req.body.deletedid});
      res.status(200).json(resultat);
    } catch (error) {
      res.status(500).json(error.message);
    }
  });
module.exports=router;