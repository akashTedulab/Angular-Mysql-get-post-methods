const mysql = require('mysql')

const con = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'root',
    database: 'userdata'
})

con.connect((err) => {
    if(err) throw err;
    console.log("Connected")
})

module.exports = con;