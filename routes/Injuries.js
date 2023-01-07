const router = require("express").Router();
const Injury = require("../models/Injuries");

router.get("/test",(req,res)=>{
    res.send("injuries test is successfull");
});
router.post("/add",async(req,res)=>{
    const {comment,datedebut,description,degree,name,player,urlimage} = req.body;
    const verfInjury = new Injury ({
        comment:comment ,
        datedebut: datedebut,
        description:description,
        degree:degree,
        name:name,
      player: player,
      urlimage:urlimage
      });
    try {
      const savedInjury = await verfInjury.save();
      res.status(200).json(savedInjury);
    } catch (error) {
      res.status(500).json(error.message)
    }
  });
  router.post("/getall",async(req,res)=>{
    const {playerid}=req.body;
    
  try {
    
         ten = await Injury.find({player:playerid});
         
         res.status(200).json({
          "injuries": ten
         });
  } catch (error) {
    res.status(500).json(error.message);
  }
  });
module.exports=router;