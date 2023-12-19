const mysql = require("mysql2")

const connection = mysql.createConnection({
  host: 'localhost',
  port: 3306,
  user: 'root',
  password: 'YYm1994',
  database: 'node'
})
connection.connect()

module.exports = connection
