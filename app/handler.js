const db = require('./connection')
const dao = require('./dataUtil')


var handler = {

	initDBHandler:function(){
		dao.initDB(db);
	},
	todoResponseHandler : function (request, response) {
	    console.log('calling todo inside handler  .. ')
	    dao.getTodos(db,[],function(err,totalRows,resultarray){
	        response.json(resultarray)
	    })       
	},
	addTodoHandler:function(request,response){
		console.log('add todo handler called!')
	}
}

module.exports = handler

