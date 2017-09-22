
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

/**
 * todo api for display todo
 */
app.get('/todo', function (request, response) {

    console.log('calling todo .. ')

    util.readFileContent(response, '/Users/ramkumar/Documents/oracle/docs/todo.txt')
})

/**
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