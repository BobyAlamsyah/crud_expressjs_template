var mysql = require('mysql');

function mysql_config(){
	// Konfigurasi koneksi
	var dbConn = mysql.createConnection({
		host: '103.147.154.24',
		user: 'unlimit3_boby',
		port: 3306,
		password: 'rootQ!W@E#',
		database: 'unlimit3_test'
	});
	  
	// Koneksi ke database
	dbConn.connect();
return dbConn;	
	}
module.exports = mysql_config;
