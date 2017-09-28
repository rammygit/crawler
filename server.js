
const express = require('express')
//const util = require('./app/utility')
const handler = require('./app/handler')
var bodyParser = require('body-parser');

const app = express()
const port = 3001

app.use(express.static(__dirname))
app.use(bodyParser.json()); // support json encoded bodies
app.use(bodyParser.urlencoded({ extended: true })); // support encoded bodies
/**
 * home page.
 * loads the db.
 * serving the index.html from the current directory on hiting
 * localhost:port(3001)
 */
app.get('/', function(request,response) {
    // check if table got created on the first call. create the connection
    console.log('calling root route.')
    handler.initDBHandler()
    response.sendFile(__dirname+ '/index.html');
});

/**
 * todo api for display todo
 */
app.get('/todo', handler.todoResponseHandler)

/**
 * API to add a todo.
 */
app.post('/addTodo', handler.addTodoHandler);

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