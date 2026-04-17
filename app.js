const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const path = require('path'); // ← IMPORTANTE: Agregar esto

const productosRoutes = require('./routes/productos');

const app = express();

// Middlewares
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// ✅ Servir archivos estáticos (para que funcione tu index.html)
app.use(express.static(__dirname)); // Sirve archivos en la misma carpeta
// O mejor aún, crea una carpeta 'public' y usa:
// app.use(express.static('public'));

// ✅ Ruta principal para mostrar tu interfaz
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

// Rutas de API
app.use('/api', productosRoutes);

// ✅ Manejo de errores 404 (opcional pero profesional)
app.use((req, res) => {
    res.status(404).json({ 
        error: 'Ruta no encontrada',
        mensaje: 'Usa /api/productos para la API o / para la interfaz'
    });
});

// Iniciar servidor
app.listen(3000, () => {
    console.log("🚀 Servidor corriendo en:");
    console.log("📡 Interfaz: http://localhost:3000");
    console.log("📊 API: http://localhost:3000/api/productos");
});