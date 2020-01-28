var mysql = require('mysql');


var pool  = mysql.createPool({
    connectionLimit : 5,
    host     : 'remotemysql.com',
    user     : 'fzlyCa7YV6',
    password : '3e3bdrp7OZ',
    database : 'fzlyCa7YV6',
});

module.exports.pool = pool;
