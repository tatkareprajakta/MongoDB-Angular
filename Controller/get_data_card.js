var express = require('express');
var router = express.Router();
var User = require('../Model/data_card.js');
console.log("in get card");

router.post('/', function(req, res) {

console.log("req.decode",req.decode);
    User.get_data(req.decode, function(err, result) {

    if(result)
      {
      console.log("in data_info",result);
        res.send({"data_info":result,"status":true})
      }
      else
      {
        res.send({message:"err","status":false})
      }





    });

  });





module.exports = router;
