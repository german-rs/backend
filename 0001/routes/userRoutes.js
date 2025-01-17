const express = require('express');
const userController = require('../controllers/userController');

const router = express.Router();

// Ruta para obtener los usuarios.
router.get('/', userController.getUsers); 

// Ruta para crear un usuario.
router.post('/usuarios', userController.createUser);

module.exports = router;
