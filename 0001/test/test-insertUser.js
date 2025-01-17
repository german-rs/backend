const userModel = require('../models/userModel');

const data = {
  name: 'Juan Pérez',
  email: 'juan@example.com',
  password: '123456' 
};

userModel.createUser(data)
  .then(() => console.log('Operación completada'))
  .catch((err) => console.error('Hubo un error:', err.message));