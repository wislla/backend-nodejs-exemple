const express = require('express');
const GrupoProduto = require('../controllers/GrupoProdutoController');


const routes = express.Router();


routes.post('/', GrupoProduto.store);
routes.get('/',  GrupoProduto.index);
routes.put('/:id',  GrupoProduto.update);
routes.delete('/:id', GrupoProduto.delete);

module.exports  = routes;