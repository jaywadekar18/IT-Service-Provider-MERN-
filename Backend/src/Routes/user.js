const express = require('express');
const router= express.Router()
const Datacollection = require('../models/user')

router.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });
router.get('/',(req,res)=>{

 const d1= "hello from backend :hjvjhhvghb"
    res.send(JSON.stringify(d1))
})
router.get("/data", async (req, res) => {
  try {
      const sendfind = await Datacollection.find()
      res.send(sendfind)

  }
  catch (e) {
      res.status(400)
      res.send(e)
  }
})
router.post("/", async (req, res) => {
  try {
      console.log(req.body);
      const user = new Datacollection(req.body)
      const createuser = await user.save()
      res.status(201)
      res.send(createuser)
      
      
  }
  catch (e) {
      res.status(400)
      res.send(e);
  }
})
router.post("/data", async (req, res) => {
  try {
      console.log(req.body);
      
      res.status(201)
      res.send("receive zala backend la")
  }
  catch (e) {
      res.status(400)
      res.send(e);
  }
})


module.exports= router;



