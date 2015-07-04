
var routes = require('./routes/index');
var users = require('./routes/users');


module.exports =  {
	"get":{
		"/api/users": users.test1,
		"/api/users/:id": users.test2,
		"/api/users/:id/:name": users.test3
	},
	"post":{},
	"put":{},
	"del":{}
};