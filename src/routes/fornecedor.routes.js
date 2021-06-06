const express = require('express');
const FronecedorController = require('../controllers/FronecedorController');

const routes = express.Router();
routes.post('/', FronecedorController.store);
routes.get('/',  FronecedorController.index);
routes.put('/:id',  FronecedorController.update);
routes.delete('/:id', FronecedorController.delete);

module.exports  = routes;