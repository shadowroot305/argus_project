var pool = require('./mysql_con').pool;


module.exports.getProfiles = function(callback) {
    pool.getConnection(function(err, conn) {
        if (err) {
            if (conn) conn.release();

            callback(err, { code: 500, status: "Error in the connection to the database" })
            return;
        }
        conn.query("SELECT * FROM profile, eyes WHERE FK_eyes_id = eyes_id", 

            function(err, result) {
                conn.release();
                console.log(err)
                console.log(result)
                callback(false, { code: 200, status: "ok", data: result })
            })
    })
}

//SELECT * FROM profile, religion, gender, orientation, nationality, service, status WHERE FK_religion_id = religion_id AND FK_gender_id = gender_id AND FK_orientation_id = orientation_id AND FK_nationality_id = nationality_id AND FK_service_id = service_id AND FK_status_id = status_id