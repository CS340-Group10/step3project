var mysql = require('mysql')
var pool = mysql.createPool({
    connectionLimit : 10,
    host            : 'classmysql.engr.oregonstate.edu',
    user            : 'cs340_lindorg',
    password        :  '0983',
    database        :  'cs340_lindorg'
}); 


// Testing the connection:  connection pass
/*
pool.getConnection(function(err, connection) {
	if (err) throw err;
	console.log("Connected!");
});
*/

module.exports.pool = pool;
