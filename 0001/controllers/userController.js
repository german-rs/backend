const userModel = require('../models/userModel');

// Controlador para obtener usuarios
const getUsers = (req, res) => {
  userModel.getAllUsers((err, results) => {
    if (err) {
      console.error('Error obteniendo usuarios:', err.message);
      return res.status(500).json({ error: 'Error en el servidor' });
    }
    res.json(results);
  });
};


// Controlador para crear un usuario
const createUser = async (req, res) => {
  const { name, email, password } = req.body; 

  try {
    const result = await userModel.createUser({ name, email, password });
    res.status(201).json({ mensaje: 'Usuario creado', resultado: result });
  } catch (err) {
    console.error(err.message);
    res.status(500).json({ error: 'Error al crear el usuario' });
  }
};


module.exports = {
  getUsers,
  createUser
};
