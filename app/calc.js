const _ = require('underscore');
const fs = require('fs');

var content;

/**
 * reads the file in the async way.
 * @param fileName
 */
function readFileContent(fileName){

console.info('started reading file...')
    fs.readFile(fileName, 'utf-8', function (err, content) {
        if (err) {
            return console.log(err)
        }

        console.log(content)
    })

    console.info('end reading file')
}


console.log(content)


function sum (arr) {
    readFileContent('todo.txt')
    return arr.reduce(function(a, b) {
        return a + b
    }, 0)
}

module.exports.addIt = sum;