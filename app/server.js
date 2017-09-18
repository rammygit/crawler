//const http = require('http')
const express = require('express')
const util = require('./utility')
const app = express()
const port = 3001

/**
 * low-level http handler.
 */
/*const requestHandler = (request, response) => {
    console.log(request.url)
    response.end('Hello Node.js Server!')
}

const server = http.createServer(requestHandler)*/

/**
 * implementing middlewares
 */
app.use(function (request, response,next) {
    console.log('First Middleware encountered for this request.')
    next()
})

app.use(function(request,response, next){
    request.chance = Math.random()
    next()
})



/**
 * express gives default router for us to work with
 */
app.get('/chance', function (request, response) {

    response.json({
        chance:request.chance
    })
})

/**
 * todo api for display todo
 */
app.get('/todo', function (request, response) {
     util.readFileContent(response,'todo.txt')
    //response.json(data)
})

/**
 * express way of handling error.
 * things to note, it has the error parameter and next parameter.
 * with next we can chain multiple error handlers.
 */
app.use(function(err, request, response, next) {
    // log the error, for now just console.log
    console.log(err)
response.status(500).send('Something broke!')
})

/**
 * upgraded the low-level server expression by using express app.
 */
//server.listen(port,function(err) {
app.listen(port, function (err) {

    if (err) {
        return console.log('something bad happened', err)
    }

    console.log('server is listening on port ' + port)

})