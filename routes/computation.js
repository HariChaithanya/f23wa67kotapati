var express = require('express');
const { param } = require('./users');
var router = express.Router();



/* GET compuatation reults */
router.get('/', function(req, res, next) {
    par =req.query.x;
    if(res==undefined)
    res=(Math.random()*100);
    f1=Math.acosh(par);
    f2=Math.log1p(par);
    f3=Math.tan(par);
    f4 = Math.sqrt(par)
  
  res.send(`acosh of ${par} is ${f1},log1p of ${par} is ${f2} , tan of ${par} is ${f3} and sqrt of ${par} is ${f4} `);
  
});

module.exports = router;