var express = require('express');
var router = express.Router();

//koneksi db
//var newconn = require('./config/mysql_config');
//var conn = newconn();
var mysql = require('mysql');


	// Konfigurasi koneksi
	var Conn = mysql.createConnection({
		host: 'localhost',
		user: 'root',
		port: 3306,
		//password: 'xxxxxxx',
		database: 'test'
	});
	  
		
	
	
/* GET member listing. */
router.get('/daftar_member', function(req, res, next) {
  Conn.query('select * from member',function(err, result) {
	    if (err){
   			 // throw err;
			  res.send(err);
		} else{
			  res.setHeader('Content-Type', 'application/json');
			  res.status(200).json(result);
			  res.end;
			  //res.render('member/daftar_member',{data:result});
        }		
    });
});

router.get('/tambah_member', function(req, res, next) {
  res.render('member/tambah_member');
});

router.post('/proses_tambah_member', function(req, res, next) {
    /* var post = {
		nama: req.body.nama,
		alamat: req.body.alamat
	}; */
	Conn.query('INSERT INTO member(nama,alamat) VALUES("'+req.body.nama+'","'+req.body.alamat+'")',function(err, result) {
	    if (err){
   			 // throw err;
			  res.send(err);
		} else{
              console.log(result['affectedRows']);
			  res.redirect('/crud/tambah_member');
        }		
    });
});
module.exports = router;
