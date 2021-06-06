const express = require('express');
const ClienteController = require('../controllers/ClienteController');


const routes = express.Router();
//routes.post('/:clint_id/empresa/:empresa_id', ClienteController.store);
routes.post('/', ClienteController.store);
routes.get('/',  ClienteController.index);
routes.put('/:id',  ClienteController.update);
routes.delete('/:id', ClienteController.delete);

module.exports  = routes;