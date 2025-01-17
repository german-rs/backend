const db = require('../config/db');

// Obtener todos los usuarios
const getAllUsers = (callback) => {
  const query = 'SELECT * FROM user';
  db.query(query, callback);
};

// Insertar un usuario.
const createUser = async (data) => {
  const query = 'INSERT INTO user (name, email, password) VALUES (?, ?, ?)';
  try {
    const [results] = await db.promise().query(query, [data.name, data.email, data.password]);
    console.log('Usuario insertado correctamente:', results);
    return results;
  } catch (err) {
    console.error('Error insertando usuario:', err.message);
    throw err;
  }
};


module.exports = {
  getAllUsers,
  createUser
};
