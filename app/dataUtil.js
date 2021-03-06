

const create_todos = "CREATE TABLE IF NOT EXISTS `todo` (\n" +
    "\t`id`\tINTEGER NOT NULL,\n" +
    "\t`title`\tTEXT NOT NULL,\n" +
    "\t`description`\tTEXT,\n" +
    "\t`status`\tINTEGER NOT NULL DEFAULT 0\n" +
    ");"

const select_all_todos = "SELECT title,description,status FROM todo;"

const insert_todo = 'insert into todo(title,description,status)values(?,?,?);'

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

/**
 * [getAll get all the todos saved from db]
 * @param  {[string]} db     [description]
 * @param  {[array]} params [description]
 * @return {[type]}        [description]
 */
exports.getTodos = function(db,params,completeCallback){
    var arr = [];
    db.each(select_all_todos, function(err, row)  {
      if (err)    
        throw err; 
      arr.push(row);             
    },
    function complete(err,found){
        completeCallback(err,found,arr)
    }); 
}

/**
 * [insertTodo insert todo into DB]
 * @param  {[db connection]} db       [description]
 * @param  {[array]} params   [description]
 * @param  {[type]} response [description]
 * @return {[type]}          [description]
 */
exports.insertTodo = function(db,params){
    db.run(insert_todo,params,function(err){
        if(err) throw err;
        console.log(this.lastID)
    })
}
