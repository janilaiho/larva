var express = require('express');
var router = express.Router();


router.get('/', function(req,res){
 res.sendfile('/larvafam/larvafam/public/index.html');
}); 

router.get('/index', function(req,res){
 res.sendfile('/larvafam/larvafam/public/index.html');
}); 
module.exports = router;