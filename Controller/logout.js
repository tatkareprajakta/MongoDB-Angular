var express=require('express');
router=express.Router();
router.post('/',function(req,res){
  // console.log(req.decode);
  res.clearCookie('cookie');
  res.send({"message":"logged out"});



});
module.exports=router;
