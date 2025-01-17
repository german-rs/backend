const mysql = require('mysql2');
require('dotenv').config({ path: '../../.env' }); 

const db = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  port: 8889,
});

db.connect((err) => {
  if (err) {
    console.error('Error conectando a MySQL:', err.message);
    process.exit(1);
  }
  console.log('Conexión exitosa a MySQL');
});

module.exports = db;
