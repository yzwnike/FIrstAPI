const express = require('express');
const app = express();
const port = 3000;

// Datos de la clase: 11 titulares del Atlético de Madrid
const estudiantes = [
  'Jan Oblak', // Portero
  'Nahuel Molina', // Lateral derecho
  'José María Giménez', // Central
  'Stefan Savić', // Central
  'Mario Hermoso', // Central/Lateral izquierdo
  'Rodrigo de Paul', // Centrocampista
  'Koke Resurrección', // Centrocampista
  'Marcos Llorente', // Centrocampista
  'Antoine Griezmann', // Delantero
  'Álvaro Morata', // Delantero
  'Yannick Carrasco' // Extremo
];

// Ruta principal que devuelve el JSON con los nombres y el número total de jugadores
app.get('/api/clase', (req, res) => {
  res.json({
    totalAlumnos: estudiantes.length,
    integrantes: estudiantes
  });
});

// Inicia el servidor en localhost
app.listen(port, () => {
  console.log(`API corriendo en http://localhost:${port}/api/clase`);
});
