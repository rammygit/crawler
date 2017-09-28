const db = require('./connection')
const dao = require('./dataUtil')


/**
 * contains logic for handling the incoming request and return return appropriate response. 
 * 
 * @type {Object}
 */
var handler = {

	initDBHandler:function(){
		dao.initDB(db);
	},
	todoResponseHandler : function (request, response) {
	    //console.log('calling todo inside handler  .. ')
	    dao.getTodos(db,[],function(err,totalRows,resultarray){
	        response.json(resultarray)
	    })       
	},
	addTodoHandler:function(request,response){
		console.log('add todo handler called!')
		dao.insertTodo(db,[request.body.todoText,request.body.todoDesc,0])
	}
}

module.exports = handler

