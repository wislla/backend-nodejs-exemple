const express = require('express');
const MarcaProduto = require('../controllers/MarcaProdutoController');


const routes = express.Router();


routes.post('/', MarcaProduto.store);
routes.get('/',  MarcaProduto.index);
routes.put('/:id',  MarcaProduto.update);
routes.delete('/:id', MarcaProduto.delete);

module.exports  = routes;