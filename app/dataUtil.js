var sqlite = require('sqlite3').verbose();
var path = require('path');
const dbPath = path.join('/Users/ramkumar/Documents/gitrepo/', '/CrawlerDB/crawler_data.db');
//console.log(dbPath)

const create_todos = "CREATE TABLE `todo` (\n" +
    "\t`id`\tINTEGER NOT NULL,\n" +
    "\t`title`\tTEXT NOT NULL,\n" +
    "\t`description`\tTEXT,\n" +
    "\t`status`\tINTEGER NOT NULL DEFAULT 0\n" +
    ");"
var all_todos = "SELECT id AS id, title as title, description as desc,status as status FROM todos " +
        "ORDER BY status ASC, id DESC"
var add_todo = "INSERT INTO todos (description, done) VALUES (?, 0)"
var delete_todo = "DELETE from todos WHERE rowid=?"
var toggle_todo = "UPDATE todos SET description=? WHERE rowid=?";



var db = new sqlite.Database(dbPath, sqlite.OPEN_READWRITE,function(err) {
    if (err) {
        return console.error(err.message);
    }
    console.log('Connected to the in-memory SQlite database.');
});

db.run(create_todos);

// close the database connection
db.close(function(err) {
    if (err) {
        return console.error(err.message);
    }
    console.log('Close the database connection.');
});