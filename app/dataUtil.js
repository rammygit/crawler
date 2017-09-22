var sqlite = require('sqlite3').verbose();
var path = require('path');
const dbPath = path.join('/Users/ramkumar/Documents/gitrepo/', '/CrawlerDB/crawler_data.db');
//console.log(dbPath)

var db = new sqlite.Database(dbPath, sqlite.OPEN_READWRITE,function(err) {
    if (err) {
        return console.error(err.message);
    }
    console.log('Connected to the in-memory SQlite database.');
});


// close the database connection
db.close(function(err) {
    if (err) {
        return console.error(err.message);
    }
    console.log('Close the database connection.');
});