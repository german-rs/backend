require('dotenv').config({ path: '.env' }); 

const express = require('express');
const userRoutes = require('./0001/routes/userRoutes');

const app = express();

// Middlewares
app.use(express.json()); // Parsear JSON

// Rutas
app.use('/api/usuarios', userRoutes);

// Ruta de inicio
app.get('/', (req, res) => {
  res.send('Esta es la página Home');
});

// Iniciar el servidor
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Servidor escuchando en http://localhost:${PORT}`);
});