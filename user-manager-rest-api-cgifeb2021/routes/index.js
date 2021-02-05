var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
 
  res.json({
    appName: 'User Manager',
    pageName: 'Home Page',
    time: new Date()
  });

});


module.exports = router;
