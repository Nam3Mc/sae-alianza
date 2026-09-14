require('dotenv').config();
const express = require('express');
const expressLayouts = require('express-ejs-layouts');
const path = require('path');
const routes = require('./routes/index');

const app = express();
const PORT = process.env.PORT || 3000;

// Configuración de EJS + Layouts
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use(expressLayouts);
app.set('layout', 'layout');

// Middleware
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Rutas
app.use('/', routes);

// Manejo de errores 404
app.use((req, res) => {
  res.status(404).render('404', { title: 'Página no encontrada' });
});

// Iniciar servidor
app.listen(PORT, () => {
  console.log(`✅ SAE Crecer en Bienestar corriendo en http://localhost:${PORT}`);
});