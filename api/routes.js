const express = require('express');
const routes = express.Router();

const Usuario = require('../api/controllers/usuarios');

routes.get('/api/usuarios', Usuario.index);

routes.post('/api/usuarios', Usuario.create);

routes.delete('/api/usuarios/:id', Usuario.delete);

module.exports = routes;