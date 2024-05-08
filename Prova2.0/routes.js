// Iniciando Route do Express
const express = require('express');
const route = express.Router();

// Importando os Controllers
const home = require('./src/controllers/home');


// Iniciando as rotas
route.get('/', home.pagInicio);

route.get('/Chamado/:tipo', home.pagChamado);
route.post('/Chamado/:tipo', home.cadastrarChamado);

route.get('/:id/delete', home.deletarChamado);

route.post('/:id/update', home.updateChamado);



module.exports = route;