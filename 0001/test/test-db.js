const db = require('../config/db'); 

// Realiza una consulta de prueba
db.query('SELECT 1 + 1 AS solution', (err, results) => {
  if (err) {
    console.error('Error ejecutando la consulta:', err.message);
    return;
  }
  console.log('La consulta fue exitosa. Resultado:', results[0].solution);
});

db.end();