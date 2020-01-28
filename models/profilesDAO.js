var pool = require('./mysql_con').pool;


module.exports.getProfiles = function(callback) {
    pool.getConnection(function(err, conn) {
        if (err) {
            if (conn) conn.release();

            callback(err, { code: 500, status: "Error in the connection to the database" })
            return;
        }
        conn.query("SELECT * FROM profile, religion WHERE FK_religion_id = religion_id", 

            function(err, result) {
                conn.release();
                console.log(err)
                console.log(result)
                callback(false, { code: 200, status: "ok", data: result })
            })
    })
}
