const express = require('express');
const CorProduto = require('../controllers/CorProdutoController');


const routes = express.Router();


routes.post('/', CorProduto.store);
routes.get('/',  CorProduto.index);
routes.put('/:id',  CorProduto.update);
routes.delete('/:id', CorProduto.delete);

module.exports  = routes;