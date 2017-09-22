var sqlite = require('sqlite3').verbose();
var path = require('path');

const dbPath = path.join('/Users/ramkumar/Documents/gitrepo/', '/CrawlerDB/crawler_data.db');

const create_todos = "CREATE TABLE `todo_test` (\n" +
    "\t`id`\tINTEGER NOT NULL,\n" +
    "\t`title`\tTEXT NOT NULL,\n" +
    "\t`description`\tTEXT,\n" +
    "\t`status`\tINTEGER NOT NULL DEFAULT 0\n" +
    ");"


var connection = new sqlite.Database(dbPath, sqlite.OPEN_READWRITE,function(err) {
    if (err) {
        return console.error(err.message);
    }
    console.log('Connected to the in-memory Sqlite database.');
});



module.exports = connection;