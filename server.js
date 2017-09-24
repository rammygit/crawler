
const express = require('express')
const util = require('./app/utility')
const db = require('./app/connection')
const dao = require('./app/dataUtil')
const app = express()
const port = 3001

//app.use(express.static(__dirname))

/**
 * home page.
 * loads the db.
 * serving the index.html from the current directory on hiting
 * localhost:port(3001)
 */
app.get('/', function(request,response) {
    // check if table got created on the first call. create the connection
    console.log('calling root route.')
    dao.initDB(db);
    response.sendFile(__dirname+ '/index.html');
});

/**
 * express gives default router for us to work with
 */
app.get('/chance', function (request, response) {
    console.log('calling chance api ')
    response.json({
        chance: request.chance
    })
})


// var responsehandler = function(err,data){
//     if(err){
//         console.log('error occured printed in  callback')
//     }
//     console.log('in callback ->'+data);

// }

// var completeHandler = function(err,totalRows,resultarray){
//     console.log('call completed ....'+totalRows)
//     console.log('result at complete -> '+JSON.stringify(resultarray))


// 

var todoResponseHandler = function (request, response) {

    console.log('calling todo .. ')
    dao.getTodos(db,[],function(err,totalRows,resultarray){
        response.json(resultarray)
    })   
    //dao.insertTodo(db,[],response)
}

/**
 * todo api for display todo
 */
app.get('/todo', todoResponseHandler)

/**
 * generic error handling. 
 * express way of handling error.
 * things to note, it has the error parameter and next parameter.
 * with next we can chain multiple error handlers.
 */
app.use(function (err, request, response, next) {
    console.log(err)
    response.status(500).send('Something broke!')
})

/**
 * upgraded the low-level server expression by using express app.
 */
app.listen(port, function (err) {
    if (err) {
        return console.log('something bad happened', err)
    }
    console.log('server is listening on port ' + port)
})