const express = require('express');
const ClasseProduto = require('../controllers/ClasseProdutoController');


const routes = express.Router();
//routes.post('/:clint_id/empresa/:empresa_id', ClienteController.store);
routes.post('/', ClasseProduto.store);
routes.get('/',  ClasseProduto.index);
routes.put('/:id',  ClasseProduto.update);
routes.delete('/:id', ClasseProduto.delete);

module.exports  = routes;