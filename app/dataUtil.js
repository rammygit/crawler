

const create_todos = "CREATE TABLE IF NOT EXISTS `todo_test` (\n" +
    "\t`id`\tINTEGER NOT NULL,\n" +
    "\t`title`\tTEXT NOT NULL,\n" +
    "\t`description`\tTEXT,\n" +
    "\t`status`\tINTEGER NOT NULL DEFAULT 0\n" +
    ");"

/**
 * loads the sqlite3 using the sepcified the db path.
 * error message will be returned on connection failure.
 * calls the create 'todos' table.
 * creates only if the table does not exist.
 */
exports.initDB = function(db){
    console.log('running init db')
    db.run(create_todos);
}

// close the database connection
exports.closeConnection = function(err) {
    if (err) {
        return console.error(err.message);
    }
    console.log('Close the database connection.');
};