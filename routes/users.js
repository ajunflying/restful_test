// var express = require('express');
// var router = express.Router();

// /* GET users listing. */
// router.get('/', function(req, res, next) {
//   res.send('respond with a resource');
// });

// module.exports = router;

module.exports = users;

function users(){};

users.test1 = function(req, res){
	res.send("this is users>test1");
}

users.test2 = function(req, res){
	console.log(req.params);
	res.send("this is users>test2");
}

users.test3 = function(req, res){
	console.log(req.params);
	res.send("this is users>test3");
}